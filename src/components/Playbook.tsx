type Phase = {
  step: string;
  title: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    step: "Phase 1",
    title: "Pilot a high-visibility, fast-ROI workflow",
    body: "We do not overhaul ERPs on day one. We pick one acute pain — harvest sequencing, dry-goods inventory, bottling-line scheduling — and prove the model against concrete KPIs in weeks.",
  },
  {
    step: "Phase 2",
    title: "Establish data hygiene the AI can stand on",
    body: "Generative and predictive models require clean, governed data. We break the silos between vineyard tracking, cellar management, and the financial ERP — with clear owners and auditable lineage.",
  },
  {
    step: "Phase 3",
    title: "Deploy edge-capable tools for cellar realities",
    body: "Subterranean caves and concrete walls kill connectivity. We deploy edge AI that captures voice, runs OCR, and queues data offline — syncing automatically when the network returns.",
  },
  {
    step: "Phase 4",
    title: "Cultivate an AI-literate workforce",
    body: "Adoption is the only ROI multiplier that compounds. We upskill cellar workers, viticulturists, and DTC teams to interpret model outputs, craft prompts, and supervise automated agents.",
  },
];

export function Playbook() {
  return (
    <section
      id="playbook"
      className="relative border-t border-white/[0.06] bg-[#050314] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(34,211,238,0.12),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-emerald-200/80">
              The playbook
            </span>
            <h2 className="text-balance mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Augment the craft. Don&apos;t replace it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Wineries fear that algorithms will compromise the artistry. The
              winemakers we work with end up with{" "}
              <span className="text-white">more</span> time on the crush pad —
              not less. Our role is to remove administrative burden and protect
              the biological integrity of the wine.
            </p>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm leading-6 text-white/75">
                &ldquo;Palmaz Vineyards&apos; FILCS analyzes ~3.5 million points
                of discrete temperature data per hour. We replicate and scale
                cyber-physical systems like that for producers who can&apos;t
                afford a sluggish fermentation.&rdquo;
              </p>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {PHASES.map((p, i) => (
              <li
                key={p.step}
                className="relative grid grid-cols-[auto,1fr] gap-6 pb-10 last:pb-0"
              >
                {i < PHASES.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-[15px] top-10 h-full w-px bg-gradient-to-b from-white/15 to-transparent"
                  />
                ) : null}
                <span
                  aria-hidden
                  className="relative mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#0a061f] text-[11px] font-semibold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    {p.step}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
