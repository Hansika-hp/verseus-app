# Kulp.AI - Vite Boilerplate

A simple Vite boilerplate project for Kulp.AI - the end-to-end software development platform powered by Claude AI.

## Features

- **React** with **TypeScript**
- **Vite** for fast development and builds
- **Zustand** for state management
- **React Router** for routing
- **Supabase** for database (optional)

## Project Structure

- `/src` - Main source code
  - `/components` - Reusable UI components
  - `/pages` - Page components used for routing
  - `/store` - Zustand store configurations
  - `/lib` - Utility functions and libraries
  - `/hooks` - Custom React hooks
  - `/migrations` - Supabase database migrations

## Getting Started

```bash
# Install dependencies
npm install
# or
yarn
# or
pnpm install

# Copy the environment example file
cp .env.example .env

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Database Integration (Optional)

This project includes Supabase integration for projects that require a database. For simple projects, local state management with Zustand may be sufficient.

### When to use Supabase:

- User authentication is required
- Data needs to be persisted across sessions
- Real-time updates are needed
- File storage is required

### Setting up Supabase:

1. Create a project at [Supabase](https://supabase.com)
2. Update the environment variables in your `.env` file:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Database Migrations:

See the [migrations README](src/migrations/README.md) for details on managing database schema changes.

## License

MIT
