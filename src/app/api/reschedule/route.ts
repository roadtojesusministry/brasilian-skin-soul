import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getServiceById } from '@/lib/services-data';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brasilianskinsoul.com';

// ── Helpers ──────────────────────────────────────────────────────────────────

function displayTo24(display: string): string {
  const match = display.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) throw new Error(`Invalid time format: ${display}`);
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === 'AM' && h === 12) h = 0;
  if (period === 'PM' && h !== 12) h += 12;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function addMinutes(time24: string, minutes: number): string {
  const [h, m] = time24.split(':').map(Number);
  const total = h * 60 + m + minutes;
  const newH = Math.floor(total / 60) % 24;
  const newM = total % 60;
  return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
}

function formatTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  return d.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'UTC',
  });
}

// ── GET /api/reschedule?token=<uuid> ─────────────────────────────────────────
// Returns booking details for the given reschedule token

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  }

  const { data: booking, error } = await supabaseAdmin
    .from('bookings')
    .select('id, service_id, service_name, service_duration_min, session_number, total_sessions, booking_date, start_time, client_name, client_email, reschedule_token')
    .eq('reschedule_token', token)
    .single();

  if (error || !booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json({
    booking_id:           booking.id,
    service_id:           booking.service_id,
    service_name:         booking.service_name,
    service_duration_min: booking.service_duration_min,
    session_number:       booking.session_number,
    total_sessions:       booking.total_sessions,
    booking_date:         booking.booking_date,
    start_time:           booking.start_time,
    client_name:          booking.client_name,
    client_email:         booking.client_email,
    reschedule_token:     booking.reschedule_token,
  });
}

// ── PATCH /api/reschedule?token=<uuid> ───────────────────────────────────────
// Body: { date: "YYYY-MM-DD", time: "H:MM AM/PM" }
// Updates the booking's date and time, sends notification emails

export async function PATCH(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  }

  let body: { date?: string; time?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { date: newDate, time: newTime } = body;
  if (!newDate || !newTime) {
    return NextResponse.json({ error: 'Missing date or time' }, { status: 400 });
  }

  // Fetch the booking
  const { data: booking, error: fetchError } = await supabaseAdmin
    .from('bookings')
    .select('id, service_id, service_name, service_duration_min, session_number, total_sessions, booking_date, start_time, client_name, client_email, reschedule_token')
    .eq('reschedule_token', token)
    .single();

  if (fetchError || !booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  // Recalculate times
  let newStart24: string;
  try {
    newStart24 = displayTo24(newTime);
  } catch {
    newStart24 = newTime;
  }

  const durationMin = booking.service_duration_min as number;
  const newEnd24 = addMinutes(newStart24, durationMin);

  // Update the booking
  const { error: updateError } = await supabaseAdmin
    .from('bookings')
    .update({
      booking_date: newDate,
      start_time:   newStart24,
      end_time:     newEnd24,
    })
    .eq('reschedule_token', token);

  if (updateError) {
    console.error('Reschedule update error:', updateError);
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }

  const displayDate  = formatDate(newDate);
  const displayStart = formatTime(newStart24);
  const adminEmail   = process.env.ADMIN_EMAIL || 'claudia@brasilianskinsoul.com';
  const isSeries     = (booking.total_sessions as number) > 1;
  const sessionLabel = isSeries ? ` — Session ${booking.session_number} of ${booking.total_sessions}` : '';

  // Look up service for the availability check (not strictly needed here but nice to have)
  const service = getServiceById(booking.service_id as string);
  const rescheduleUrl = `${SITE_URL}/reschedule?token=${token}`;

  // ── Client rescheduled confirmation email ─────────────────────────────────
  const clientHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F2;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F2;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#1B4D2E;padding:40px 48px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.2em;color:#C9A96E;text-transform:uppercase;">Brasilian Skin Soul</p>
            <h1 style="margin:0;font-size:30px;font-weight:300;color:#ffffff;font-family:Georgia,serif;">Your appointment has been rescheduled ✓</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:48px;">
            <p style="color:#1B4D2E;font-size:17px;margin:0 0 24px;">Hi ${booking.client_name},</p>
            <p style="color:#31674a;font-size:15px;line-height:1.7;margin:0 0 32px;">
              Your appointment has been updated. Here are your new details:
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F2;border-radius:12px;border:2px solid #C9A96E;overflow:hidden;margin-bottom:32px;">
              <tr><td style="padding:32px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Service</span><br>
                      <strong style="color:#1B4D2E;font-size:18px;font-family:Georgia,serif;">${booking.service_name}${sessionLabel}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">New Date</span><br>
                      <strong style="color:#1B4D2E;font-size:16px;">${displayDate}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">New Time</span><br>
                      <strong style="color:#1B4D2E;font-size:16px;">${displayStart}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 4px;">
                      <a href="${rescheduleUrl}" style="display:inline-block;color:#C9A96E;font-size:14px;text-decoration:none;">
                        Need to reschedule again? Click here →
                      </a>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f7f4;border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:24px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Location</p>
                <p style="margin:0;color:#1B4D2E;font-size:15px;line-height:1.6;">
                  5303 Comercio Lane, Suite #2<br>Woodland Hills, CA 91364
                </p>
                <p style="margin:8px 0 0;color:#1B4D2E;font-size:15px;">📞 (818) 577-5421</p>
              </td></tr>
            </table>
            <p style="color:#42825e;font-size:14px;line-height:1.7;margin:0;">
              Please arrive 5–10 minutes early. We look forward to seeing you! 🌿
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#1B4D2E;padding:24px 48px;text-align:center;">
            <p style="margin:0;color:#C9A96E;font-size:12px;letter-spacing:0.1em;">
              BRASILIAN SKIN SOUL · WOODLAND HILLS, CA
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // ── Admin notification ────────────────────────────────────────────────────
  const adminText = `Booking rescheduled: ${booking.client_name}${sessionLabel} — ${booking.service_name} — new time: ${displayDate} at ${displayStart}

Client email: ${booking.client_email}
Booking ID: ${booking.id}
Service: ${service?.name ?? booking.service_name}
`;

  try {
    await Promise.all([
      resend.emails.send({
        from: 'Brasilian Skin Soul <noreply@brasilianskinsoul.com>',
        to: booking.client_email as string,
        subject: `Your appointment has been rescheduled — ${displayDate}`,
        html: clientHtml,
      }),
      resend.emails.send({
        from: 'Booking System <noreply@brasilianskinsoul.com>',
        to: adminEmail,
        subject: `Rescheduled: ${booking.client_name} — ${booking.service_name}${sessionLabel}`,
        text: adminText,
      }),
    ]);
  } catch (emailError) {
    console.error('Reschedule email error (non-fatal):', emailError);
  }

  return NextResponse.json({
    success:     true,
    booking_date: newDate,
    start_time:  newStart24,
  });
}
