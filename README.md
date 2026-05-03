# boo-and-boo

A small, opinionated [Next.js](https://nextjs.org) boilerplate. App Router,
TypeScript, Tailwind v4, and a tiny set of example primitives — enough to start
building, not so much that you have to delete things first.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **ESLint 9** with `eslint-config-next`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as
you edit files.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the dev server with HMR.            |
| `npm run build` | Production build.                         |
| `npm run start` | Run the production build.                 |
| `npm run lint`  | Lint with ESLint.                         |

## Project layout

```
src/
  app/
    layout.tsx        Root layout — html/body, fonts, global styles.
    page.tsx          Landing page (/). Demonstrates the components.
    globals.css       Tailwind import + global tokens.
    api/
      hello/
        route.ts      Example Route Handler at GET /api/hello.
  components/
    Button.tsx        Tiny button primitive with variants.
    Card.tsx          Tiny card primitive (title / description / children).
  lib/
    cn.ts             classNames merger (no dependencies).
public/                 Static assets, served from /.
.env.example            Copy to .env.local and fill in.
```

The `@/*` import alias points at `src/*` (configured in `tsconfig.json`), so
`import { Button } from "@/components/Button"` works from anywhere.

## How to extend it

### Add a page

Create a folder under `src/app/` — the folder name is the URL segment, and a
`page.tsx` inside it renders the page.

```tsx
// src/app/about/page.tsx  →  /about
export default function About() {
  return <h1>About</h1>;
}
```

Add a `loading.tsx` next to it for a Suspense fallback, or `not-found.tsx` for
a 404 boundary. Folders wrapped in parens like `(marketing)` group routes
without adding a URL segment; folders in brackets like `[id]` are dynamic.

### Add a Route Handler (API endpoint)

Create a `route.ts` under `src/app/api/<path>/`. Export named functions for
each HTTP verb you want to support.

```ts
// src/app/api/echo/route.ts  →  POST /api/echo
export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ youSent: body });
}
```

Route Handlers are not cached by default. Opt in for `GET` with
`export const dynamic = "force-static"`.

### Add a component

Drop it in `src/components/`. Keep components small and presentational; pull
shared logic into `src/lib/`. The existing `Button` and `Card` show the basic
shape: typed props, Tailwind classes, `cn()` for conditional classes.

### Add a server-only helper

Anything in `src/lib/` is fair game. If a helper must only run on the server
(e.g. it reads a secret), put `import "server-only"` at the top of the file
and Next will fail the build if a Client Component imports it.

### Add environment variables

1. Copy `.env.example` → `.env.local` (already gitignored).
2. Add your variable. Prefix with `NEXT_PUBLIC_` only if the browser needs it.
3. Read with `process.env.MY_VAR` from Server Components, Route Handlers, or
   Server Actions. Restart `npm run dev` after adding new variables.

### Server vs. Client Components

Components in `src/app/` and `src/components/` are **Server Components by
default**. They run on the server, can `await` data, and ship zero JS. Add
`"use client"` at the top of a file when you need state, effects, or browser
APIs (e.g. `useState`, `onClick`, `useRouter`).

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
```

### Style with Tailwind

Tailwind v4 is wired up through PostCSS — no `tailwind.config.js` needed. Add
classes directly. Define design tokens (colors, fonts) as CSS custom
properties in `src/app/globals.css` and reference them with arbitrary values
(`bg-[var(--brand)]`).

### Add a dependency

```bash
npm install <pkg>
```

For dev-only dependencies use `npm install -D <pkg>`. The lockfile is checked
in.

## Deploying

The smoothest path is [Vercel](https://vercel.com/new). Import the repo and
ship — no config needed. For self-hosting, `npm run build` produces a
standalone Node server you can run with `npm run start`.

## Notes

- The bundled Next.js docs live in `node_modules/next/dist/docs/`. They're
  the source of truth for this exact version.
- Don't put a `route.ts` at the same path as a `page.tsx` — they collide.
- Server Component imports must be serializable. If you see a "cannot pass
  function as prop" error, the receiver probably needs `"use client"`.
