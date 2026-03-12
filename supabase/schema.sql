-- ============================================================
-- Brasilian Skin Soul — Supabase Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Services catalog
create table if not exists services (
  id            text primary key,
  name          text not null,
  category      text not null,
  duration_min  int  not null,
  price         int  not null,
  description   text,
  active        boolean default true
);

-- Weekly availability template (one row per day_of_week 0=Sun … 6=Sat)
create table if not exists availability (
  id           uuid primary key default gen_random_uuid(),
  day_of_week  int  not null unique,
  start_time   time,
  end_time     time,
  is_open      boolean default true
);

-- Ad-hoc blocked times (specific dates)
create table if not exists blocked_times (
  id          uuid        primary key default gen_random_uuid(),
  date        date        not null,
  start_time  time,
  end_time    time,
  all_day     boolean     default false,
  reason      text,
  created_at  timestamptz default now()
);

-- Bookings
create table if not exists bookings (
  id                   uuid        primary key default gen_random_uuid(),
  service_id           text        references services(id),
  service_name         text        not null,
  service_duration_min int         not null,
  service_price        int         not null,
  client_name          text        not null,
  client_email         text        not null,
  client_phone         text        not null,
  booking_date         date        not null,
  start_time           time        not null,
  end_time             time        not null,
  status               text        default 'confirmed',
  payment_status       text        default 'pending',
  notes                text,
  created_at           timestamptz default now()
);

-- ── Seed default availability ───────────────────────────────────────────────
-- Sunday (0) — closed
insert into availability (day_of_week, start_time, end_time, is_open)
values (0, null, null, false)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Monday (1) — closed
insert into availability (day_of_week, start_time, end_time, is_open)
values (1, null, null, false)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Tuesday (2) — 09:00–18:00
insert into availability (day_of_week, start_time, end_time, is_open)
values (2, '09:00', '18:00', true)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Wednesday (3) — 09:00–18:00
insert into availability (day_of_week, start_time, end_time, is_open)
values (3, '09:00', '18:00', true)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Thursday (4) — 09:00–18:00
insert into availability (day_of_week, start_time, end_time, is_open)
values (4, '09:00', '18:00', true)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Friday (5) — 09:00–18:00
insert into availability (day_of_week, start_time, end_time, is_open)
values (5, '09:00', '18:00', true)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;

-- Saturday (6) — 09:00–17:00
insert into availability (day_of_week, start_time, end_time, is_open)
values (6, '09:00', '17:00', true)
on conflict (day_of_week) do update
  set start_time = excluded.start_time,
      end_time   = excluded.end_time,
      is_open    = excluded.is_open;
