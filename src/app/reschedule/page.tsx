'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CheckCircle, ChevronLeft, Loader2, AlertCircle } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BookingDetails {
  booking_id: string;
  service_id: string;
  service_name: string;
  service_duration_min: number;
  session_number: number;
  total_sessions: number;
  booking_date: string;
  start_time: string;  // HH:MM (24h)
  client_name: string;
  client_email: string;
  reschedule_token: string;
}

type PageState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'loaded'; booking: BookingDetails }
  | { kind: 'picking-date'; booking: BookingDetails }
  | { kind: 'picking-time'; booking: BookingDetails; newDate: string }
  | { kind: 'confirming'; booking: BookingDetails; newDate: string; newTime: string }
  | { kind: 'success'; booking: BookingDetails; newDate: string; newTime: string };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDisplayDate(yyyy: string): string {
  const [y, m, d] = yyyy.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    timeZone: 'UTC',
  });
}

function format24toDisplay(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

// ─── Mini Calendar (self-contained, same style as booking page) ───────────────

function Calendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: string;
  onSelect: (d: string) => void;
}) {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const DAYS   = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const firstDow    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  function isDisabled(dayNum: number): boolean {
    const d = new Date(Date.UTC(viewYear, viewMonth, dayNum));
    const str = d.toISOString().slice(0, 10);
    const dow = d.getUTCDay();
    return str < todayStr || dow === 0 || dow === 1;
  }

  function isToday(dayNum: number): boolean {
    return `${viewYear}-${String(viewMonth+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}` === todayStr;
  }

  function isSelected(dayNum: number): boolean {
    return `${viewYear}-${String(viewMonth+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}` === selectedDate;
  }

  function handleClick(dayNum: number) {
    if (isDisabled(dayNum)) return;
    const str = `${viewYear}-${String(viewMonth+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    onSelect(str);
  }

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y-1); setViewMonth(11); }
    else setViewMonth(m => m-1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y+1); setViewMonth(0); }
    else setViewMonth(m => m+1);
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e0ede5] shadow-sm p-6 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#1B4D2E] hover:bg-[#f2f7f4] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="font-serif text-lg text-[#1B4D2E]">{MONTHS[viewMonth]} {viewYear}</span>
        <button
          onClick={nextMonth}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#1B4D2E] hover:bg-[#f2f7f4] transition-colors rotate-180"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-medium text-[#65a07e] py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const disabled = isDisabled(day);
          const isTodayDay = isToday(day);
          const selected = isSelected(day);
          return (
            <button
              key={i}
              onClick={() => handleClick(day)}
              disabled={disabled}
              className={[
                'w-9 h-9 mx-auto rounded-full text-sm transition-colors flex items-center justify-center',
                selected     ? 'bg-[#C9A96E] text-white font-semibold'
                : isTodayDay ? 'border-2 border-[#C9A96E] text-[#1B4D2E] font-semibold hover:bg-[#f4efe3]'
                : disabled   ? 'text-[#c2daca] cursor-not-allowed'
                             : 'text-[#1B4D2E] hover:bg-[#f2f7f4]',
              ].join(' ')}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Inner component (uses useSearchParams) ───────────────────────────────────

function RescheduleInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const [pageState, setPageState] = useState<PageState>({ kind: 'loading' });
  const [slots, setSlots]         = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  // Load booking on mount
  useEffect(() => {
    if (!token) {
      setPageState({ kind: 'error', message: 'No reschedule token provided.' });
      return;
    }
    fetch(`/api/reschedule?token=${encodeURIComponent(token)}`)
      .then(r => r.json())
      .then(json => {
        if (json.error) {
          setPageState({ kind: 'error', message: json.error });
        } else {
          setPageState({ kind: 'loaded', booking: json as BookingDetails });
        }
      })
      .catch(() => {
        setPageState({ kind: 'error', message: 'Failed to load booking details.' });
      });
  }, [token]);

  // Fetch availability when we enter picking-time state
  const fetchSlots = useCallback(async (serviceId: string, date: string) => {
    setSlotsLoading(true);
    setSlots([]);
    try {
      const res = await fetch(`/api/availability?date=${date}&service_id=${serviceId}&extra_duration=0`);
      const json = await res.json();
      setSlots(json.slots ?? []);
    } catch {
      setSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pageState.kind === 'picking-time') {
      fetchSlots(pageState.booking.service_id, pageState.newDate);
    }
  }, [pageState, fetchSlots]);

  async function handleConfirm() {
    if (pageState.kind !== 'confirming') return;
    setSubmitLoading(true);
    try {
      const res = await fetch(`/api/reschedule?token=${encodeURIComponent(token)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: pageState.newDate, time: pageState.newTime }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to reschedule');
      setPageState({
        kind:    'success',
        booking: pageState.booking,
        newDate: pageState.newDate,
        newTime: pageState.newTime,
      });
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  }

  // ── Loading ────────────────────────────────────────────────────────────────
  if (pageState.kind === 'loading') {
    return (
      <div className="flex flex-col items-center gap-4 py-32">
        <Loader2 size={36} className="animate-spin text-[#C9A96E]" />
        <p className="text-[#42825e] text-sm">Loading your booking…</p>
      </div>
    );
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (pageState.kind === 'error') {
    return (
      <div className="text-center py-20 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
            <AlertCircle size={32} className="text-red-400" />
          </div>
        </div>
        <h2 className="font-serif text-3xl text-[#1B4D2E] font-light mb-3">
          This link is invalid
        </h2>
        <p className="text-[#65a07e] text-sm mb-2">
          This reschedule link is invalid or has already been used.
        </p>
        <p className="text-[#65a07e] text-sm mb-8">
          Please contact us at{' '}
          <a href="tel:+18185775421" className="text-[#C9A96E] underline">(818) 577-5421</a>
          {' '}to reschedule.
        </p>
        <a
          href="/"
          className="bg-[#1B4D2E] text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-[#27533c] transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  // ── Success ────────────────────────────────────────────────────────────────
  if (pageState.kind === 'success') {
    const { booking, newDate, newTime } = pageState;
    const isSeries = booking.total_sessions > 1;
    return (
      <div className="text-center py-10 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#f2f7f4] flex items-center justify-center">
            <CheckCircle size={40} className="text-[#1B4D2E]" />
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-2">All Set!</p>
        <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-4">Rescheduled! ✨</h2>
        <p className="text-[#42825e] mb-8">Your session has been updated.</p>
        <div className="bg-white border-2 border-[#C9A96E] rounded-2xl p-8 text-left mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-4">Updated Appointment</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Service</span>
              <span className="text-[#1B4D2E] font-medium">{booking.service_name}</span>
            </div>
            {isSeries && (
              <div className="flex justify-between">
                <span className="text-[#65a07e]">Session</span>
                <span className="text-[#1B4D2E] font-medium">
                  {booking.session_number} of {booking.total_sessions}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#65a07e]">New Date</span>
              <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(newDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#65a07e]">New Time</span>
              <span className="text-[#1B4D2E] font-medium">{newTime}</span>
            </div>
          </div>
        </div>
        <p className="text-[#65a07e] text-sm mb-8">
          A confirmation email has been sent to <strong>{booking.client_email}</strong>.
        </p>
        <a
          href="/"
          className="bg-[#1B4D2E] text-white font-medium px-8 py-3 rounded-full text-sm hover:bg-[#27533c] transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  // ── Loaded: show current booking + CTA ────────────────────────────────────
  if (pageState.kind === 'loaded') {
    const { booking } = pageState;
    const isSeries = booking.total_sessions > 1;
    return (
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">Reschedule</p>
          <h1 className="font-serif text-4xl text-[#1B4D2E] font-light mb-2">
            Change Your Appointment
          </h1>
          <p className="text-[#42825e] text-sm">Hi {booking.client_name} — here&apos;s your current booking:</p>
        </div>

        <div className="bg-white border-2 border-[#e0ede5] rounded-2xl p-6 mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-4">Current Booking</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Service</span>
              <span className="text-[#1B4D2E] font-medium">{booking.service_name}</span>
            </div>
            {isSeries && (
              <div className="flex justify-between">
                <span className="text-[#65a07e]">Session</span>
                <span className="text-[#1B4D2E] font-medium">
                  {booking.session_number} of {booking.total_sessions}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Date</span>
              <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(booking.booking_date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Time</span>
              <span className="text-[#1B4D2E] font-medium">{format24toDisplay(booking.start_time)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setPageState({ kind: 'picking-date', booking })}
          className="w-full bg-[#C9A96E] text-[#1B4D2E] font-semibold py-4 rounded-xl hover:bg-[#D4B87A] transition-colors text-sm tracking-wide"
        >
          Select a New Date →
        </button>

        <p className="text-center text-xs text-[#65a07e] mt-4">
          Open Tuesday – Friday 9am–6pm · Saturday 9am–5pm
        </p>
      </div>
    );
  }

  // ── Picking date ───────────────────────────────────────────────────────────
  if (pageState.kind === 'picking-date') {
    const { booking } = pageState;
    const isSeries = booking.total_sessions > 1;
    return (
      <div>
        <button
          onClick={() => setPageState({ kind: 'loaded', booking })}
          className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
            {isSeries ? `Session ${booking.session_number} of ${booking.total_sessions}` : 'Reschedule'}
          </p>
          <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-2">Select a New Date</h2>
          <p className="text-[#42825e] text-sm">{booking.service_name}</p>
        </div>

        <div className="flex justify-center">
          <Calendar
            selectedDate=""
            onSelect={(d) => setPageState({ kind: 'picking-time', booking, newDate: d })}
          />
        </div>

        <p className="text-center text-xs text-[#65a07e] mt-4">
          Open Tuesday – Friday 9am–6pm · Saturday 9am–5pm
        </p>
      </div>
    );
  }

  // ── Picking time ───────────────────────────────────────────────────────────
  if (pageState.kind === 'picking-time') {
    const { booking, newDate } = pageState;
    const isSeries = booking.total_sessions > 1;
    return (
      <div>
        <button
          onClick={() => setPageState({ kind: 'picking-date', booking })}
          className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
            {isSeries ? `Session ${booking.session_number} of ${booking.total_sessions}` : 'Reschedule'}
          </p>
          <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-4">Select a New Time</h2>
          <div className="inline-flex items-center gap-2 bg-[#f2f7f4] border border-[#c2daca] rounded-full px-4 py-1.5 text-sm">
            <span className="text-[#65a07e] text-xs uppercase tracking-wider">Date</span>
            <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(newDate)}</span>
          </div>
        </div>

        {slotsLoading && (
          <div className="flex flex-col items-center gap-3 py-16">
            <Loader2 size={32} className="animate-spin text-[#C9A96E]" />
            <p className="text-[#42825e] text-sm">Checking availability…</p>
          </div>
        )}

        {!slotsLoading && slots.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#1B4D2E] font-serif text-2xl font-light mb-2">No availability</p>
            <p className="text-[#65a07e] text-sm">No open slots on this date. Please choose another day.</p>
            <button
              onClick={() => setPageState({ kind: 'picking-date', booking })}
              className="mt-6 text-[#C9A96E] border border-[#C9A96E] px-6 py-2 rounded-full text-sm hover:bg-[#C9A96E] hover:text-white transition-colors"
            >
              Pick a Different Date
            </button>
          </div>
        )}

        {!slotsLoading && slots.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {slots.map(slot => (
              <button
                key={slot}
                onClick={() => setPageState({ kind: 'confirming', booking, newDate, newTime: slot })}
                className="bg-white border-2 border-[#e0ede5] rounded-xl py-3 text-sm font-medium text-[#1B4D2E] hover:border-[#C9A96E] hover:bg-[#f4efe3] transition-all"
              >
                {slot}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── Confirming ─────────────────────────────────────────────────────────────
  if (pageState.kind === 'confirming') {
    const { booking, newDate, newTime } = pageState;
    const isSeries = booking.total_sessions > 1;
    return (
      <div className="max-w-md mx-auto">
        <button
          onClick={() => setPageState({ kind: 'picking-time', booking, newDate })}
          className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">Confirm Reschedule</p>
          <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-2">
            Does this look right?
          </h2>
        </div>

        <div className="bg-white border-2 border-[#C9A96E] rounded-2xl p-6 mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-4">New Appointment</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Service</span>
              <span className="text-[#1B4D2E] font-medium">{booking.service_name}</span>
            </div>
            {isSeries && (
              <div className="flex justify-between">
                <span className="text-[#65a07e]">Session</span>
                <span className="text-[#1B4D2E] font-medium">
                  {booking.session_number} of {booking.total_sessions}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Date</span>
              <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(newDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#65a07e]">Time</span>
              <span className="text-[#1B4D2E] font-medium">{newTime}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={submitLoading}
          className="w-full bg-[#1B4D2E] text-white font-semibold py-4 rounded-xl hover:bg-[#27533c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
        >
          {submitLoading
            ? <><Loader2 size={18} className="animate-spin" /> Rescheduling…</>
            : 'Confirm Reschedule →'
          }
        </button>
        <p className="text-center text-xs text-[#65a07e] mt-4">
          A confirmation email will be sent to {booking.client_email}
        </p>
      </div>
    );
  }

  return null;
}

// ─── Page wrapper (required for useSearchParams in Next.js App Router) ────────

export default function ReschedulePage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#FAF8F2] min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <Suspense fallback={
            <div className="flex flex-col items-center gap-4 py-32">
              <Loader2 size={36} className="animate-spin text-[#C9A96E]" />
              <p className="text-[#42825e] text-sm">Loading…</p>
            </div>
          }>
            <RescheduleInner />
          </Suspense>
        </div>
      </div>
    </>
  );
}
