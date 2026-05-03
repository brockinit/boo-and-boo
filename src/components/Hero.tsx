import { VineyardMapPlate } from "@/components/VineyardMapPlate";

export function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative w-full overflow-hidden"
    >
      {/* Vineyard-AI background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/vineyard-ai-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Parchment veil — preserves editorial legibility */}
      <div className="absolute inset-0 z-0 bg-parchment" style={{ opacity: 0.82 }} />
      {/* Top label band — runs full width above content */}
      <div className="relative z-10 border-b border-rule">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 pt-24 sm:pt-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-oxblood">
            Brix — Quarterly · No. 1
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-ink/60 sm:block">
            Napa · Sonoma · Spring 2026
          </p>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage-deep">
            A monograph for the wineries of California
          </p>

          <h1 className="font-display mt-7 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[5.25rem]">
            AI for the wineries of{" "}
            <em className="italic text-oxblood">Napa & Sonoma</em>.
          </h1>

          <div className="mt-10 max-w-xl border-l-2 border-oxblood pl-6">
            <p className="text-pretty text-lg leading-8 text-ink-soft">
              We turn fragmented vineyard, cellar, and direct-to-consumer data
              into the operating intelligence enterprise producers need to
              protect margin through California&apos;s reckoning.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition hover:bg-oxblood"
            >
              Request a discovery call
            </a>
            <a
              href="#capabilities"
              className="border border-ink/40 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition hover:border-ink hover:bg-ink/5"
            >
              Read the playbook
            </a>
          </div>

          <div className="mt-12 border-t border-rule pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-mute">
              In this issue
            </p>
            <ol className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink-soft">
              {[
                ["I.", "The reckoning", "#reckoning"],
                ["II.", "Five workflows", "#capabilities"],
                ["III.", "The playbook", "#playbook"],
                ["IV.", "Who we serve", "#segment"],
                ["V.", "Begin a conversation", "#contact"],
              ].map(([num, label, href]) => (
                <li key={href} className="flex items-baseline gap-3">
                  <span className="font-display text-oxblood">{num}</span>
                  <a
                    href={href}
                    className="border-b border-transparent transition hover:border-oxblood"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex items-center lg:col-span-6">
          <VineyardMapPlate />
        </div>
      </div>

      {/* Bottom hairline transition */}
      <div className="hairline" />
    </section>
  );
}
