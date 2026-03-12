import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const { data, error } = await supabaseAdmin
    .from('clients')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ client: data });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const body = await req.json();

  const { data, error } = await supabaseAdmin
    .from('clients')
    .update(body)
    .eq('id', params.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ client: data });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const { error } = await supabaseAdmin
    .from('clients')
    .delete()
    .eq('id', params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
