'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Trash2, Plus, X, Search } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Booking {
  id: string;
  service_name: string;
  service_duration_min: number;
  service_price: number;
  client_name: string;
  client_email: string;
  client_phone: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  status: string;
  payment_status: string;
  notes?: string;
  created_at: string;
}

interface AvailabilityRow {
  id: string;
  day_of_week: number;
  start_time: string | null;
  end_time: string | null;
  is_open: boolean;
}

interface BlockedTime {
  id: string;
  date: string;
  start_time: string | null;
  end_time: string | null;
  all_day: boolean;
  reason: string | null;
  created_at: string;
}

interface Client {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  birthday: string;
  skin_concern: string;
  allergies: string;
  notes: string;
  tags: string[];
  created_at: string;
}

type ClientFormData = Omit<Client, 'id' | 'created_at'>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

function formatTime24(t: string) {
  const [h, m] = t.split(':').map(Number);
  const p = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${p}`;
}

function statusColor(s: string) {
  if (s === 'confirmed') return 'bg-green-100 text-green-700';
  if (s === 'completed') return 'bg-gray-100 text-gray-600';
  if (s === 'cancelled') return 'bg-red-100 text-red-600';
  return 'bg-[#f2f7f4] text-[#42825e]';
}

const ALL_TAGS = ['Brazilian', 'Medical Flag', 'Allergy', 'Sensitive', 'Acne', 'Teen', 'Spanish Speaking', 'Rosacea'];

const EMPTY_FORM: ClientFormData = {
  name: '',
  address: '',
  city: '',
  phone: '',
  email: '',
  birthday: '',
  skin_concern: '',
  allergies: '',
  notes: '',
  tags: [],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function BookingsTab() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading]   = useState(true);
  const [filter, setFilter]     = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const url = filter === 'upcoming'
      ? '/api/admin/bookings?upcoming=true'
      : '/api/admin/bookings';
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      setBookings(json.bookings ?? []);
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => { load(); }, [load]);

  const displayed = filter === 'all' || filter === 'upcoming'
    ? bookings
    : bookings.filter(b => b.status === filter);

  async function updateStatus(id: string, status: string) {
    setActionLoading(id + status);
    await fetch(`/api/admin/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    await load();
    setActionLoading(null);
  }

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(['upcoming', 'all', 'completed', 'cancelled'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              'px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors',
              filter === f
                ? 'bg-[#1B4D2E] text-white'
                : 'bg-white border border-[#e0ede5] text-[#42825e] hover:border-[#C9A96E]',
            ].join(' ')}
          >
            {f}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <Loader2 size={28} className="animate-spin text-[#C9A96E]" />
        </div>
      )}

      {!loading && displayed.length === 0 && (
        <div className="text-center py-16">
          <p className="font-serif text-2xl text-[#1B4D2E] font-light mb-2">No bookings found</p>
          <p className="text-[#65a07e] text-sm">Nothing here yet for this filter.</p>
        </div>
      )}

      {!loading && displayed.length > 0 && (
        <div className="space-y-3">
          {displayed.map(b => (
            <div key={b.id} className="bg-white rounded-2xl border border-[#e0ede5] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                {/* Left: booking info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor(b.status)}`}>
                      {b.status}
                    </span>
                    <span className="text-xs text-[#65a07e]">#{b.id.slice(0, 8)}</span>
                  </div>
                  <p className="font-serif text-lg text-[#1B4D2E] font-light mb-1">{b.service_name}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-[#42825e]">
                    <span>📅 {formatDate(b.booking_date)}</span>
                    <span>🕐 {formatTime24(b.start_time)}</span>
                    <span>⏱ {b.service_duration_min} min</span>
                    <span>💰 ${b.service_price}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-[#65a07e] mt-1">
                    <span>👤 {b.client_name}</span>
                    <span>✉️ {b.client_email}</span>
                    <span>📞 {b.client_phone}</span>
                  </div>
                  {b.notes && (
                    <p className="text-xs text-[#96c0a6] mt-1 italic">{b.notes}</p>
                  )}
                </div>
                {/* Right: actions */}
                {b.status !== 'cancelled' && b.status !== 'completed' && (
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateStatus(b.id, 'completed')}
                      disabled={actionLoading === b.id + 'completed'}
                      className="text-xs bg-[#f2f7f4] border border-[#c2daca] text-[#1B4D2E] px-3 py-1.5 rounded-full hover:bg-[#c2daca] transition-colors disabled:opacity-50"
                    >
                      {actionLoading === b.id + 'completed' ? '…' : 'Mark Complete'}
                    </button>
                    <button
                      onClick={() => updateStatus(b.id, 'cancelled')}
                      disabled={actionLoading === b.id + 'cancelled'}
                      className="text-xs bg-red-50 border border-red-200 text-red-600 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors disabled:opacity-50"
                    >
                      {actionLoading === b.id + 'cancelled' ? '…' : 'Cancel'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AvailabilityTab() {
  const defaultRows: AvailabilityRow[] = DAY_NAMES.map((_, i) => ({
    id: '',
    day_of_week: i,
    start_time: i >= 2 && i <= 5 ? '09:00' : i === 6 ? '09:00' : null,
    end_time:   i >= 2 && i <= 5 ? '18:00' : i === 6 ? '17:00' : null,
    is_open:    i >= 2 && i <= 6,
  }));

  const [rows, setRows]       = useState<AvailabilityRow[]>(defaultRows);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState<number | null>(null);
  const [saved, setSaved]     = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/availability')
      .then(r => r.json())
      .then(json => {
        if (json.availability) {
          // Merge with defaults
          const updated = defaultRows.map(def => {
            const match = json.availability.find((a: AvailabilityRow) => a.day_of_week === def.day_of_week);
            return match ?? def;
          });
          setRows(updated);
        }
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateRow(dow: number, patch: Partial<AvailabilityRow>) {
    setRows(prev => prev.map(r => r.day_of_week === dow ? { ...r, ...patch } : r));
  }

  async function saveRow(row: AvailabilityRow) {
    setSaving(row.day_of_week);
    await fetch('/api/admin/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        day_of_week: row.day_of_week,
        start_time:  row.is_open ? row.start_time : null,
        end_time:    row.is_open ? row.end_time   : null,
        is_open:     row.is_open,
      }),
    });
    setSaving(null);
    setSaved(row.day_of_week);
    setTimeout(() => setSaved(null), 2000);
  }

  if (loading) return <div className="flex justify-center py-12"><Loader2 size={28} className="animate-spin text-[#C9A96E]" /></div>;

  return (
    <div className="space-y-3">
      {rows.map(row => (
        <div key={row.day_of_week} className="bg-white rounded-2xl border border-[#e0ede5] p-5">
          <div className="flex flex-wrap items-center gap-4">
            {/* Day name */}
            <span className="font-medium text-[#1B4D2E] w-28 flex-shrink-0">{DAY_NAMES[row.day_of_week]}</span>

            {/* Open/Closed toggle */}
            <label className="flex items-center gap-2 cursor-pointer flex-shrink-0">
              <div
                onClick={() => updateRow(row.day_of_week, { is_open: !row.is_open })}
                className={[
                  'w-11 h-6 rounded-full relative transition-colors cursor-pointer',
                  row.is_open ? 'bg-[#1B4D2E]' : 'bg-[#c2daca]',
                ].join(' ')}
              >
                <div className={[
                  'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform',
                  row.is_open ? 'translate-x-5' : 'translate-x-0.5',
                ].join(' ')} />
              </div>
              <span className={`text-sm ${row.is_open ? 'text-[#1B4D2E]' : 'text-[#96c0a6]'}`}>
                {row.is_open ? 'Open' : 'Closed'}
              </span>
            </label>

            {/* Time inputs */}
            <div className="flex items-center gap-2 flex-wrap">
              <input
                type="time"
                value={row.start_time ?? ''}
                disabled={!row.is_open}
                onChange={e => updateRow(row.day_of_week, { start_time: e.target.value })}
                className="border-2 border-[#e0ede5] rounded-lg px-3 py-1.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              />
              <span className="text-[#96c0a6] text-sm">to</span>
              <input
                type="time"
                value={row.end_time ?? ''}
                disabled={!row.is_open}
                onChange={e => updateRow(row.day_of_week, { end_time: e.target.value })}
                className="border-2 border-[#e0ede5] rounded-lg px-3 py-1.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              />
            </div>

            {/* Save button */}
            <button
              onClick={() => saveRow(row)}
              disabled={saving === row.day_of_week}
              className={[
                'ml-auto text-sm px-4 py-1.5 rounded-full font-medium transition-colors disabled:opacity-50',
                saved === row.day_of_week
                  ? 'bg-green-100 text-green-700'
                  : 'bg-[#1B4D2E] text-white hover:bg-[#27533c]',
              ].join(' ')}
            >
              {saving === row.day_of_week ? '…' : saved === row.day_of_week ? '✓ Saved' : 'Save'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BlockedTimesTab() {
  const [blocked, setBlocked]     = useState<BlockedTime[]>([]);
  const [loading, setLoading]     = useState(true);
  const [deleting, setDeleting]   = useState<string | null>(null);

  // Form state
  const [date, setDate]           = useState('');
  const [allDay, setAllDay]       = useState(true);
  const [startT, setStartT]       = useState('');
  const [endT, setEndT]           = useState('');
  const [reason, setReason]       = useState('');
  const [adding, setAdding]       = useState(false);

  async function loadBlocked() {
    const res = await fetch('/api/admin/blocked');
    if (res.ok) {
      const json = await res.json();
      setBlocked(json.blocked ?? []);
    }
    setLoading(false);
  }

  useEffect(() => { loadBlocked(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    await fetch('/api/admin/blocked', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        all_day:    allDay,
        start_time: !allDay ? startT : undefined,
        end_time:   !allDay ? endT   : undefined,
        reason:     reason || undefined,
      }),
    });
    setDate(''); setAllDay(true); setStartT(''); setEndT(''); setReason('');
    await loadBlocked();
    setAdding(false);
  }

  async function handleDelete(id: string) {
    setDeleting(id);
    await fetch('/api/admin/blocked', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    await loadBlocked();
    setDeleting(null);
  }

  return (
    <div className="space-y-8">
      {/* Add form */}
      <div className="bg-white rounded-2xl border border-[#e0ede5] p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-[#C9A96E] mb-5">Block a Date or Time</p>
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full bg-[#FAF8F2] border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Reason (optional)</label>
              <input
                type="text"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="e.g. Personal day, Training…"
                className="w-full bg-[#FAF8F2] border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
          </div>

          {/* All day toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={allDay}
              onChange={e => setAllDay(e.target.checked)}
              className="w-4 h-4 accent-[#1B4D2E]"
            />
            <span className="text-sm text-[#1B4D2E]">All Day</span>
          </label>

          {!allDay && (
            <div className="flex items-center gap-3 flex-wrap">
              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Start Time</label>
                <input
                  type="time"
                  value={startT}
                  onChange={e => setStartT(e.target.value)}
                  className="border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>
              <span className="text-[#96c0a6] mt-5">to</span>
              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">End Time</label>
                <input
                  type="time"
                  value={endT}
                  onChange={e => setEndT(e.target.value)}
                  className="border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={adding}
            className="bg-[#1B4D2E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#27533c] transition-colors disabled:opacity-60 flex items-center gap-2"
          >
            {adding ? <><Loader2 size={14} className="animate-spin" /> Adding…</> : 'Block This Date'}
          </button>
        </form>
      </div>

      {/* List */}
      {loading ? (
        <div className="flex justify-center py-8"><Loader2 size={24} className="animate-spin text-[#C9A96E]" /></div>
      ) : blocked.length === 0 ? (
        <div className="text-center py-10">
          <p className="font-serif text-xl text-[#1B4D2E] font-light">No blocked dates</p>
          <p className="text-[#65a07e] text-sm mt-1">Upcoming blocked times will appear here.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {blocked.map(b => (
            <div key={b.id} className="bg-white rounded-2xl border border-[#e0ede5] px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-[#1B4D2E]">{formatDate(b.date)}</p>
                <p className="text-sm text-[#42825e]">
                  {b.all_day
                    ? 'All Day'
                    : `${b.start_time ? formatTime24(b.start_time) : '?'} – ${b.end_time ? formatTime24(b.end_time) : '?'}`}
                  {b.reason && <span className="text-[#96c0a6] ml-2 italic">{b.reason}</span>}
                </p>
              </div>
              <button
                onClick={() => handleDelete(b.id)}
                disabled={deleting === b.id}
                className="text-red-400 hover:text-red-600 transition-colors disabled:opacity-50 flex-shrink-0"
                title="Delete"
              >
                {deleting === b.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Client Modal ─────────────────────────────────────────────────────────────

function ClientModal({
  initial,
  onClose,
  onSaved,
  onDeleted,
}: {
  initial?: Client;
  onClose: () => void;
  onSaved: () => void;
  onDeleted?: () => void;
}) {
  const [form, setForm] = useState<ClientFormData>(
    initial
      ? {
          name: initial.name,
          address: initial.address ?? '',
          city: initial.city ?? '',
          phone: initial.phone ?? '',
          email: initial.email ?? '',
          birthday: initial.birthday ?? '',
          skin_concern: initial.skin_concern ?? '',
          allergies: initial.allergies ?? '',
          notes: initial.notes ?? '',
          tags: initial.tags ?? [],
        }
      : { ...EMPTY_FORM }
  );
  const [saving, setSaving]   = useState(false);
  const [deleting, setDeleting] = useState(false);

  function setField(k: keyof ClientFormData, v: string) {
    setForm(f => ({ ...f, [k]: v }));
  }

  function toggleTag(tag: string) {
    setForm(f => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter(t => t !== tag) : [...f.tags, tag],
    }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    if (initial) {
      await fetch(`/api/admin/clients/${initial.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/api/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setSaving(false);
    onSaved();
  }

  async function handleDelete() {
    if (!initial) return;
    if (!confirm(`Delete ${initial.name}? This cannot be undone.`)) return;
    setDeleting(true);
    await fetch(`/api/admin/clients/${initial.id}`, { method: 'DELETE' });
    setDeleting(false);
    onDeleted?.();
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[#FAF8F2] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#e0ede5]">
          <h2 className="font-serif text-xl text-[#1B4D2E] font-light">
            {initial ? 'Edit Client' : 'Add Client'}
          </h2>
          <button onClick={onClose} className="text-[#96c0a6] hover:text-[#1B4D2E] transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Name *</label>
            <input
              required
              value={form.name}
              onChange={e => setField('name', e.target.value)}
              className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          {/* Address + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Address</label>
              <input
                value={form.address}
                onChange={e => setField('address', e.target.value)}
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">City</label>
              <input
                value={form.city}
                onChange={e => setField('city', e.target.value)}
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setField('phone', e.target.value)}
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setField('email', e.target.value)}
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
          </div>

          {/* Birthday + Skin Concern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Birthday</label>
              <input
                value={form.birthday}
                onChange={e => setField('birthday', e.target.value)}
                placeholder="e.g. 12/17 or 03/08/82"
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Skin Concern</label>
              <input
                value={form.skin_concern}
                onChange={e => setField('skin_concern', e.target.value)}
                className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Allergies</label>
            <input
              value={form.allergies}
              onChange={e => setField('allergies', e.target.value)}
              placeholder="List any known allergies…"
              className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-1.5">Notes</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={e => setField('notes', e.target.value)}
              className="w-full bg-white border-2 border-[#e0ede5] rounded-xl px-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs uppercase tracking-[0.12em] text-[#42825e] mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={[
                    'px-3 py-1 rounded-full text-xs font-medium transition-colors border',
                    form.tags.includes(tag)
                      ? 'bg-[#1B4D2E] text-white border-[#1B4D2E]'
                      : 'bg-white text-[#42825e] border-[#e0ede5] hover:border-[#C9A96E]',
                  ].join(' ')}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            {initial ? (
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                {deleting ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                Delete Client
              </button>
            ) : <div />}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-sm px-5 py-2 rounded-full border border-[#e0ede5] text-[#42825e] hover:border-[#C9A96E] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="text-sm px-5 py-2 rounded-full bg-[#1B4D2E] text-white hover:bg-[#27533c] transition-colors disabled:opacity-60 flex items-center gap-2"
              >
                {saving ? <><Loader2 size={14} className="animate-spin" /> Saving…</> : 'Save Client'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Clients Tab ──────────────────────────────────────────────────────────────

function ClientsTab() {
  const [clients, setClients]     = useState<Client[]>([]);
  const [loading, setLoading]     = useState(true);
  const [search, setSearch]       = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [tagFilter, setTagFilter] = useState<string>('All');
  const [modal, setModal]         = useState<'add' | Client | null>(null);
  const debounceRef               = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedSearch(search), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search]);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (debouncedSearch) params.set('search', debouncedSearch);
    const res = await fetch(`/api/admin/clients?${params}`);
    if (res.ok) {
      const json = await res.json();
      setClients(json.clients ?? []);
    }
    setLoading(false);
  }, [debouncedSearch]);

  useEffect(() => { load(); }, [load]);

  // Client-side tag filter for snappiness
  const displayed = tagFilter === 'All'
    ? clients
    : clients.filter(c => c.tags?.includes(tagFilter));

  // Stats
  const total       = clients.length;
  const brazilians  = clients.filter(c => c.tags?.includes('Brazilian')).length;
  const withAllergy = clients.filter(c => c.allergies && c.allergies.trim()).length;
  const medicalFlag = clients.filter(c => c.tags?.includes('Medical Flag')).length;

  function cardBorder(c: Client) {
    if (c.tags?.includes('Medical Flag')) return 'border-l-4 border-l-amber-400';
    if (c.allergies && c.allergies.trim()) return 'border-l-4 border-l-red-400';
    return 'border-l-4 border-l-[#1B4D2E]';
  }

  const TAG_FILTERS = ['All', 'Brazilian', 'Medical Flag', 'Allergy', 'Sensitive', 'Acne', 'Teen', 'Spanish Speaking'];

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Clients', value: total, color: 'text-[#1B4D2E]' },
          { label: 'Brazilian', value: brazilians, color: 'text-[#C9A96E]' },
          { label: 'Allergies', value: withAllergy, color: 'text-red-500' },
          { label: 'Medical Flag', value: medicalFlag, color: 'text-amber-500' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#e0ede5] px-4 py-3 text-center">
            <p className={`text-2xl font-semibold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#96c0a6] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Add */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#96c0a6]" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, phone, or email…"
            className="w-full bg-white border-2 border-[#e0ede5] rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#1B4D2E] focus:outline-none focus:border-[#C9A96E] transition-colors"
          />
        </div>
        <button
          onClick={() => setModal('add')}
          className="flex items-center gap-2 bg-[#1B4D2E] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#27533c] transition-colors flex-shrink-0"
        >
          <Plus size={16} /> Add Client
        </button>
      </div>

      {/* Tag filter pills */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {TAG_FILTERS.map(t => (
          <button
            key={t}
            onClick={() => setTagFilter(t)}
            className={[
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
              tagFilter === t
                ? 'bg-[#1B4D2E] text-white'
                : 'bg-white border border-[#e0ede5] text-[#42825e] hover:border-[#C9A96E]',
            ].join(' ')}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-[#96c0a6] mb-4">
        {displayed.length} {displayed.length === 1 ? 'client' : 'clients'}
        {tagFilter !== 'All' && <span className="ml-1">· filtered by <strong className="text-[#42825e]">{tagFilter}</strong></span>}
        {debouncedSearch && <span className="ml-1">· matching <strong className="text-[#42825e]">&ldquo;{debouncedSearch}&rdquo;</strong></span>}
      </p>

      {loading && (
        <div className="flex justify-center py-12">
          <Loader2 size={28} className="animate-spin text-[#C9A96E]" />
        </div>
      )}

      {!loading && displayed.length === 0 && (
        <div className="text-center py-16">
          <p className="font-serif text-2xl text-[#1B4D2E] font-light mb-2">No clients found</p>
          <p className="text-[#65a07e] text-sm">Try adjusting your search or filter.</p>
        </div>
      )}

      {!loading && displayed.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map(c => (
            <div
              key={c.id}
              className={`bg-white rounded-2xl border border-[#e0ede5] p-5 flex flex-col gap-3 ${cardBorder(c)}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {c.tags?.includes('Medical Flag') && <span title="Medical Flag">🏥</span>}
                    {c.allergies && c.allergies.trim() && <span title="Allergy">⚠️</span>}
                    <p className="font-serif text-base text-[#1B4D2E] font-medium truncate">{c.name}</p>
                  </div>
                  {c.city && <p className="text-xs text-[#96c0a6] mt-0.5 truncate">{c.city}</p>}
                </div>
                <button
                  onClick={() => setModal(c)}
                  className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full border border-[#e0ede5] text-[#42825e] hover:border-[#C9A96E] transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Contact */}
              <div className="space-y-1 text-sm">
                {c.phone && (
                  <a href={`tel:${c.phone}`} className="flex items-center gap-1.5 text-[#42825e] hover:text-[#1B4D2E] transition-colors">
                    <span>📞</span> {c.phone}
                  </a>
                )}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-[#42825e] hover:text-[#1B4D2E] transition-colors truncate">
                    <span>✉️</span> <span className="truncate">{c.email}</span>
                  </a>
                )}
                {c.birthday && (
                  <p className="flex items-center gap-1.5 text-[#96c0a6] text-xs">
                    <span>🎂</span> {c.birthday}
                  </p>
                )}
              </div>

              {/* Skin concern badge */}
              {c.skin_concern && (
                <span className="self-start text-xs bg-[#FDF8EE] border border-[#e8d5a0] text-[#9a7630] px-2.5 py-1 rounded-full">
                  {c.skin_concern}
                </span>
              )}

              {/* Allergy warning */}
              {c.allergies && c.allergies.trim() && (
                <div className="bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                  <p className="text-xs font-semibold text-red-600 mb-0.5">⚠️ Allergy</p>
                  <p className="text-xs text-red-500">{c.allergies}</p>
                </div>
              )}

              {/* Notes preview */}
              {c.notes && (
                <p className="text-xs text-[#96c0a6] italic line-clamp-2">{c.notes}</p>
              )}

              {/* Tags */}
              {c.tags && c.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto pt-1">
                  {c.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#f2f7f4] text-[#42825e] border border-[#e0ede5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal === 'add' && (
        <ClientModal
          onClose={() => setModal(null)}
          onSaved={() => { setModal(null); load(); }}
        />
      )}
      {modal && modal !== 'add' && (
        <ClientModal
          initial={modal}
          onClose={() => setModal(null)}
          onSaved={() => { setModal(null); load(); }}
          onDeleted={() => { setModal(null); load(); }}
        />
      )}
    </div>
  );
}

// ─── Admin Page ───────────────────────────────────────────────────────────────

type Tab = 'bookings' | 'availability' | 'blocked' | 'clients';

export default function AdminPage() {
  const router  = useRouter();
  const [tab, setTab]       = useState<Tab>('bookings');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Auth check: if 401, redirect to login
    fetch('/api/admin/bookings?upcoming=true')
      .then(res => {
        if (res.status === 401) router.replace('/admin/login');
        else setChecking(false);
      })
      .catch(() => router.replace('/admin/login'));
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-[#C9A96E]" />
      </div>
    );
  }

  const TABS: { key: Tab; label: string }[] = [
    { key: 'bookings',     label: '📋 Bookings' },
    { key: 'availability', label: '🗓 Availability' },
    { key: 'blocked',      label: '🚫 Blocked Times' },
    { key: 'clients',      label: '👥 Clients' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      {/* Header */}
      <header className="bg-[#1B4D2E] px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-serif text-2xl text-white font-light">Brasilian Skin Soul</p>
          <p className="text-xs text-[#C9A96E] tracking-wider">Admin Dashboard</p>
        </div>
        <a
          href="/"
          className="text-xs text-white/60 hover:text-white transition-colors"
        >
          ← Back to Site
        </a>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Tab nav */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={[
                'px-5 py-2.5 rounded-full text-sm font-medium transition-colors',
                tab === t.key
                  ? 'bg-[#C9A96E] text-[#1B4D2E]'
                  : 'bg-white border border-[#e0ede5] text-[#42825e] hover:border-[#C9A96E]',
              ].join(' ')}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === 'bookings'     && <BookingsTab />}
        {tab === 'availability' && <AvailabilityTab />}
        {tab === 'blocked'      && <BlockedTimesTab />}
        {tab === 'clients'      && <ClientsTab />}
      </div>
    </div>
  );
}
