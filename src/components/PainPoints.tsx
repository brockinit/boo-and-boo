type Stat = {
  figure: string;
  label: string;
  source: string;
};

const STATS: Stat[] = [
  {
    figure: "15–23%",
    label: "of California's 2024 crop left unharvested against fully-deployed farming costs",
    source: "SVB 2026 State of the US Wine Industry",
  },
  {
    figure: "2.6M tons",
    label: "the smallest California crush since 1999 — an 8.4% YoY contraction",
    source: "California Department of Food and Agriculture",
  },
  {
    figure: "−8.7%",
    label: "drop in wine consumption volume in a single year, with no recovery forecast before 2027",
    source: "Industry consumption data, 2023–2024",
  },
  {
    figure: "1,700+",
    label: "distributor jobs lost in a single quarter as RNDC exited California entirely",
    source: "California labor disclosures, 2025",
  },
];

export function PainPoints() {
  return (
    <section
      id="reckoning"
      className="relative border-t border-white/[0.06] bg-[#050314] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(167,139,250,0.18),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-fuchsia-200/80">
            The reckoning
          </span>
          <h2 className="text-balance mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The era of passive growth in California wine is over.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A confluence of crop oversupply, demographic headwinds, climate
            volatility, and structural labor scarcity has pulled the financial
            floor out from under the industry. The producers absorbing
            below-break-even losses on legacy systems are out of time.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-4 bg-[#0a061f] p-7 transition hover:bg-[#100833]"
            >
              <div
                className="text-4xl font-semibold tracking-tight sm:text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg,#a78bfa 0%,#22d3ee 60%,#34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.figure}
              </div>
              <p className="text-sm leading-6 text-white/75">{stat.label}</p>
              <p className="mt-auto text-[11px] uppercase tracking-[0.18em] text-white/35">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:grid-cols-3 sm:p-10">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              The bifurcation has already started.
            </h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              The bottom-quartile premium wineries are posting{" "}
              <span className="text-white">−10.5% operating margins</span>.
              The top quartile is posting{" "}
              <span className="text-white">+11.9% operating income</span> on{" "}
              <span className="text-white">+8% sales growth</span>. The
              difference is not terroir, brand, or vintage. It is the operating
              system underneath the winery.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0a061f] p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">
              What survives
            </p>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Producers blending human craft with machine capability — to
              multiply output per labor hour, forecast demand against
              live POS depletion, and protect the chemistry of every tank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
