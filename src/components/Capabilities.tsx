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
    index: "i.",
    title: "Predictive demand & supply forecasting",
    problem:
      "Production volumes set against historical sales velocity in a market that no longer behaves historically. The result: 350,000 tons of unsold fruit and warehouses full of bulk wine.",
    solution:
      "Demand models that fuse POS depletion, macro indicators, and hyper-local events — pushed back upstream into purchasing, allocation, and harvest planning.",
    bullets: [
      "BTG-level depletion forecasts by daypart and channel",
      "Allocation optimization across DTC, wholesale, and trade",
      "Cold-chain routing and integrity monitoring",
    ],
    illustration: <ForecastIllustration />,
  },
  {
    index: "ii.",
    title: "Cellar intelligence & fermentation control",
    problem:
      "Cellar masters lose harvest hours to transcribing handwritten pump-over schedules and lab results. Sluggish fermentations are caught only after they have cost you the lot.",
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
    index: "iii.",
    title: "Precision viticulture & climate adaptation",
    problem:
      "Calendar-based irrigation and blanket spray programs are inadequate against drought, erratic weather, and California's overtime caps that limit manual scouting.",
    solution:
      "Hybrid models that fuse satellite imagery, drone multispectral feeds, IoT soil moisture, and meteorological data — directing precision drip irrigation and targeted treatments only where the vines need them.",
    bullets: [
      "CNN-based vine stress and disease detection from drone imagery",
      "Block-level transpiration modeling for precision irrigation",
      "Documented 50%+ labor savings on key irrigation tasks",
    ],
    illustration: <VineyardIllustration />,
  },
  {
    index: "iv.",
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
    index: "v.",
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
      className="paper-grain relative bg-paper py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
              II. Five workflows
            </p>
            <div className="mt-3 h-px w-12 bg-oxblood" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              Five workflows that{" "}
              <em className="italic text-oxblood">pay for the engagement</em>.
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              We do not sell platforms. We deploy bespoke AI inside your
              existing stack — targeting the specific friction points where
              margin is leaking today.
            </p>
          </div>
        </header>

        <div className="hairline mt-16" />

        <div className="mt-16 space-y-20">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.index}
              className="grid gap-10 lg:grid-cols-12 lg:items-start"
            >
              <figure
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[10/7] overflow-hidden border border-rule bg-cream">
                  {cap.illustration}
                </div>
                <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                  Plate {String(i + 2).padStart(2, "0")} · {cap.title}
                </figcaption>
              </figure>

              <div className="lg:col-span-7">
                <p className="font-display text-2xl italic text-oxblood">
                  {cap.index}
                </p>
                <h3 className="font-display mt-2 text-3xl font-semibold leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
                  {cap.title}
                </h3>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-oxblood">
                      The friction
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink-soft">
                      {cap.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sage-deep">
                      What we deploy
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink">
                      {cap.solution}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 border-t border-rule">
                  {cap.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-4 border-b border-rule py-3 text-sm text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="font-display text-amber"
                      >
                        ·
                      </span>
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
