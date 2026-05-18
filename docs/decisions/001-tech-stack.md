# ADR 001: Tech Stack Selection
Date: 2026-05-14

## Status
Accepted

## Context
Need a fast, scalable, and secure stack for a retail MVP.

## Decision
- **Frontend:** Next.js (SEO, performance, React ecosystem).
- **Backend/Database:** Supabase (PostgreSQL, Auth, Storage, Edge Functions).
- **Styling/UI:** Tailwind CSS + Shadcn UI (Cozy theme customization, speed).

## Consequences
- **Pros:** Rapid development, managed backend, strong security (RLS).
- **Cons:** Dependency on third-party services (Supabase).
