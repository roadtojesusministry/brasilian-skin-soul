import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { requireAdminAuth } from '@/lib/admin-auth';

// Parse birthday string, return 1-based month or null if unparseable
function parseBirthdayMonth(birthday: string): number | null {
  if (!birthday || !birthday.trim()) return null;

  const MONTH_NAMES = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
  ];

  const lc = birthday.toLowerCase().trim();

  // Try named month first: "May 29", "October 1st", etc.
  for (let i = 0; i < MONTH_NAMES.length; i++) {
    if (lc.startsWith(MONTH_NAMES[i])) return i + 1;
  }

  // Short month names: "jan", "feb", etc.
  for (let i = 0; i < MONTH_NAMES.length; i++) {
    if (lc.startsWith(MONTH_NAMES[i].slice(0, 3))) return i + 1;
  }

  // "MM/DD", "MM/DD/YY", "MM/DD/YYYY", etc.
  const slashParts = birthday.split('/');
  if (slashParts.length >= 2) {
    const m = parseInt(slashParts[0], 10);
    if (!isNaN(m) && m >= 1 && m <= 12) return m;
  }

  // ISO "YYYY-MM-DD"
  const dashParts = birthday.split('-');
  if (dashParts.length === 3 && dashParts[0].length === 4) {
    const m = parseInt(dashParts[1], 10);
    if (!isNaN(m) && m >= 1 && m <= 12) return m;
  }

  return null;
}

export async function GET(req: NextRequest) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const currentMonth = now.getMonth() + 1; // 1-based

  // Compute week range (Monday–Sunday)
  const dayOfWeek = now.getDay(); // 0 = Sunday
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  const weekStart = monday.toISOString().slice(0, 10);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const weekEnd = sunday.toISOString().slice(0, 10);

  // Compute last month range
  const firstOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastDayOfLastMonth = new Date(firstOfThisMonth.getTime() - 1);
  const thisMonthStart = firstOfThisMonth.toISOString().slice(0, 10);
  const lastMonthStart = firstOfLastMonth.toISOString().slice(0, 10);
  const lastMonthEnd = lastDayOfLastMonth.toISOString().slice(0, 10);

  // Fetch all bookings (needed for all-time stats)
  const { data: allBookings, error: bookingsError } = await supabaseAdmin
    .from('bookings')
    .select('*')
    .order('booking_date', { ascending: false })
    .order('start_time', { ascending: false });

  if (bookingsError) {
    return NextResponse.json({ error: bookingsError.message }, { status: 500 });
  }

  const bookings = allBookings ?? [];

  // Today's bookings
  const todayBookings = bookings
    .filter(b => b.booking_date === todayStr)
    .sort((a: { start_time: string }, b: { start_time: string }) => a.start_time.localeCompare(b.start_time));

  // This week's bookings
  const weekBookings = bookings.filter(
    b => b.booking_date >= weekStart && b.booking_date <= weekEnd
  );
  const weekRevenue = weekBookings
    .filter((b: { status: string }) => b.status === 'confirmed' || b.status === 'completed')
    .reduce((sum: number, b: { service_price: number }) => sum + (b.service_price ?? 0), 0);
  const weekCompleted = weekBookings.filter((b: { status: string }) => b.status === 'completed').length;
  const weekUpcoming = weekBookings.filter(
    (b: { status: string; booking_date: string }) =>
      (b.status === 'confirmed') && b.booking_date >= todayStr
  ).length;

  // Revenue calculations
  const revenueFilter = (b: { status: string }) =>
    b.status === 'confirmed' || b.status === 'completed';

  const monthRevenue = bookings
    .filter((b: { booking_date: string; status: string }) => b.booking_date >= thisMonthStart && revenueFilter(b))
    .reduce((sum: number, b: { service_price: number }) => sum + (b.service_price ?? 0), 0);

  const lastMonthRevenue = bookings
    .filter(
      (b: { booking_date: string; status: string }) =>
        b.booking_date >= lastMonthStart && b.booking_date <= lastMonthEnd && revenueFilter(b)
    )
    .reduce((sum: number, b: { service_price: number }) => sum + (b.service_price ?? 0), 0);

  const revenueBookings = bookings.filter(revenueFilter);
  const allTimeRevenue = revenueBookings.reduce(
    (sum: number, b: { service_price: number }) => sum + (b.service_price ?? 0), 0
  );
  const avgBookingValue =
    revenueBookings.length > 0
      ? Math.round(allTimeRevenue / revenueBookings.length)
      : 0;

  // Recent 5 bookings
  const recentBookings = bookings.slice(0, 5);

  // Upcoming birthdays (same month)
  const { data: clientsData } = await supabaseAdmin
    .from('clients')
    .select('id, name, phone, birthday');

  const upcomingBirthdays = (clientsData ?? []).filter((c: { birthday: string }) => {
    const month = parseBirthdayMonth(c.birthday);
    return month === currentMonth;
  });

  return NextResponse.json({
    todayBookings,
    weekBookings,
    weekRevenue,
    weekCompleted,
    weekUpcoming,
    monthRevenue,
    lastMonthRevenue,
    allTimeRevenue,
    avgBookingValue,
    upcomingBirthdays,
    recentBookings,
  });
}
