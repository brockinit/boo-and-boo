export function Footer() {
  return (
    <footer className="bg-[#0c0805] py-12 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-8 border-b border-cream/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight">
              Brix
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-cream/65">
              AI consultancy for the California wine industry. Crafted in
              Sonoma County for the producers shaping the next decade.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/65">
            <a href="#capabilities" className="hover:text-cream">
              Workflows
            </a>
            <a href="#playbook" className="hover:text-cream">
              Playbook
            </a>
            <a href="#segment" className="hover:text-cream">
              Estates
            </a>
            <a href="#contact" className="hover:text-cream">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Brix. All rights reserved.</p>
          <p>Santa Rosa · 38.4404° N · 122.7141° W</p>
        </div>
      </div>
    </footer>
  );
}
