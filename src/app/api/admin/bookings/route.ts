import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const { searchParams } = new URL(req.url);
  const upcoming = searchParams.get('upcoming') === 'true';

  let query = supabaseAdmin
    .from('bookings')
    .select('*')
    .order('booking_date', { ascending: true })
    .order('start_time', { ascending: true });

  if (upcoming) {
    const today = new Date().toISOString().slice(0, 10);
    query = query.gte('booking_date', today);
  }

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookings: data });
}
