-- Create products table
create table if not exists public.products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  price decimal(10, 2) not null,
  image_url text,
  category text,
  stock_quantity integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.products enable row level security;

-- Create policy for public access (read-only for everyone)
create policy "Public products are viewable by everyone." on public.products
  for select using (true);
