-- Enable RLS
alter table public.wishlists enable row level security;
alter table public.coupons enable row level security;

-- Wishlists policies
create policy "Users can view own wishlists." on public.wishlists
  for select using (auth.uid() = user_id);

create policy "Users can insert own wishlists." on public.wishlists
  for insert with check (auth.uid() = user_id);

create policy "Users can delete own wishlists." on public.wishlists
  for delete using (auth.uid() = user_id);

-- Coupons policies (public read-only)
create policy "Anyone can view active coupons." on public.coupons
  for select using (is_active = true);
