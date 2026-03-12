import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getServiceById } from '@/lib/services-data';

/** Convert "HH:MM" or "HH:MM:SS" string to total minutes since midnight */
function timeToMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

/** Convert total minutes since midnight to "H:MM AM/PM" */
function minutesToDisplay(total: number): string {
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const period = h24 < 12 ? 'AM' : 'PM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');       // YYYY-MM-DD
  const serviceId = searchParams.get('service_id');

  if (!date || !serviceId) {
    return NextResponse.json({ error: 'date and service_id are required' }, { status: 400 });
  }

  // 1. Look up service duration
  const service = getServiceById(serviceId);
  if (!service) {
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  }
  const durationMin = service.duration_min;

  // 2. Get day_of_week for the date (parse as UTC to avoid timezone shifts)
  const [year, month, day] = date.split('-').map(Number);
  const dateObj = new Date(Date.UTC(year, month - 1, day));
  const dayOfWeek = dateObj.getUTCDay(); // 0=Sun … 6=Sat

  // 3. Query availability
  const { data: avail, error: availError } = await supabaseAdmin
    .from('availability')
    .select('*')
    .eq('day_of_week', dayOfWeek)
    .single();

  if (availError || !avail || !avail.is_open || !avail.start_time || !avail.end_time) {
    return NextResponse.json({ slots: [] });
  }

  const openMin  = timeToMinutes(avail.start_time);
  const closeMin = timeToMinutes(avail.end_time);

  // 4. Fetch blocked_times for this date
  const { data: blocked } = await supabaseAdmin
    .from('blocked_times')
    .select('*')
    .eq('date', date);

  // If any all_day block exists, return empty
  if (blocked && blocked.some((b: { all_day: boolean }) => b.all_day)) {
    return NextResponse.json({ slots: [] });
  }

  // 5. Fetch confirmed bookings for this date
  const { data: bookings } = await supabaseAdmin
    .from('bookings')
    .select('start_time, end_time')
    .eq('booking_date', date)
    .in('status', ['confirmed', 'completed']);

  // 6. Generate candidate start times every 30 min within open hours
  const BUFFER = 30; // minutes between appointments
  const slots: string[] = [];

  for (let start = openMin; start + durationMin + BUFFER <= closeMin; start += 30) {
    const end = start + durationMin;
    // The slot occupies [start, end], then needs BUFFER before next appointment can start
    // So this slot is only valid if end + BUFFER <= closeMin
    // (already enforced in the loop condition)

    // Check overlap with blocked time ranges
    const blockedByTime = blocked && blocked.some((b: { start_time?: string; end_time?: string; all_day: boolean }) => {
      if (b.all_day || !b.start_time || !b.end_time) return false;
      const bStart = timeToMinutes(b.start_time);
      const bEnd   = timeToMinutes(b.end_time);
      // Overlap: slot [start, end] overlaps block [bStart, bEnd]
      return start < bEnd && end > bStart;
    });
    if (blockedByTime) continue;

    // Check overlap with existing bookings
    // Each booking occupies [booking.start, booking.end + 30min buffer]
    const bookedConflict = bookings && bookings.some((bk: { start_time: string; end_time: string }) => {
      const bkStart = timeToMinutes(bk.start_time);
      const bkEnd   = timeToMinutes(bk.end_time) + BUFFER; // booking end + 30 min buffer
      // New slot [start, end + BUFFER] must not overlap existing [bkStart, bkEnd]
      const slotEnd = end + BUFFER;
      return start < bkEnd && slotEnd > bkStart;
    });
    if (bookedConflict) continue;

    slots.push(minutesToDisplay(start));
  }

  return NextResponse.json({ slots });
}
