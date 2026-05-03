export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#04020e] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-300 via-cyan-300 to-emerald-300 shadow-[0_0_12px_rgba(165,243,252,0.8)]"
          />
          VineIQ
        </div>
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} VineIQ. AI consultancy for the
          California wine industry. Crafted in Sonoma County.
        </p>
        <div className="flex items-center gap-6 text-xs text-white/55">
          <a href="#capabilities" className="hover:text-white">
            Capabilities
          </a>
          <a href="#playbook" className="hover:text-white">
            Playbook
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
