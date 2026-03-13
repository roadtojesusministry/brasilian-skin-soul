'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { CheckCircle } from 'lucide-react';

function toGoogleCalendarUrl(
  title: string,
  date: string,
  time: string,
  durationMin: number,
  location: string
) {
  const [year, month, day] = date.split('-').map(Number);
  const [hourStr, minuteStr] = time.replace(/\s?(AM|PM)/i, '').split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr || '0');
  const isPM = /PM/i.test(time);
  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;

  const pad = (n: number) => String(n).padStart(2, '0');
  const startDT = `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
  const endDate = new Date(year, month - 1, day, hour, minute + durationMin);
  const endDT = `${endDate.getFullYear()}${pad(endDate.getMonth() + 1)}${pad(endDate.getDate())}T${pad(endDate.getHours())}${pad(endDate.getMinutes())}00`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDT}/${endDT}&location=${encodeURIComponent(location)}`;
}

function ConfirmationContent() {
  const params = useSearchParams();

  const service = params.get('service') || '';
  const date = params.get('date') || '';
  const time = params.get('time') || '';
  const email = params.get('email') || '';
  const price = params.get('price') || '';
  const duration = parseInt(params.get('duration') || '60');
  const isSeries = params.get('series') === '1';
  const addons = params.get('addons') || '';

  let seriesSessions: { date: string; time: string }[] = [];
  try {
    const raw = params.get('sessions');
    if (raw) seriesSessions = JSON.parse(decodeURIComponent(raw));
  } catch {}

  const formatDisplayDate = (d: string) => {
    if (!d) return '';
    const [y, m, day] = d.split('-').map(Number);
    return new Date(y, m - 1, day).toLocaleDateString('en-US', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    });
  };

  return (
    <div className="text-center">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#f2f7f4] flex items-center justify-center">
          <CheckCircle size={40} className="text-[#1B4D2E]" />
        </div>
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-2">You&apos;re all set</p>
      <h2 className="font-serif text-5xl text-[#1B4D2E] font-light mb-2">
        {isSeries ? 'Series Booked' : 'Appointment Booked'}
      </h2>
      {email && (
        <p className="text-[#42825e] mb-8">
          A confirmation email has been sent to <strong>{email}</strong>
        </p>
      )}

      {/* Confirmation card */}
      <div className="bg-white border-2 border-[#C9A96E] rounded-2xl p-8 mb-8 text-left max-w-md mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-5">
          {isSeries ? 'Your Series Journey' : 'Your Appointment'}
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-[#65a07e]">Service</span>
            <span className="text-[#1B4D2E] font-medium">{service}</span>
          </div>

          {isSeries && seriesSessions.length > 0 ? (
            <div className="space-y-2 pt-1">
              {seriesSessions.map((s, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <span className="text-[#65a07e]">Session {i + 1}</span>
                  <span className="text-[#1B4D2E] font-medium text-right ml-4">
                    {formatDisplayDate(s.date)} at {s.time}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <>
              {addons && (
                <div className="flex justify-between">
                  <span className="text-[#65a07e]">Add-Ons</span>
                  <span className="text-[#1B4D2E] font-medium text-right ml-4">{addons}</span>
                </div>
              )}
              {date && (
                <div className="flex justify-between">
                  <span className="text-[#65a07e]">Date</span>
                  <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(date)}</span>
                </div>
              )}
              {time && (
                <div className="flex justify-between">
                  <span className="text-[#65a07e]">Time</span>
                  <span className="text-[#1B4D2E] font-medium">{time}</span>
                </div>
              )}
            </>
          )}

          {price && (
            <div className="flex justify-between pt-3 border-t border-[#f4efe3]">
              <span className="text-[#65a07e]">Investment</span>
              <div className="text-right">
                <span className="font-serif text-xl text-[#1B4D2E]">${price}</span>
                {isSeries && (
                  <p className="text-xs text-[#65a07e] mt-0.5">3-session package</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 pt-5 border-t border-[#f4efe3] text-sm text-[#42825e]">
          <p>📍 5303 Comercio Lane, Suite #2</p>
          <p>Woodland Hills, CA 91364</p>
          <p className="mt-1">📞 (818) 577-5421</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {!isSeries && date && time && (
          <a
            href={toGoogleCalendarUrl(
              `Brasilian Skin Soul — ${service}`,
              date,
              time,
              duration,
              '5303 Comercio Lane Suite #2, Woodland Hills, CA 91364'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f2f7f4] border border-[#c2daca] text-[#1B4D2E] font-medium px-6 py-3 rounded-full text-sm hover:bg-[#e0ede5] transition-colors"
          >
            Add to Google Calendar
          </a>
        )}
        <a
          href="/"
          className="bg-[#1B4D2E] text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-[#27533c] transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF8F2] pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <Suspense fallback={
            <div className="text-center py-20 text-[#65a07e]">Loading...</div>
          }>
            <ConfirmationContent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
