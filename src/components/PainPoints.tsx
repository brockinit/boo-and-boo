type Stat = {
  figure: string;
  label: string;
  source: string;
};

const STATS: Stat[] = [
  {
    figure: "15–23%",
    label:
      "of California's 2024 crop left unharvested against fully-deployed farming costs",
    source: "SVB 2026 State of the US Wine Industry",
  },
  {
    figure: "2.6M",
    label:
      "tons crushed in 2025 — California's smallest harvest since 1999, an 8.4% YoY contraction",
    source: "California Department of Food & Agriculture",
  },
  {
    figure: "−8.7%",
    label:
      "drop in wine consumption volume in a single year, with no recovery forecast before 2027",
    source: "Industry consumption data, 2023–2024",
  },
  {
    figure: "1,700+",
    label:
      "distributor jobs lost in a single quarter as RNDC exited California entirely",
    source: "California labor disclosures, 2025",
  },
];

export function PainPoints() {
  return (
    <section
      id="reckoning"
      className="paper-grain relative bg-parchment py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
              I. The reckoning
            </p>
            <div className="mt-3 h-px w-12 bg-oxblood" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              The era of passive growth in California wine is over.
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              A confluence of crop oversupply, demographic headwinds, climate
              volatility, and structural labor scarcity has pulled the
              financial floor out from under the industry. The producers
              absorbing below-break-even losses on legacy systems are out of
              time.
            </p>
          </div>
        </header>

        <div className="hairline mt-16" />

        <dl className="mt-16 grid gap-px overflow-hidden bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-5 bg-cream p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-mute">
                Fig. 0{i + 1}
              </p>
              <div className="font-display text-5xl font-semibold leading-none tracking-[-0.02em] text-oxblood sm:text-6xl">
                {stat.figure}
              </div>
              <p className="text-sm leading-6 text-ink">{stat.label}</p>
              <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                {stat.source}
              </p>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
              The bifurcation has already started.
            </h3>
            <p className="text-pretty mt-5 text-base leading-7 text-ink-soft">
              The bottom-quartile premium wineries are posting{" "}
              <span className="text-oxblood">−10.5% operating margins</span>.
              The top quartile is posting{" "}
              <span className="text-oxblood">+11.9% operating income</span> on{" "}
              <span className="text-oxblood">+8% sales growth</span>. The
              difference is not terroir, brand, or vintage. It is the operating
              system underneath the winery.
            </p>
          </div>
          <aside className="border-l border-rule pl-8 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage-deep">
              What survives
            </p>
            <p className="mt-4 font-display text-xl italic leading-relaxed text-ink">
              Producers blending human craft with machine capability — to
              multiply output per labor hour, forecast demand against live POS
              depletion, and protect the chemistry of every tank.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
