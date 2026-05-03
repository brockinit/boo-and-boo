type Phase = {
  step: string;
  title: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    step: "Phase I",
    title: "Pilot a high-visibility, fast-ROI workflow",
    body: "We do not overhaul ERPs on day one. We pick one acute pain — harvest sequencing, dry-goods inventory, bottling-line scheduling — and prove the model against concrete KPIs in weeks.",
  },
  {
    step: "Phase II",
    title: "Establish data hygiene the AI can stand on",
    body: "Generative and predictive models require clean, governed data. We break the silos between vineyard tracking, cellar management, and the financial ERP — with clear owners and auditable lineage.",
  },
  {
    step: "Phase III",
    title: "Deploy edge-capable tools for cellar realities",
    body: "Subterranean caves and concrete walls kill connectivity. We deploy edge AI that captures voice, runs OCR, and queues data offline — syncing automatically when the network returns.",
  },
  {
    step: "Phase IV",
    title: "Cultivate an AI-literate workforce",
    body: "Adoption is the only ROI multiplier that compounds. We upskill cellar workers, viticulturists, and DTC teams to interpret model outputs, craft prompts, and supervise automated agents.",
  },
];

export function Playbook() {
  return (
    <section
      id="playbook"
      className="paper-grain relative bg-parchment py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
              III. The playbook
            </p>
            <div className="mt-3 h-px w-12 bg-oxblood" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              Augment the craft.{" "}
              <em className="italic text-oxblood">Don&apos;t replace it.</em>
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              Wineries fear that algorithms will compromise the artistry. The
              winemakers we work with end up with{" "}
              <span className="text-oxblood">more</span> time on the crush
              pad — not less. Our role is to remove administrative burden and
              protect the biological integrity of the wine.
            </p>
          </div>
        </header>

        <div className="hairline mt-16" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ol className="space-y-12 lg:col-span-7">
            {PHASES.map((p, i) => (
              <li key={p.step} className="grid grid-cols-[80px,1fr] gap-6">
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                    {p.step}
                  </p>
                  <p className="font-display mt-2 text-5xl font-semibold leading-none text-oxblood/70">
                    0{i + 1}
                  </p>
                </div>
                <div className="border-l border-rule pl-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink-soft">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="lg:col-span-5">
            <div className="border border-ink/10 bg-cream p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage-deep">
                Field note
              </p>
              <p className="font-display mt-5 text-xl italic leading-relaxed text-ink">
                &ldquo;Palmaz Vineyards&apos; FILCS analyzes ~3.5 million
                points of discrete temperature data per hour. We replicate and
                scale cyber-physical systems like that for producers who
                cannot afford a sluggish fermentation.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-rule pt-5">
                <span
                  aria-hidden
                  className="inline-block h-1 w-8 bg-oxblood"
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                  Brix engagement principle
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
