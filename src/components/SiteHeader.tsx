import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050314]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-300 via-cyan-300 to-emerald-300 shadow-[0_0_12px_rgba(165,243,252,0.8)]"
          />
          VineIQ
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/65 sm:flex">
          <a href="#reckoning" className="transition hover:text-white">
            The reckoning
          </a>
          <a href="#capabilities" className="transition hover:text-white">
            Capabilities
          </a>
          <a href="#playbook" className="transition hover:text-white">
            Playbook
          </a>
          <a href="#segment" className="transition hover:text-white">
            Who we serve
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/90 transition hover:bg-white/10"
        >
          Start a conversation
        </a>
      </div>
    </header>
  );
}
