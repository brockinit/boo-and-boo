import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-[#050314] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,rgba(167,139,250,0.18),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-cyan-200/80">
            Start a conversation
          </span>
          <h2 className="text-balance mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            One pain point. One pilot. Measurable in weeks.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Tell us where margin is leaking. We&apos;ll come back with a
            scoped, fast-ROI pilot — not a slide deck.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Where we work
              </dt>
              <dd className="mt-2 text-white/80">
                Santa Rosa · Napa · Sonoma · remote across CA wine country
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Direct
              </dt>
              <dd className="mt-2 text-white/80">
                <a
                  href="mailto:partners@vineiq.ai"
                  className="underline-offset-4 hover:underline"
                >
                  partners@vineiq.ai
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Typical engagement
              </dt>
              <dd className="mt-2 text-white/80">
                4–8 week pilot · 6–12 month build · ongoing model stewardship
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
