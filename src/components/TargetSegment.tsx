const SIGNALS = [
  "Multi-brand portfolio with distinct cellar and DTC needs across estates",
  "Existing investment in ERP, GIS, or CRM with visible silos between them",
  "Public commitments to sustainability, regenerative farming, or carbon accounting",
  "Premiumization strategy or recent acquisitions that strain operational coherence",
  "Material exposure to third-party grower contracts or bulk-wine markets",
  "Active replanting, redevelopment, or facility consolidation underway",
];

export function TargetSegment() {
  return (
    <section
      id="segment"
      className="relative border-t border-white/[0.06] bg-[#04020e] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-fuchsia-200/80">
              Who we serve
            </span>
            <h2 className="text-balance mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built for the enterprise producers of Napa & Sonoma.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Bespoke AI architecture is justified by operational complexity,
              data volume, and capital reserves. We focus where those three
              converge — the multi-brand, multi-estate producers whose
              decisions ripple across the corridor.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {[
                ["10", "enterprise targets in Napa & Sonoma"],
                ["100M+", "cases of combined annual production"],
                ["50K+", "acres under management at the largest"],
              ].map(([figure, label]) => (
                <div
                  key={label}
                  className="bg-[#0a061f] p-5 text-center sm:p-6"
                >
                  <div
                    className="text-2xl font-semibold tracking-tight sm:text-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#a78bfa 0%,#22d3ee 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {figure}
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">
                Signals we&apos;re a fit
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {SIGNALS.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-fuchsia-300 to-cyan-300"
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-white/10 bg-[#0a061f] p-6">
                <p className="text-sm leading-6 text-white/75">
                  If you&apos;re running a single boutique label, we&apos;re
                  the wrong partner — and we&apos;ll tell you on the call. We
                  build for the operational complexity that justifies a
                  custom-architected engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
