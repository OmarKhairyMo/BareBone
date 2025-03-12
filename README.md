# Pet Profile Application

A React Native application for managing pet profiles and health logs using Supabase as the backend.

## Features

- View pet profiles with detailed information
- Track pet health metrics in a tabbed interface:
  - Weight logs
  - Body condition assessments
  - Veterinary visit records
- Add new health logs for each category
- Responsive and modern UI

## Tech Stack

- React Native with Expo
- TypeScript
- React Navigation (Stack and Tab navigation)
- TanStack Query (React Query) for data fetching
- Supabase for backend services

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm
- Expo CLI
- Supabase account

### Supabase Setup

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)
2. Set up the following tables in your Supabase project:

```sql
-- Pets table
create table pets (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  species text not null,
  breed text,
  age integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  owner_id uuid references auth.users not null
);

-- Weight logs table
create table weight_logs (
  id uuid default uuid_generate_v4() primary key,
  pet_id uuid references pets not null,
  weight decimal not null,
  date timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Body condition logs table
create table body_condition_logs (
  id uuid default uuid_generate_v4() primary key,
  pet_id uuid references pets not null,
  body_condition text not null,
  date timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Vet visit logs table
create table vet_visit_logs (
  id uuid default uuid_generate_v4() primary key,
  pet_id uuid references pets not null,
  notes text not null,
  date timestamp with time zone default timezone('utc'::text, now()) not null
);
```

3. Get your Supabase URL and anon key from the project settings

### Application Setup

1. Clone this repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Update the Supabase configuration in `services/supabaseClient.ts` with your project URL and anon key
4. Start the development server:
   ```
   yarn start
   ```
5. Follow the Expo instructions to run the app on your device or emulator

## Project Structure

- `/screens` - React components for each screen
- `/services` - API services and Supabase client
- `/types` - TypeScript type definitions
- `/components` - Reusable UI components


## Future Enhancements

- User authentication
- Add/edit pet profiles
- Image upload for pets
- Data visualization for health metrics
- Notifications for upcoming vet visits
