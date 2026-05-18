-- Create wholesale_inquiries table
create table if not exists public.wholesale_inquiries (
  id uuid default gen_random_uuid() primary key,
  company_name text not null,
  contact_email text not null,
  message text not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
