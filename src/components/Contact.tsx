import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="paper-grain relative bg-parchment py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
              V. Begin a conversation
            </p>
            <div className="mt-3 h-px w-12 bg-oxblood" />
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              One pain point. One pilot.{" "}
              <em className="italic text-oxblood">Measurable in weeks.</em>
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              Tell us where margin is leaking. We will come back with a scoped,
              fast-ROI pilot — not a slide deck.
            </p>
          </div>
        </header>

        <div className="hairline mt-16" />

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <aside className="space-y-10 lg:col-span-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                Where we work
              </p>
              <p className="font-display mt-3 text-xl text-ink">
                Santa Rosa &nbsp;·&nbsp; Napa &nbsp;·&nbsp; Sonoma
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Remote across California wine country
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                Direct
              </p>
              <a
                href="mailto:partners@brix.ai"
                className="font-display mt-3 block text-xl text-oxblood underline-offset-4 hover:underline"
              >
                partners@brix.ai
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
                Typical engagement
              </p>
              <ul className="mt-3 space-y-1 text-sm text-ink">
                <li>4–8 week pilot</li>
                <li>6–12 month build</li>
                <li>Ongoing model stewardship</li>
              </ul>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="font-display text-base italic leading-relaxed text-ink-soft">
                We respond to every qualified inquiry personally. There is no
                sales funnel.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="border border-ink/15 bg-cream p-8 shadow-[0_2px_24px_rgba(31,24,20,0.06)] sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
