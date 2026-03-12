import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getServiceById } from '@/lib/services-data';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Convert "H:MM AM/PM" display time to "HH:MM" 24-hour string */
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

/** Add minutes to "HH:MM" and return "HH:MM" */
function addMinutes(time24: string, minutes: number): string {
  const [h, m] = time24.split(':').map(Number);
  const total = h * 60 + m + minutes;
  const newH = Math.floor(total / 60) % 24;
  const newM = total % 60;
  return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
}

/** Format "HH:MM" to "H:MM AM/PM" */
function formatTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

/** Format YYYY-MM-DD to "Tuesday, March 12, 2026" */
function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  return d.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'UTC',
  });
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { service_id, client_name, client_email, client_phone, booking_date, start_time, notes } = body;

  // Validate required fields
  const missing = ['service_id', 'client_name', 'client_email', 'client_phone', 'booking_date', 'start_time']
    .filter((f) => !body[f]);
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
  }

  // Look up service
  const service = getServiceById(service_id);
  if (!service) {
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  }

  // Calculate end_time (start_time may be "H:MM AM/PM" from slot display)
  let start24: string;
  try {
    start24 = displayTo24(start_time);
  } catch {
    // Already in 24h format
    start24 = start_time;
  }
  const end24 = addMinutes(start24, service.duration_min);

  // Insert booking
  const { data: booking, error: insertError } = await supabaseAdmin
    .from('bookings')
    .insert({
      service_id,
      service_name:         service.name,
      service_duration_min: service.duration_min,
      service_price:        service.price,
      client_name,
      client_email,
      client_phone,
      booking_date,
      start_time:    start24,
      end_time:      end24,
      status:        'confirmed',
      payment_status:'pending',
      notes:         notes || null,
    })
    .select()
    .single();

  if (insertError || !booking) {
    console.error('Booking insert error:', insertError);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }

  const displayDate = formatDate(booking_date);
  const displayStart = formatTime(start24);
  const adminEmail = process.env.ADMIN_EMAIL || 'claudia@brasilianskinsoul.com';

  // ── Client confirmation email ───────────────────────────────────────────
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
            <h1 style="margin:0;font-size:32px;font-weight:300;color:#ffffff;font-family:Georgia,serif;">Your appointment is confirmed ✨</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:48px;">
            <p style="color:#1B4D2E;font-size:17px;margin:0 0 24px;">Hi ${client_name},</p>
            <p style="color:#31674a;font-size:15px;line-height:1.7;margin:0 0 32px;">
              We're so excited to welcome you! Here are the details for your upcoming visit with Claudia.
            </p>
            <!-- Booking card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F2;border-radius:12px;border:2px solid #C9A96E;overflow:hidden;margin-bottom:32px;">
              <tr><td style="padding:32px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;vertical-align:top;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Service</span><br>
                      <strong style="color:#1B4D2E;font-size:18px;font-family:Georgia,serif;">${service.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Date</span><br>
                      <strong style="color:#1B4D2E;font-size:16px;">${displayDate}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Time</span><br>
                      <strong style="color:#1B4D2E;font-size:16px;">${displayStart}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Investment</span><br>
                      <strong style="color:#1B4D2E;font-size:20px;font-family:Georgia,serif;">$${service.price}</strong>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <!-- Location -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f7f4;border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:24px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Location</p>
                <p style="margin:0;color:#1B4D2E;font-size:15px;line-height:1.6;">
                  5303 Comercio Lane, Suite #2<br>Woodland Hills, CA 91364
                </p>
                <p style="margin:8px 0 0;color:#1B4D2E;font-size:15px;">📞 (818) 577-5421</p>
              </td></tr>
            </table>
            <p style="color:#42825e;font-size:14px;line-height:1.7;margin:0 0 8px;">
              Please arrive 5–10 minutes early. If you need to reschedule, call us at least 24 hours in advance.
            </p>
            <p style="color:#42825e;font-size:14px;line-height:1.7;margin:0;">
              We look forward to seeing you! 🌿
            </p>
          </td>
        </tr>
        <!-- Footer -->
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

  // ── Admin notification email ────────────────────────────────────────────
  const adminText = `New booking received!

Client:   ${client_name}
Email:    ${client_email}
Phone:    ${client_phone}
Service:  ${service.name}
Date:     ${displayDate}
Time:     ${displayStart}
Price:    $${service.price}
Duration: ${service.duration_min} min
${notes ? `Notes:    ${notes}` : ''}

Booking ID: ${booking.id}
Status: confirmed / payment: pending
`;

  // Fire emails (non-blocking — don't fail the booking if email fails)
  try {
    await Promise.all([
      resend.emails.send({
        from: 'Brasilian Skin Soul <noreply@brasilianskinsoul.com>',
        to: client_email,
        subject: 'Your appointment at Brasilian Skin Soul is confirmed ✨',
        html: clientHtml,
      }),
      resend.emails.send({
        from: 'Booking System <noreply@brasilianskinsoul.com>',
        to: adminEmail,
        subject: `New booking: ${client_name} — ${service.name}`,
        text: adminText,
      }),
    ]);
  } catch (emailError) {
    console.error('Email send error (non-fatal):', emailError);
  }

  return NextResponse.json({ success: true, booking_id: booking.id });
}
