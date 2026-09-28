-- Only hashed identifiers and counters; message contents are never stored here.
create table if not exists public.contact_rate_limits (
  bucket text primary key,
  window_start timestamptz not null,
  hits integer not null default 0
);
alter table public.contact_rate_limits enable row level security;
revoke all on public.contact_rate_limits from public, anon, authenticated;

create or replace function public.contact_rate_limit_ready()
returns boolean language sql security definer set search_path = '' as $$
  select to_regclass('public.contact_rate_limits') is not null;
$$;

create or replace function public.consume_contact_rate_limit(p_email_hash text)
returns boolean language plpgsql security definer set search_path = '' as $$
declare
  v_now timestamptz := clock_timestamp();
  v_key text;
  v_limit integer;
  v_hits integer;
begin
  if p_email_hash !~ '^[0-9a-f]{64}$' then return false; end if;
  -- Serializes admission across instances and prevents races on the global limit.
  perform pg_advisory_xact_lock(1242661);
  delete from public.contact_rate_limits where window_start < v_now - interval '1 day';
  foreach v_key in array array['global', 'email:' || p_email_hash] loop
    v_limit := case when v_key = 'global' then 30 else 3 end;
    insert into public.contact_rate_limits(bucket, window_start, hits)
    values(v_key, v_now, 1)
    on conflict(bucket) do update set
      hits = case when public.contact_rate_limits.window_start < v_now - interval '1 hour' then 1 else public.contact_rate_limits.hits + 1 end,
      window_start = case when public.contact_rate_limits.window_start < v_now - interval '1 hour' then v_now else public.contact_rate_limits.window_start end
    returning hits into v_hits;
    if v_hits > v_limit then return false; end if;
  end loop;
  return true;
end;
$$;
revoke all on function public.contact_rate_limit_ready() from public, anon, authenticated;
revoke all on function public.consume_contact_rate_limit(text) from public, anon, authenticated;
grant execute on function public.contact_rate_limit_ready() to service_role;
grant execute on function public.consume_contact_rate_limit(text) to service_role;
