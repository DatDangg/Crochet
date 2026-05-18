-- Create coupons table
create table if not exists public.coupons (
  id uuid default gen_random_uuid() primary key,
  code text unique not null,
  discount_percentage decimal(5, 2) not null,
  valid_until timestamp with time zone,
  is_active boolean default true
);
