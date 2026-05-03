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
      className="paper-grain relative bg-paper py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
              IV. Who we serve
            </p>
            <div className="mt-3 h-px w-12 bg-oxblood" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              Built for the enterprise estates of{" "}
              <em className="italic text-oxblood">Napa & Sonoma</em>.
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              Bespoke AI architecture is justified by operational complexity,
              data volume, and capital reserves. We focus where those three
              converge — the multi-brand, multi-estate producers whose
              decisions ripple across the corridor.
            </p>
          </div>
        </header>

        <div className="hairline mt-16" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <dl className="grid grid-cols-3 gap-px overflow-hidden bg-rule lg:col-span-5">
            {[
              ["10", "enterprise targets in Napa & Sonoma"],
              ["100M+", "cases of combined annual production"],
              ["50K+", "acres under management at the largest"],
            ].map(([figure, label]) => (
              <div
                key={label}
                className="flex flex-col gap-4 bg-cream p-6 text-center"
              >
                <div className="font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-oxblood sm:text-4xl">
                  {figure}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                  {label}
                </p>
              </div>
            ))}
          </dl>

          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage-deep">
              Signals we&apos;re a fit
            </p>
            <ul className="mt-5 grid gap-2 border-t border-rule sm:grid-cols-2">
              {SIGNALS.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-3 border-b border-rule py-3 text-sm leading-6 text-ink-soft sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-5"
                >
                  <span
                    aria-hidden
                    className="font-mono text-[10px] text-oxblood"
                  >
                    0{i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-l-2 border-oxblood bg-cream/60 p-6">
              <p className="font-display text-base italic leading-relaxed text-ink">
                If you are running a single boutique label, we are the wrong
                partner — and we will tell you on the call. We build for the
                operational complexity that justifies a custom-architected
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
