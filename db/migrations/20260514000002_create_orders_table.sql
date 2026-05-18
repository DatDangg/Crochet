-- Create orders table
create table if not exists public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  total_amount decimal(10, 2) not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.orders enable row level security;

-- Policies
create policy "Users can view own orders." on public.orders
  for select using (auth.uid() = user_id);

create policy "Users can insert own orders." on public.orders
  for insert with check (auth.uid() = user_id);
