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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brasilianskinsoul.com';

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // ── Route: Series booking ──────────────────────────────────────────────────
  if (body.is_series === true) {
    return handleSeriesBooking(body);
  }

  // ── Route: Single booking (existing logic, unchanged) ─────────────────────
  return handleSingleBooking(body);
}

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE BOOKING
// ─────────────────────────────────────────────────────────────────────────────

async function handleSingleBooking(body: Record<string, unknown>) {
  const service_id    = body.service_id as string;
  const client_name   = body.client_name as string;
  const client_email  = body.client_email as string;
  const client_phone  = body.client_phone as string;
  const booking_date  = body.booking_date as string;
  const start_time    = body.start_time as string;
  const notes         = body.notes as string | undefined;
  const addonIds      = (body.addons as string[]) ?? [];
  const addonNames    = (body.addon_names as string[]) ?? [];
  const addonDuration = parseInt(String(body.addon_duration ?? '0'), 10) || 0;

  const required = { service_id, client_name, client_email, client_phone, booking_date, start_time };
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
  }

  const service = getServiceById(service_id);
  if (!service) {
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  }

  const ADDON_PRICES: Record<string, number> = {
    dermaplane: 45, 'glycolic-peel': 35, led: 40, co2: 45, 'eye-lift': 50,
    oxygen: 40, microderm: 55, 'microcurrent-addon': 55, 'therma-addon': 60,
    extractions: 30, decollete: 45, 'glow-mask': 25,
  };
  const addonPriceTotal = addonIds.reduce((sum, id) => sum + (ADDON_PRICES[id] ?? 0), 0);
  const totalPrice = service.price + addonPriceTotal;

  let start24: string;
  try {
    start24 = displayTo24(start_time);
  } catch {
    start24 = start_time;
  }
  const totalDuration = service.duration_min + addonDuration;
  const end24 = addMinutes(start24, totalDuration);

  const addonNoteSection = addonNames.length > 0
    ? `\n\nAdd-Ons Selected:\n${addonNames.map(n => `• ${n}`).join('\n')}`
    : '';
  const fullNotes = (notes ? notes + addonNoteSection : addonNoteSection.trim()) || null;

  // Insert and SELECT back reschedule_token
  const { data: booking, error: insertError } = await supabaseAdmin
    .from('bookings')
    .insert({
      service_id,
      service_name:         service.name,
      service_duration_min: totalDuration,
      service_price:        totalPrice,
      client_name,
      client_email,
      client_phone,
      booking_date,
      start_time:    start24,
      end_time:      end24,
      status:        'confirmed',
      payment_status:'pending',
      notes:         fullNotes,
    })
    .select('id, reschedule_token')
    .single();

  if (insertError || !booking) {
    console.error('Booking insert error:', insertError);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }

  // Auto-create client record (non-blocking)
  try {
    await supabaseAdmin
      .from('clients')
      .upsert(
        { name: client_name, email: client_email, phone: client_phone },
        { onConflict: 'email', ignoreDuplicates: true }
      );
  } catch (clientUpsertError) {
    console.error('Client upsert error (non-fatal):', clientUpsertError);
  }

  const displayDate  = formatDate(booking_date);
  const displayStart = formatTime(start24);
  const adminEmail   = process.env.ADMIN_EMAIL || 'claudia@brasilianskinsoul.com';
  const rescheduleUrl = `${SITE_URL}/reschedule?token=${booking.reschedule_token}`;

  // ── Client confirmation email ─────────────────────────────────────────────
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
                  ${addonNames.length > 0 ? `
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Add-Ons</span><br>
                      <strong style="color:#1B4D2E;font-size:15px;">${addonNames.join(', ')}</strong>
                    </td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #ece3d0;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Investment</span><br>
                      <strong style="color:#1B4D2E;font-size:20px;font-family:Georgia,serif;">$${totalPrice}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 4px;">
                      <a href="${rescheduleUrl}" style="display:inline-block;color:#C9A96E;font-size:14px;text-decoration:none;">
                        Need to reschedule? Click here →
                      </a>
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
              Please arrive 5–10 minutes early. If you need to reschedule, use the link above or call us at least 24 hours in advance.
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

  // ── Admin notification email ──────────────────────────────────────────────
  const adminText = `New booking received!

Client:   ${client_name}
Email:    ${client_email}
Phone:    ${client_phone}
Service:  ${service.name}${addonNames.length > 0 ? `\nAdd-Ons:  ${addonNames.join(', ')}` : ''}
Date:     ${displayDate}
Time:     ${displayStart}
Price:    $${totalPrice}${addonPriceTotal > 0 ? ` (service $${service.price} + add-ons $${addonPriceTotal})` : ''}
Duration: ${totalDuration} min
${notes ? `Notes:    ${notes}` : ''}

Booking ID: ${booking.id}
Status: confirmed / payment: pending
`;

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

// ─────────────────────────────────────────────────────────────────────────────
// SERIES BOOKING
// ─────────────────────────────────────────────────────────────────────────────

interface SeriesSessionInput {
  date: string;
  time: string;
}

async function handleSeriesBooking(body: Record<string, unknown>) {
  const service_id  = body.service_id as string;
  const client_name = body.client_name as string;
  const client_email= body.client_email as string;
  const client_phone= body.client_phone as string;
  const sessions    = body.sessions as SeriesSessionInput[];
  const notes       = body.notes as string | undefined;

  // Validate
  const required = { service_id, client_name, client_email, client_phone };
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
  }
  if (!Array.isArray(sessions) || sessions.length !== 3) {
    return NextResponse.json({ error: 'Series bookings require exactly 3 sessions' }, { status: 400 });
  }

  const service = getServiceById(service_id);
  if (!service) {
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  }

  const series_id = crypto.randomUUID();

  // Build insert rows for all 3 sessions
  const insertRows = sessions.map((s, idx) => {
    let start24: string;
    try {
      start24 = displayTo24(s.time);
    } catch {
      start24 = s.time;
    }
    const end24 = addMinutes(start24, service.duration_min);
    return {
      service_id,
      service_name:         service.name,
      service_duration_min: service.duration_min,
      service_price:        service.price,
      client_name,
      client_email,
      client_phone,
      booking_date:  s.date,
      start_time:    start24,
      end_time:      end24,
      status:        'confirmed',
      payment_status:'pending',
      notes:         notes || null,
      series_id,
      session_number:  idx + 1,
      total_sessions:  3,
    };
  });

  const { data: inserted, error: insertError } = await supabaseAdmin
    .from('bookings')
    .insert(insertRows)
    .select('id, reschedule_token, session_number');

  if (insertError || !inserted || inserted.length !== 3) {
    console.error('Series insert error:', insertError);
    return NextResponse.json({ error: 'Failed to create series bookings' }, { status: 500 });
  }

  // Sort by session_number so tokens line up with sessions[0..2]
  const sorted = [...inserted].sort((a, b) => a.session_number - b.session_number);
  const booking_ids = sorted.map((r: { id: string }) => r.id);
  const tokens      = sorted.map((r: { reschedule_token: string }) => r.reschedule_token);

  // Auto-create client record (non-blocking, once for the series)
  try {
    await supabaseAdmin
      .from('clients')
      .upsert(
        { name: client_name, email: client_email, phone: client_phone },
        { onConflict: 'email', ignoreDuplicates: true }
      );
  } catch (clientUpsertError) {
    console.error('Client upsert error (non-fatal):', clientUpsertError);
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'claudia@brasilianskinsoul.com';

  // Format session display strings
  const sessionDisplays = sessions.map((s, i) => {
    let start24: string;
    try { start24 = displayTo24(s.time); } catch { start24 = s.time; }
    return {
      label:   `Session ${i + 1}`,
      dateStr: formatDate(s.date),
      timeStr: formatTime(start24),
      token:   tokens[i],
    };
  });

  // ── Client series confirmation email ──────────────────────────────────────
  const sessionRows = sessionDisplays.map(s => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ece3d0;">
        <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">${s.label}</span><br>
        <strong style="color:#1B4D2E;font-size:15px;">${s.dateStr} at ${s.timeStr}</strong><br>
        <a href="${SITE_URL}/reschedule?token=${s.token}"
           style="display:inline-block;margin-top:6px;color:#C9A96E;font-size:13px;text-decoration:none;">
          Reschedule ${s.label} →
        </a>
      </td>
    </tr>`).join('');

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
            <h1 style="margin:0;font-size:30px;font-weight:300;color:#ffffff;font-family:Georgia,serif;">Your 3-Session Journey is Booked ✨</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:48px;">
            <p style="color:#1B4D2E;font-size:17px;margin:0 0 8px;">Hi ${client_name},</p>
            <p style="color:#31674a;font-size:15px;line-height:1.7;margin:0 0 32px;">
              All three of your sessions are confirmed. Here's your complete schedule:
            </p>
            <!-- Sessions card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F2;border-radius:12px;border:2px solid #C9A96E;overflow:hidden;margin-bottom:24px;">
              <tr><td style="padding:24px 32px 8px;">
                <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">${service.name} — Transformation Series</span>
              </td></tr>
              <tr><td style="padding:0 32px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${sessionRows}
                  <tr>
                    <td style="padding:14px 0 4px;">
                      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Investment</span><br>
                      <strong style="color:#1B4D2E;font-size:18px;font-family:Georgia,serif;">$${service.price} per session</strong>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <!-- Tip -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f7f4;border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0;color:#1B4D2E;font-size:14px;line-height:1.7;">
                  💡 <strong>Need to reschedule?</strong> No problem — just use the individual session links above anytime.<br>
                  We recommend spacing sessions 1–2 weeks apart for best results.
                </p>
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
            <p style="color:#42825e;font-size:14px;line-height:1.7;margin:0;">
              We can't wait to see your transformation unfold. 🌿
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

  // ── Admin notification (plain text, all sessions) ─────────────────────────
  const adminText = `New SERIES booking!

Client:  ${client_name}
Email:   ${client_email}
Phone:   ${client_phone}
Service: ${service.name} (Transformation Series)

${sessionDisplays.map(s => `${s.label}: ${s.dateStr} at ${s.timeStr}`).join('\n')}

Price:    $${service.price} per session
Series ID: ${series_id}
Booking IDs: ${booking_ids.join(', ')}
`;

  try {
    await Promise.all([
      resend.emails.send({
        from: 'Brasilian Skin Soul <noreply@brasilianskinsoul.com>',
        to: client_email,
        subject: `Your ${service.name} series is confirmed ✨`,
        html: clientHtml,
      }),
      resend.emails.send({
        from: 'Booking System <noreply@brasilianskinsoul.com>',
        to: adminEmail,
        subject: `New series booking: ${client_name} — ${service.name}`,
        text: adminText,
      }),
    ]);
  } catch (emailError) {
    console.error('Series email send error (non-fatal):', emailError);
  }

  return NextResponse.json({ success: true, series_id, booking_ids });
}
