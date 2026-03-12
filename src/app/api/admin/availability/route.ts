import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const { data, error } = await supabaseAdmin
    .from('availability')
    .select('*')
    .order('day_of_week', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ availability: data });
}

export async function POST(req: NextRequest) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  let body: { day_of_week?: number; start_time?: string; end_time?: string; is_open?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { day_of_week, start_time, end_time, is_open } = body;

  if (day_of_week === undefined) {
    return NextResponse.json({ error: 'day_of_week is required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('availability')
    .upsert(
      { day_of_week, start_time: start_time ?? null, end_time: end_time ?? null, is_open: is_open ?? true },
      { onConflict: 'day_of_week' }
    )
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ availability: data });
}
