-- Create a table for public profiles
create table public.profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  role text default 'user'::text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Transaction Table
create table public.transactions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  type text not null, -- 'deposit', 'withdrawal', 'transfer', etc
  amount numeric not null,
  currency text not null,
  status text default 'pending'::text, -- 'pending', 'completed', 'failed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.transactions enable row level security;

create policy "Users can view own transactions."
  on transactions for select
  using ( auth.uid() = user_id );

-- Admin policies (Admins can do everything)
-- Function to check role
create or replace function public.is_admin()
returns boolean as $$
declare
  user_role text;
begin
  select role into user_role from public.profiles where id = auth.uid();
  return user_role = 'admin';
end;
$$ language plpgsql security definer;

-- Admins can query all profiles and transactions
create policy "Admins can view all profiles."
  on profiles for select
  using ( public.is_admin() );

create policy "Admins can update all profiles."
  on profiles for update
  using ( public.is_admin() );

create policy "Admins can view all transactions."
  on transactions for select
  using ( public.is_admin() );

create policy "Admins can update all transactions."
  on transactions for update
  using ( public.is_admin() );
