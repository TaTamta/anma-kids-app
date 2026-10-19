# Anma — Kids' Clothing Store

An e-commerce storefront for a Georgian children's clothing brand, built with **Next.js 16 (App Router)**, **React 19** and **TypeScript**. The UI is localized in Georgian and prices are shown in lari (₾).

> **Status: in active development.** The storefront shell, home page and product grid are in place; the product grid currently renders sample data while the backend API is being wired in.

<!-- Add a screenshot here once deployed: ![Anma home page](docs/screenshot.png) -->

## Features

- **Responsive storefront** — hero sections for boys' and girls' collections, a "New arrivals" product grid (2 columns on mobile, 4 on desktop), header with dropdown navigation, and footer.
- **Product cards** — "New" and discount badges, original vs. sale price, hover animations, optimized images via `next/image`.
- **Typed API layer** — a single Axios client with a base URL from the environment, automatic `Bearer` token injection, global 401 handling (clears the session and redirects to login) and normalized error messages.
- **Auth service** — login, registration and current-user endpoints, with the token stored in a `SameSite=Lax` cookie (`Secure` in production).
- **Products service** — paginated listing with filters (category, size, color, price range, sort) plus lookups by slug or id.
- **Design system** — accessible UI primitives (button, dialog, sheet, select, dropdown, navigation menu, skeleton, toasts) built on Radix UI with shadcn/ui and Tailwind CSS v4.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, Radix UI, lucide-react |
| Data | Axios, TanStack Query |
| Forms & validation | React Hook Form, Zod |
| State | Zustand |
| Tooling | ESLint, Prettier (with Tailwind class sorting) |

## Project structure

```
src/
├── app/              # App Router routes and layouts — (shop) route group
├── components/
│   ├── ui/           # Reusable design-system primitives (shadcn/ui)
│   ├── layout/       # Header, footer
│   ├── home/         # Hero
│   └── product/      # Product card and grid
├── config/           # Navigation and hero content
├── lib/              # API client, auth-token storage, utilities
├── services/         # API services (auth, products)
└── types/            # Shared TypeScript types
```

## Getting started

Requires Node.js 20+.

```bash
git clone https://github.com/TaTamta/anma-kids-app.git
cd anma-kids-app
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_API_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the shop's REST API |
| `NEXT_PUBLIC_DEV_TOKEN` | Optional token for local development before login is wired up. Exposed to the browser — never use a real secret. |

## Roadmap

- [ ] Replace sample products with live data from the API (TanStack Query)
- [ ] Product listing page with filters and pagination
- [ ] Product details page with size and color variants
- [ ] Cart and checkout
- [ ] Login and registration pages
- [ ] Deploy to Vercel

## Author

**Tamta Tavartkiladze** — [GitHub](https://github.com/TaTamta)
