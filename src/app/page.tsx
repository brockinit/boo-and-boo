import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-4xl flex-1 flex-col gap-12 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            boo-and-boo · Next.js boilerplate
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A small, opinionated starting point.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            App Router, TypeScript, Tailwind v4, and a tiny set of example
            primitives. Read the README for how to extend it.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/api/hello?name=friend">
              <Button>Try the example API</Button>
            </Link>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">Next.js docs</Button>
            </a>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <Card
            title="src/app"
            description="Routes, layouts, and Route Handlers. Each folder is a URL segment; page.tsx renders, route.ts handles requests."
          />
          <Card
            title="src/components"
            description="Reusable UI primitives. Start with Button and Card, add more as needed."
          />
          <Card
            title="src/lib"
            description="Framework-agnostic helpers (e.g. cn for className merging). No React imports here."
          />
          <Card
            title="public/"
            description="Static assets served from the root URL. Reference as /file.svg."
          />
        </section>
      </main>
      <footer className="w-full max-w-4xl px-6 pb-10 text-sm text-zinc-500 sm:px-10">
        Edit <code className="font-mono">src/app/page.tsx</code> to change this
        page.
      </footer>
    </div>
  );
}
