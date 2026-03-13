import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const { searchParams } = new URL(req.url);
  const yearParam  = searchParams.get('year');
  const monthParam = searchParams.get('month');

  const year  = yearParam  ? parseInt(yearParam,  10) : new Date().getFullYear();
  const month = monthParam ? parseInt(monthParam, 10) : new Date().getMonth() + 1;

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return NextResponse.json({ error: 'Invalid year or month' }, { status: 400 });
  }

  const monthStr = String(month).padStart(2, '0');
  const prefix   = `${year}-${monthStr}`;

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('service_price, status')
    .like('booking_date', `${prefix}-%`);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const qualifying = (data ?? []).filter(
    (b: { status: string }) => b.status === 'confirmed' || b.status === 'completed'
  );

  const revenue = qualifying.reduce(
    (sum: number, b: { service_price: number }) => sum + (b.service_price ?? 0),
    0
  );

  return NextResponse.json({
    revenue,
    bookingCount: qualifying.length,
    year,
    month,
  });
}
