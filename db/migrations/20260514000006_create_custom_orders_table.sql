-- Create custom_orders table
create table if not exists public.custom_orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  description text not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
