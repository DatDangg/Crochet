-- Enable RLS
alter table public.custom_orders enable row level security;
alter table public.wholesale_inquiries enable row level security;

-- Custom orders policies
create policy "Users can view own custom orders." on public.custom_orders
  for select using (auth.uid() = user_id);

create policy "Users can insert own custom orders." on public.custom_orders
  for insert with check (auth.uid() = user_id);

-- Wholesale inquiries policies (public/admin)
create policy "Anyone can insert wholesale inquiries." on public.wholesale_inquiries
  for insert with check (true);
