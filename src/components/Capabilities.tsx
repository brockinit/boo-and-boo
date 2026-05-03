import type { ReactNode } from "react";
import {
  CellarIllustration,
  ForecastIllustration,
  NetworkIllustration,
  SchedulingIllustration,
  VineyardIllustration,
} from "@/components/CapabilityIcons";

type Capability = {
  index: string;
  title: string;
  problem: string;
  solution: string;
  bullets: string[];
  illustration: ReactNode;
};

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "Predictive demand & supply forecasting",
    problem:
      "Production volumes set against historical sales velocity in a market that no longer behaves historically. The result: 350,000 tons of unsold fruit and warehouses full of bulk wine.",
    solution:
      "Demand models that fuse POS depletion, macro indicators, hyper-local events, and depletion velocity by SKU — pushed back upstream into purchasing, allocation, and harvest planning.",
    bullets: [
      "BTG-level depletion forecasts by daypart and channel",
      "Allocation optimization across DTC, wholesale, and trade",
      "Cold-chain routing and integrity monitoring",
    ],
    illustration: <ForecastIllustration />,
  },
  {
    index: "02",
    title: "Cellar intelligence & fermentation control",
    problem:
      "Cellar masters lose harvest hours to transcribing handwritten pump-over schedules and lab results. Sluggish fermentations are caught only after they've cost you the lot.",
    solution:
      "Multi-sensor fusion across temperature, density, and yeast activity — paired with neural models that flag VFA development before it shows in the glass. Voice and OCR capture for hands-free cellar work.",
    bullets: [
      "Real-time fermentation anomaly detection",
      "Voice-driven tank queries and work orders",
      "OCR ingestion of handwritten cellar notes and lab reports",
    ],
    illustration: <CellarIllustration />,
  },
  {
    index: "03",
    title: "Precision viticulture & climate adaptation",
    problem:
      "Calendar-based irrigation and blanket spray programs are inadequate against drought, erratic weather, and California's overtime caps that limit manual scouting.",
    solution:
      "Hybrid models that fuse satellite imagery, drone multispectral feeds, IoT soil moisture, and meteorological data — directing precision drip irrigation and targeted treatments only where the vines actually need them.",
    bullets: [
      "CNN-based vine stress and disease detection from drone imagery",
      "Block-level transpiration modeling for precision irrigation",
      "Documented 50%+ labor savings on key irrigation tasks",
    ],
    illustration: <VineyardIllustration />,
  },
  {
    index: "04",
    title: "Labor scheduling & resource coordination",
    problem:
      "Operations leaders trapped behind spreadsheets aligning equipment, weather windows, and a constrained workforce against blocks ripening on their own schedule.",
    solution:
      "Scheduling agents that decode weather, equipment logs, and historical throughput to produce defensible labor deployments — freeing managers to be in the field where execution errors actually surface.",
    bullets: [
      "Harvest sequencing aligned to physiological ripeness windows",
      "Equipment and crew utilization optimization",
      "Bottling-line and dry-goods scheduling",
    ],
    illustration: <SchedulingIllustration />,
  },
  {
    index: "05",
    title: "Unified data architecture & DTC personalization",
    problem:
      "Generic ERPs were built for linear manufacturing — not blending, evaporation, cooperage, or block-to-COGS traceability. Shadow IT spreadsheets fragment the data needed for any AI to work.",
    solution:
      "Unified data lakes and intelligent middleware bridging vineyard tracking, cellar ops, and ERP. Then: 360-degree customer profiles powering personalized DTC, club retention, and dynamic tasting-room pricing.",
    bullets: [
      "Block-to-COGS traceability across the full lifecycle",
      "Edge-capable capture for subterranean cellar environments",
      "Wine-club churn prediction and personalized recommendations",
    ],
    illustration: <NetworkIllustration />,
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative border-t border-white/[0.06] bg-[#04020e] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-cyan-200/80">
            Where AI moves the needle
          </span>
          <h2 className="text-balance mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Five workflows that pay for the engagement.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            We don&apos;t sell platforms. We deploy bespoke AI inside your
            existing stack — targeting the specific friction points where
            margin is leaking today.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.index}
              className="group grid gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition hover:border-white/15 sm:p-8 lg:grid-cols-12 lg:items-center"
            >
              <div
                className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a061f] lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[10/7]">{cap.illustration}</div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-xs tracking-[0.28em]"
                    style={{
                      background:
                        "linear-gradient(135deg,#a78bfa 0%,#22d3ee 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {cap.index}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {cap.title}
                  </h3>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-200/70">
                      The friction
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {cap.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/80">
                      What we deploy
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {cap.solution}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {cap.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-cyan-300"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
