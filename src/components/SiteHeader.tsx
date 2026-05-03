import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule/60 bg-parchment/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-display text-2xl font-semibold leading-none tracking-tight text-ink sm:text-3xl"
        >
          Brix
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-soft sm:flex">
          <a href="#reckoning" className="transition hover:text-ink">
            Reckoning
          </a>
          <a href="#capabilities" className="transition hover:text-ink">
            Workflows
          </a>
          <a href="#playbook" className="transition hover:text-ink">
            Playbook
          </a>
          <a href="#segment" className="transition hover:text-ink">
            Estates
          </a>
        </nav>
        <a
          href="#contact"
          className="border border-ink/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-ink transition hover:bg-ink/5"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
