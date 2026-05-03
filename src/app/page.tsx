import { VineGraphic } from "@/components/VineGraphic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <VineGraphic />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-white/70 backdrop-blur">
          Intelligence · Growth · Signal
        </span>

        <h1 className="vine-wordmark font-sans text-7xl font-bold tracking-tight text-white sm:text-[9rem]">
          <span
            style={{
              background:
                "linear-gradient(135deg,#ede9fe 0%,#a5f3fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vine
          </span>
          <span
            style={{
              background:
                "linear-gradient(135deg,#22d3ee 0%,#34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            IQ
          </span>
        </h1>

        <p className="max-w-md text-base leading-7 text-white/70 sm:text-lg">
          A living network of insight. Cultivated by data, refined by
          intelligence.
        </p>

        <div className="mt-2 flex items-center gap-3">
          <a
            href="#"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-[0_0_24px_rgba(165,243,252,0.4)] transition hover:bg-cyan-100"
          >
            Enter the network
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </main>
  );
}
