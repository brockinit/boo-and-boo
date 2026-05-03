import { VineGraphic } from "@/components/VineGraphic";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <VineGraphic />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-b from-transparent to-[#050314]"
      />

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-white/70 backdrop-blur">
          Napa · Sonoma · Santa Rosa
        </span>

        <h1 className="vine-wordmark font-sans text-6xl font-bold tracking-tight text-white sm:text-8xl">
          <span
            style={{
              background: "linear-gradient(135deg,#ede9fe 0%,#a5f3fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vine
          </span>
          <span
            style={{
              background: "linear-gradient(135deg,#22d3ee 0%,#34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            IQ
          </span>
        </h1>

        <p className="text-balance max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
          AI workflows for the wineries surviving California&apos;s reckoning.
          We turn fragmented vineyard, cellar, and DTC data into the operating
          intelligence enterprise producers need to protect margin.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-[0_0_24px_rgba(165,243,252,0.4)] transition hover:bg-cyan-100"
          >
            Book a discovery call
          </a>
          <a
            href="#capabilities"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            See where we move the needle
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.28em] text-white/45">
          <span>Predictive yield</span>
          <span aria-hidden>·</span>
          <span>Fermentation intelligence</span>
          <span aria-hidden>·</span>
          <span>Precision viticulture</span>
          <span aria-hidden>·</span>
          <span>DTC personalization</span>
        </div>
      </div>
    </section>
  );
}
