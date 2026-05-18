-- Create wishlists table
create table if not exists public.wishlists (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  product_id uuid references public.products not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);
