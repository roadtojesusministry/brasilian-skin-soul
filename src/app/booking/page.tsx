'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { getServicesGrouped, formatDuration, Service } from '@/lib/services-data';
import { useLang } from '@/lib/language-context';
import { translations } from '@/lib/translations';

// ─── Add-Ons Data ────────────────────────────────────────────────────────────

const ADDONS = [
  { id: 'dermaplane', name: 'Dermaplane', price: 45, duration_min: 15, desc: 'Removes dead skin & peach fuzz for a silky canvas' },
  { id: 'glycolic-peel', name: 'Glycolic Peel', price: 35, duration_min: 10, desc: 'Resurfaces and brightens tone' },
  { id: 'led', name: 'LED Light Therapy', price: 40, duration_min: 15, desc: 'Healing, collagen boost, or acne control' },
  { id: 'co2', name: 'CO2 Lift', price: 45, duration_min: 10, desc: 'Instant firming and brightening mask' },
  { id: 'eye-lift', name: 'Eye Lift — Stem Cell', price: 50, duration_min: 15, desc: 'Lifts and firms the delicate eye area' },
  { id: 'oxygen', name: 'Oxygen Therapy O2', price: 40, duration_min: 10, desc: 'Deep hydration boost with pure oxygen' },
  { id: 'microderm', name: 'Microdermabrasion', price: 55, duration_min: 15, desc: 'Physical resurfacing for smooth even skin' },
  { id: 'microcurrent-addon', name: 'Microcurrent Lifting', price: 55, duration_min: 20, desc: 'Electrical muscle stimulation for lift' },
  { id: 'therma-addon', name: 'Therma-Lift', price: 60, duration_min: 20, desc: 'Heat sculpting to tighten and contour' },
  { id: 'extractions', name: 'Deep Extractions', price: 30, duration_min: 15, desc: 'Professional deep pore cleansing' },
  { id: 'decollete', name: 'Divine Décolleté', price: 45, duration_min: 20, desc: 'Targeted neck and chest treatment' },
  { id: 'glow-mask', name: 'Glow Mask', price: 25, duration_min: 10, desc: 'Brightening and hydrating masque' },
];

// ─── Types ──────────────────────────────────────────────────────────────────

interface SeriesSession {
  date: string;  // YYYY-MM-DD
  time: string;  // display "H:MM AM/PM"
}

interface BookingState {
  step: 1 | 2 | 3 | 4 | 5 | 6;
  selectedService: Service | null;
  selectedAddons: string[];
  addonTotal: number;
  addonDuration: number;
  selectedDate: string;    // YYYY-MM-DD
  selectedTime: string;    // display "H:MM AM/PM"
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  bookingId: string;
  agreedToPolicy: boolean;
  // Series-specific
  seriesSessions: SeriesSession[];
  currentSessionIndex: number;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatDisplayDate(yyyy: string): string {
  const [y, m, d] = yyyy.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    timeZone: 'UTC',
  });
}

function formatTotalDuration(totalMin: number): string {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

function toGoogleCalendarUrl(
  title: string,
  dateStr: string,
  startTime: string,
  durationMin: number,
  location: string
): string {
  const match = startTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return '#';
  let h = parseInt(match[1], 10);
  const min = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === 'AM' && h === 12) h = 0;
  if (period === 'PM' && h !== 12) h += 12;

  const [y, mo, d] = dateStr.split('-').map(Number);
  const start = new Date(Date.UTC(y, mo - 1, d, h, min));
  const end = new Date(start.getTime() + durationMin * 60 * 1000);

  const fmt = (dt: Date) =>
    dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  return (
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${fmt(start)}/${fmt(end)}` +
    `&location=${encodeURIComponent(location)}`
  );
}

// ─── Mini Calendar ───────────────────────────────────────────────────────────

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
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-based

  const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const MONTHS = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ];

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
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
    return str < todayStr || dow === 0 || dow === 1; // past, Sun, Mon
  }

  function isToday(dayNum: number): boolean {
    const str = `${viewYear}-${String(viewMonth + 1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    return str === todayStr;
  }

  function isSelected(dayNum: number): boolean {
    const str = `${viewYear}-${String(viewMonth + 1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    return str === selectedDate;
  }

  function handleClick(dayNum: number) {
    if (isDisabled(dayNum)) return;
    const str = `${viewYear}-${String(viewMonth + 1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    onSelect(str);
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  }

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  return (
    <div className="bg-white rounded-2xl border border-[#e0ede5] shadow-sm p-6 max-w-sm mx-auto">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#1B4D2E] hover:bg-[#f2f7f4] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="font-serif text-lg text-[#1B4D2E]">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          onClick={nextMonth}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#1B4D2E] hover:bg-[#f2f7f4] transition-colors rotate-180"
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-medium text-[#65a07e] py-1">{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const disabled = isDisabled(day);
          const today_   = isToday(day);
          const selected = isSelected(day);
          return (
            <button
              key={i}
              onClick={() => handleClick(day)}
              disabled={disabled}
              className={[
                'w-9 h-9 mx-auto rounded-full text-sm transition-colors flex items-center justify-center',
                selected
                  ? 'bg-[#C9A96E] text-white font-semibold'
                  : today_
                  ? 'border-2 border-[#C9A96E] text-[#1B4D2E] font-semibold hover:bg-[#f4efe3]'
                  : disabled
                  ? 'text-[#c2daca] cursor-not-allowed'
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

const SKIP_ADDON_CATEGORIES = ['Transformation Series', 'Body & Massage', 'Waxing'];

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepIndicator({ step, selectedService, stepLabels }: { step: number; selectedService?: Service | null; stepLabels: string[] }) {
  const skipAddons = SKIP_ADDON_CATEGORIES.includes(selectedService?.category ?? '');
  // When skipping add-ons, hide step 2 — show steps 1, 3, 4, 5 as 1, 2, 3, 4
  const allSteps = stepLabels;
  const visibleSteps = skipAddons
    ? allSteps.filter((_, i) => i !== 1)
    : allSteps;

  // Map actual step number → display position
  function toDisplayStep(actual: number): number {
    if (!skipAddons) return actual;
    if (actual <= 1) return actual;
    return actual - 1;
  }

  const displayStep = toDisplayStep(step);

  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {visibleSteps.map((label, i) => {
        const num = i + 1;
        const active = displayStep === num;
        const done = displayStep > num;
        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={[
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
                  done
                    ? 'bg-[#1B4D2E] text-white'
                    : active
                    ? 'bg-[#C9A96E] text-white'
                    : 'bg-[#e0ede5] text-[#65a07e]',
                ].join(' ')}
              >
                {done ? '✓' : num}
              </div>
              <span className={`text-xs hidden sm:block ${active ? 'text-[#1B4D2E] font-medium' : 'text-[#65a07e]'}`}>
                {label}
              </span>
            </div>
            {i < visibleSteps.length - 1 && (
              <div className={`w-6 sm:w-10 h-px mb-5 ${done ? 'bg-[#1B4D2E]' : 'bg-[#e0ede5]'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Summary Pills ───────────────────────────────────────────────────────────

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#f2f7f4] border border-[#c2daca] rounded-full px-4 py-1.5 text-sm">
      <span className="text-[#65a07e] text-xs uppercase tracking-wider">{label}</span>
      <span className="text-[#1B4D2E] font-medium">{value}</span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BookingPage() {
  const { lang } = useLang();
  const T = translations[lang].booking;
  const router = useRouter();

  const stepLabels = [T.stepService, T.stepAddOns, T.stepDate, T.stepTime, T.stepDetails];

  const [state, setState] = useState<BookingState>({
    step: 1,
    selectedService: null,
    selectedAddons: [],
    addonTotal: 0,
    addonDuration: 0,
    selectedDate: '',
    selectedTime: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
    bookingId: '',
    agreedToPolicy: false,
    seriesSessions: [],
    currentSessionIndex: 0,
  });

  const [slots, setSlots]       = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError]     = useState('');

  const topRef = useRef<HTMLDivElement>(null);

  // Scroll to top of booking section on every step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [state.step]);

  const set = (patch: Partial<BookingState>) =>
    setState(prev => ({ ...prev, ...patch }));

  // Derived: is this a Transformation Series booking?
  const isSeries = state.selectedService?.category === 'Transformation Series';

  // Fetch slots when we reach step 4 (time selection)
  const fetchSlots = useCallback(async () => {
    if (!state.selectedDate || !state.selectedService) return;
    setSlotsLoading(true);
    setSlots([]);
    try {
      const res = await fetch(
        `/api/availability?date=${state.selectedDate}&service_id=${state.selectedService.id}&extra_duration=${state.addonDuration}`
      );
      const json = await res.json();
      setSlots(json.slots ?? []);
    } catch {
      setSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  }, [state.selectedDate, state.selectedService, state.addonDuration]);

  useEffect(() => {
    if (state.step === 4) fetchSlots();
  }, [state.step, fetchSlots]);

  // Toggle an add-on and recalculate totals
  function toggleAddon(id: string) {
    const addon = ADDONS.find(a => a.id === id);
    if (!addon) return;
    const isSelected = state.selectedAddons.includes(id);
    const newAddons = isSelected
      ? state.selectedAddons.filter(a => a !== id)
      : [...state.selectedAddons, id];
    const newTotal = newAddons.reduce((sum, addonId) => {
      const a = ADDONS.find(x => x.id === addonId);
      return sum + (a ? a.price : 0);
    }, 0);
    const newDuration = newAddons.reduce((sum, addonId) => {
      const a = ADDONS.find(x => x.id === addonId);
      return sum + (a ? a.duration_min : 0);
    }, 0);
    set({ selectedAddons: newAddons, addonTotal: newTotal, addonDuration: newDuration });
  }

  // Handle time slot selection — different logic for series vs single
  function handleTimeSelect(slot: string) {
    if (isSeries) {
      const newSessions = [...state.seriesSessions];
      newSessions[state.currentSessionIndex] = { date: state.selectedDate, time: slot };

      if (state.currentSessionIndex < 2) {
        // Move to next session's date picker
        set({
          seriesSessions: newSessions,
          currentSessionIndex: state.currentSessionIndex + 1,
          selectedDate: '',
          selectedTime: '',
          step: 3,
        });
      } else {
        // All 3 sessions scheduled — move to client info
        set({
          seriesSessions: newSessions,
          selectedTime: slot,
          step: 5,
        });
      }
    } else {
      set({ selectedTime: slot, step: 5 });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError('');
    setSubmitLoading(true);
    try {
      let payload: Record<string, unknown>;

      if (isSeries) {
        payload = {
          service_id:   state.selectedService!.id,
          client_name:  state.clientName,
          client_email: state.clientEmail,
          client_phone: state.clientPhone,
          is_series:    true,
          sessions:     state.seriesSessions,
          notes:        state.notes || undefined,
        };
      } else {
        const selectedAddonNames = state.selectedAddons.map(id => {
          const a = ADDONS.find(x => x.id === id);
          return a ? a.name : id;
        });
        payload = {
          service_id:     state.selectedService!.id,
          client_name:    state.clientName,
          client_email:   state.clientEmail,
          client_phone:   state.clientPhone,
          booking_date:   state.selectedDate,
          start_time:     state.selectedTime,
          addons:         state.selectedAddons,
          addon_names:    selectedAddonNames,
          addon_duration: state.addonDuration,
          notes:          state.notes || undefined,
        };
      }

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Booking failed');

      // Redirect to confirmation page (Google Ads conversion tracking)
      const params = new URLSearchParams({
        service: state.selectedService!.name,
        email: state.clientEmail,
        price: String(isSeries
          ? state.selectedService!.price
          : state.selectedService!.price + state.addonTotal),
        duration: String(state.selectedService!.duration_min + state.addonDuration),
        series: isSeries ? '1' : '0',
      });
      if (!isSeries) {
        params.set('date', state.selectedDate);
        params.set('time', state.selectedTime);
        const addonNames = state.selectedAddons.map(id => ADDONS.find(x => x.id === id)?.name).filter(Boolean) as string[];
        if (addonNames.length > 0) {
          params.set('addons', addonNames.join(', '));
        }
      } else {
        params.set('sessions', encodeURIComponent(JSON.stringify(state.seriesSessions)));
      }
      router.push(`/booking/confirmation?${params.toString()}`);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  }

  const grouped = getServicesGrouped();

  return (
    <>
      <Navbar />
      <div ref={topRef} className="pt-32 pb-20 bg-[#FAF8F2] min-h-screen">
        <div className="max-w-3xl mx-auto px-6">

          {/* ── Step 1: Select Service ─────────────────────────────────── */}
          {state.step === 1 && (
            <div>
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">{T.onlineBookingTag}</p>
                <h1 className="font-serif text-5xl md:text-6xl text-[#1B4D2E] font-light mb-3">
                  {T.bookTitle}
                </h1>
                <p className="text-[#42825e]">{T.bookSubtitle}</p>
              </div>

              <StepIndicator step={1} selectedService={state.selectedService} stepLabels={stepLabels} />

              {Object.entries(grouped).map(([category, services]) => {
                const isWaxing = category === 'Waxing';
                return (
                  <div key={category} className="mb-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-4">{category}</p>
                    {isWaxing ? (
                      /* Compact grid for Waxing — 2 col mobile, 4 col desktop */
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {services.map(svc => {
                          const selected = state.selectedService?.id === svc.id;
                          return (
                            <button
                              key={svc.id}
                              onClick={() => set({ selectedService: svc })}
                              className={[
                                'w-full text-left rounded-xl p-3 border-2 transition-all',
                                selected
                                  ? 'border-[#C9A96E] bg-[#1B4D2E] text-white'
                                  : 'border-[#e0ede5] bg-white hover:border-[#C9A96E] hover:shadow-sm',
                              ].join(' ')}
                            >
                              <p className={`font-medium text-sm leading-snug mb-1 ${selected ? 'text-white' : 'text-[#1B4D2E]'}`}>
                                {svc.name}
                              </p>
                              <div className="flex items-center justify-between gap-1">
                                <span className={`text-xs ${selected ? 'text-white/70' : 'text-[#65a07e]'}`}>
                                  {formatDuration(svc.duration_min)}
                                </span>
                                <span className={`font-semibold text-sm ${selected ? 'text-[#C9A96E]' : 'text-[#1B4D2E]'}`}>
                                  ${svc.price}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      /* Standard full cards for other categories */
                      <div className="grid gap-3">
                        {services.map(svc => {
                          const selected = state.selectedService?.id === svc.id;
                          return (
                            <button
                              key={svc.id}
                              onClick={() => set({ selectedService: svc })}
                              className={[
                                'w-full text-left rounded-2xl p-5 border-2 transition-all',
                                selected
                                  ? 'border-[#C9A96E] bg-[#1B4D2E] text-white'
                                  : 'border-[#e0ede5] bg-white hover:border-[#C9A96E] hover:shadow-md',
                              ].join(' ')}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                  <p className={`font-serif text-xl font-light mb-1 ${selected ? 'text-white' : 'text-[#1B4D2E]'}`}>
                                    {svc.name}
                                  </p>
                                  <p className={`text-sm ${selected ? 'text-[#C9A96E]' : 'text-[#65a07e]'}`}>
                                    {svc.description}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className={`font-serif text-2xl font-light ${selected ? 'text-[#C9A96E]' : 'text-[#1B4D2E]'}`}>
                                    ${svc.price}
                                  </p>
                                  <p className={`text-xs mt-0.5 ${selected ? 'text-white/70' : 'text-[#65a07e]'}`}>
                                    {formatDuration(svc.duration_min)}
                                  </p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {state.selectedService && (
                <div className="sticky bottom-6 flex justify-center">
                  <button
                    onClick={() => {
                      const skipAddons = SKIP_ADDON_CATEGORIES.includes(state.selectedService!.category);
                      setState(prev => ({ ...prev, step: skipAddons ? 3 : 2 }));
                    }}
                    className="bg-[#C9A96E] text-[#1B4D2E] font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#D4B87A] transition-colors"
                  >
                    {T.continueBtn}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Step 2: Select Add-Ons ─────────────────────────────────── */}
          {state.step === 2 && (
            <div>
              <button
                onClick={() => set({ step: 1 })}
                className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
              >
                <ChevronLeft size={16} /> {T.backBtn}
              </button>

              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">{T.step2Tag}</p>
                <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-2">{T.step2Title}</h2>
                <p className="text-sm text-[#65a07e]">
                  {T.step2Optional(state.selectedService!.name)}
                </p>
              </div>

              <StepIndicator step={2} selectedService={state.selectedService} stepLabels={stepLabels} />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {ADDONS.filter(addon => state.selectedService?.addons?.includes(addon.name)).map(addon => {
                  const selected = state.selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={[
                        'text-left rounded-2xl p-4 border-2 transition-all',
                        selected
                          ? 'border-[#C9A96E] bg-[#fdf6e9]'
                          : 'border-[#e0ede5] bg-white hover:border-[#C9A96E] hover:shadow-sm',
                      ].join(' ')}
                    >
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <p className="font-medium text-sm leading-tight text-[#1B4D2E]">{addon.name}</p>
                        <span className="text-[#C9A96E] font-semibold text-xs flex-shrink-0">+${addon.price}</span>
                      </div>
                      <p className="text-xs text-[#65a07e] leading-relaxed">{addon.desc}</p>
                    </button>
                  );
                })}
              </div>

              <div className="bg-white border border-[#e0ede5] rounded-2xl p-5 mb-6 text-center">
                <p className="text-sm text-[#65a07e] mb-1">
                  {T.treatmentTotal}{' '}
                  <span className="font-serif text-xl text-[#1B4D2E] font-light">
                    ${state.selectedService!.price + state.addonTotal}
                  </span>
                </p>
                <p className="text-xs text-[#96c0a6]">
                  {T.estDuration}{' '}
                  {formatTotalDuration(state.selectedService!.duration_min + state.addonDuration)}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => set({ step: 3 })}
                  className="border border-[#c2daca] text-[#42825e] font-medium px-8 py-3 rounded-full hover:bg-[#f2f7f4] transition-colors text-sm"
                >
                  {T.skipAddOns}
                </button>
                {state.selectedAddons.length > 0 && (
                  <button
                    onClick={() => set({ step: 3 })}
                    className="bg-[#C9A96E] text-[#1B4D2E] font-semibold px-8 py-3 rounded-full hover:bg-[#D4B87A] transition-colors text-sm shadow-md"
                  >
                    {T.continueWithAddOns}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── Step 3: Select Date ────────────────────────────────────── */}
          {state.step === 3 && (
            <div>
              <button
                onClick={() => {
                  if (isSeries && state.currentSessionIndex > 0) {
                    // Go back to previous session's time picker
                    const prevIdx = state.currentSessionIndex - 1;
                    const prevSession = state.seriesSessions[prevIdx];
                    set({
                      currentSessionIndex: prevIdx,
                      selectedDate: prevSession?.date ?? '',
                      selectedTime: '',
                      step: 4,
                    });
                  } else {
                    const backTo = SKIP_ADDON_CATEGORIES.includes(state.selectedService?.category ?? '') ? 1 : 2;
                    setState(prev => ({ ...prev, step: backTo as BookingState['step'], selectedDate: '', selectedTime: '' }));
                  }
                }}
                className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
              >
                <ChevronLeft size={16} /> {T.backBtn}
              </button>

              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
                  {isSeries ? T.seriesTag(state.currentSessionIndex + 1) : T.step3Tag}
                </p>
                <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-4">
                  {isSeries ? T.step3SeriesTitle(state.currentSessionIndex + 1) : T.step3Title}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <Pill label={T.labelService} value={state.selectedService!.name} />
                  {isSeries && state.currentSessionIndex > 0 && (
                    <Pill
                      label={T.labelSession(state.currentSessionIndex)}
                      value={`${formatDisplayDate(state.seriesSessions[state.currentSessionIndex - 1]?.date ?? '')} · ${state.seriesSessions[state.currentSessionIndex - 1]?.time ?? ''}`}
                    />
                  )}
                </div>
              </div>

              <StepIndicator step={3} selectedService={state.selectedService} stepLabels={stepLabels} />

              {/* Series progress dots */}
              {isSeries && (
                <div className="flex justify-center gap-2 mb-6">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className={[
                        'rounded-full transition-all',
                        i < state.currentSessionIndex
                          ? 'w-3 h-3 bg-[#1B4D2E]'
                          : i === state.currentSessionIndex
                          ? 'w-3 h-3 bg-[#C9A96E]'
                          : 'w-3 h-3 bg-[#e0ede5]',
                      ].join(' ')}
                    />
                  ))}
                </div>
              )}

              {/* Hours + reassurance — shown ABOVE calendar so users read before picking */}
              <p className="text-center text-xs text-[#65a07e] mb-4">
                {T.openHours}
              </p>
              {isSeries && (
                <div className="mb-6 bg-[#f2f7f4] border border-[#c2daca] rounded-xl px-5 py-4 max-w-sm mx-auto text-center">
                  <p className="text-xs text-[#C9A96E] font-medium mb-1">{T.noPressure}</p>
                  <p className="text-xs text-[#42825e] leading-relaxed">{T.noPressureDesc}</p>
                  <p className="text-xs text-[#65a07e] mt-2">{T.spacingRecommendation}</p>
                </div>
              )}

              <div className="flex justify-center">
                <Calendar
                  selectedDate={state.selectedDate}
                  onSelect={(d) => set({ selectedDate: d, selectedTime: '', step: 4 })}
                />
              </div>
            </div>
          )}

          {/* ── Step 4: Select Time ────────────────────────────────────── */}
          {state.step === 4 && (
            <div>
              <button
                onClick={() => set({ step: 3, selectedTime: '' })}
                className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
              >
                <ChevronLeft size={16} /> {T.backBtn}
              </button>

              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
                  {isSeries ? T.seriesTag(state.currentSessionIndex + 1) : T.step4Tag}
                </p>
                <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-4">
                  {isSeries ? T.step4SeriesTitle(state.currentSessionIndex + 1) : T.step4Title}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <Pill label={T.labelService} value={state.selectedService!.name} />
                  <Pill label={isSeries ? T.labelSession(state.currentSessionIndex + 1) : T.labelDate} value={formatDisplayDate(state.selectedDate)} />
                </div>
              </div>

              <StepIndicator step={4} selectedService={state.selectedService} stepLabels={stepLabels} />

              {/* Series progress dots */}
              {isSeries && (
                <div className="flex justify-center gap-2 mb-6">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className={[
                        'rounded-full transition-all',
                        i < state.currentSessionIndex
                          ? 'w-3 h-3 bg-[#1B4D2E]'
                          : i === state.currentSessionIndex
                          ? 'w-3 h-3 bg-[#C9A96E]'
                          : 'w-3 h-3 bg-[#e0ede5]',
                      ].join(' ')}
                    />
                  ))}
                </div>
              )}

              {slotsLoading && (
                <div className="flex flex-col items-center gap-3 py-16">
                  <Loader2 size={32} className="animate-spin text-[#C9A96E]" />
                  <p className="text-[#42825e] text-sm">{T.checkingAvailability}</p>
                </div>
              )}

              {!slotsLoading && slots.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[#1B4D2E] font-serif text-2xl font-light mb-2">{T.noAvailabilityTitle}</p>
                  <p className="text-[#65a07e] text-sm">{T.noAvailabilityDesc}</p>
                  <button
                    onClick={() => set({ step: 3 })}
                    className="mt-6 text-[#C9A96E] border border-[#C9A96E] px-6 py-2 rounded-full text-sm hover:bg-[#C9A96E] hover:text-white transition-colors"
                  >
                    {T.pickDifferentDate}
                  </button>
                </div>
              )}

              {!slotsLoading && slots.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {slots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => handleTimeSelect(slot)}
                      className="bg-white border-2 border-[#e0ede5] rounded-xl py-3 text-sm font-medium text-[#1B4D2E] hover:border-[#C9A96E] hover:bg-[#f4efe3] transition-all"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Step 5: Client Info ────────────────────────────────────── */}
          {state.step === 5 && (
            <div>
              <button
                onClick={() => {
                  if (isSeries) {
                    // Go back to last session's time picker
                    set({
                      step: 4,
                      currentSessionIndex: 2,
                      selectedDate: state.seriesSessions[2]?.date ?? '',
                      selectedTime: '',
                    });
                  } else {
                    set({ step: 4 });
                  }
                }}
                className="flex items-center gap-1 text-[#42825e] hover:text-[#1B4D2E] text-sm mb-8 transition-colors"
              >
                <ChevronLeft size={16} /> {T.backBtn}
              </button>

              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] mb-3">{T.step5Tag}</p>
                <h2 className="font-serif text-4xl text-[#1B4D2E] font-light mb-4">{T.step5Title}</h2>
              </div>

              <StepIndicator step={5} selectedService={state.selectedService} stepLabels={stepLabels} />

              {/* Booking summary card */}
              <div className="bg-white border-2 border-[#C9A96E] rounded-2xl p-6 mb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-4">{T.bookingSummary}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#65a07e]">{T.labelService}</span>
                    <span className="text-[#1B4D2E] font-medium">{state.selectedService!.name}</span>
                  </div>

                  {/* Series sessions list */}
                  {isSeries ? (
                    <div className="space-y-2 pt-1">
                      {state.seriesSessions.map((s, i) => (
                        <div key={i} className="flex justify-between items-baseline">
                          <span className="text-[#65a07e]">{T.labelSession(i + 1)}</span>
                          <span className="text-[#1B4D2E] font-medium text-right ml-4">
                            {formatDisplayDate(s.date)} at {s.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {state.selectedAddons.length > 0 && (
                        <div className="flex justify-between items-start">
                          <span className="text-[#65a07e]">{T.labelAddOns}</span>
                          <div className="text-right">
                            {state.selectedAddons.map(id => {
                              const a = ADDONS.find(x => x.id === id);
                              return a ? (
                                <p key={id} className="text-[#1B4D2E] font-medium">{a.name} <span className="text-[#C9A96E]">+${a.price}</span></p>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-[#65a07e]">{T.labelDate}</span>
                        <span className="text-[#1B4D2E] font-medium">{formatDisplayDate(state.selectedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#65a07e]">{T.labelTime}</span>
                        <span className="text-[#1B4D2E] font-medium">{state.selectedTime}</span>
                      </div>
                    </>
                  )}

                  <div className="flex justify-between pt-3 border-t border-[#f4efe3]">
                    <span className="text-[#65a07e]">{T.labelInvestment}</span>
                    <div className="text-right">
                      <span className="font-serif text-xl text-[#1B4D2E]">
                        {isSeries
                          ? `$${state.selectedService!.price}`
                          : `$${state.selectedService!.price + state.addonTotal}`}
                      </span>
                      {isSeries && <p className="text-xs text-[#65a07e] mt-0.5">{T.threeSessionPackage}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">
                    {T.labelFullName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={state.clientName}
                    onChange={e => set({ clientName: e.target.value })}
                    placeholder={T.placeholderName}
                    className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-3 text-[#1B4D2E] placeholder-[#96c0a6] focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">
                    {T.labelEmail} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={state.clientEmail}
                    onChange={e => set({ clientEmail: e.target.value })}
                    placeholder={T.placeholderEmail}
                    className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-3 text-[#1B4D2E] placeholder-[#96c0a6] focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">
                    {T.labelPhone} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={state.clientPhone}
                    onChange={e => set({ clientPhone: e.target.value })}
                    placeholder={T.placeholderPhone}
                    className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-3 text-[#1B4D2E] placeholder-[#96c0a6] focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">
                    {T.labelNotes}
                  </label>
                  <textarea
                    value={state.notes}
                    onChange={e => set({ notes: e.target.value })}
                    rows={3}
                    placeholder={T.placeholderNotes}
                    className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-3 text-[#1B4D2E] placeholder-[#96c0a6] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  />
                </div>

                {/* Policy agreement checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={state.agreedToPolicy}
                    onChange={e => set({ agreedToPolicy: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-[#c2daca] accent-[#1B4D2E] flex-shrink-0 cursor-pointer"
                  />
                  <span className="text-sm text-[#42825e] leading-snug group-hover:text-[#1B4D2E] transition-colors">
                    {T.policyAgreement}
                  </span>
                </label>

                {submitError && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitLoading || !state.agreedToPolicy}
                  className="w-full bg-[#1B4D2E] text-white font-semibold py-4 rounded-xl hover:bg-[#27533c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
                >
                  {submitLoading ? (
                    <><Loader2 size={18} className="animate-spin" /> {T.confirming}</>
                  ) : (
                    isSeries ? T.confirmAllSessions : T.confirmBook
                  )}
                </button>

                <p className="text-center text-xs text-[#65a07e]">
                  {T.paymentNote}
                </p>
              </form>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
