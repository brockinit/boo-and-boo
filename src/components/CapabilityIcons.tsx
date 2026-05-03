// Custom SVG illustrations for the capability cards.
// These are intentionally lightweight, on-brand alternatives to stock photos.

const baseProps = {
  viewBox: "0 0 200 140",
  className: "h-full w-full",
  preserveAspectRatio: "xMidYMid slice",
  "aria-hidden": true,
} as const;

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#1b0d3a" />
        <stop offset="100%" stopColor="#050314" />
      </radialGradient>
    </defs>
  );
}

export function ForecastIllustration() {
  return (
    <svg {...baseProps}>
      <Defs id="fc" />
      <rect width="200" height="140" fill="url(#fc-bg)" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          x2="200"
          y1={20 + i * 16}
          y2={20 + i * 16}
          stroke="#ffffff"
          strokeOpacity="0.05"
        />
      ))}
      <path
        d="M0,110 L25,95 L50,100 L75,72 L100,80 L125,55 L150,60 L175,38 L200,30"
        fill="none"
        stroke="url(#fc-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0,110 L25,95 L50,100 L75,72 L100,80 L125,55 L150,60 L175,38 L200,30 L200,140 L0,140 Z"
        fill="url(#fc-stroke)"
        opacity="0.12"
      />
      {[
        [25, 95],
        [75, 72],
        [125, 55],
        [175, 38],
      ].map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="3"
          fill="#a5f3fc"
          stroke="#050314"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

export function CellarIllustration() {
  return (
    <svg {...baseProps}>
      <Defs id="ce" />
      <rect width="200" height="140" fill="url(#ce-bg)" />
      {[40, 100, 160].map((cx) => (
        <g key={cx}>
          <ellipse
            cx={cx}
            cy={36}
            rx="22"
            ry="6"
            fill="#0a061f"
            stroke="url(#ce-stroke)"
            strokeWidth="1.2"
          />
          <path
            d={`M${cx - 22},36 L${cx - 22},108 Q${cx - 22},120 ${cx - 10},120 L${cx + 10},120 Q${cx + 22},120 ${cx + 22},108 L${cx + 22},36`}
            fill="#0a061f"
            stroke="url(#ce-stroke)"
            strokeWidth="1.2"
          />
          <rect
            x={cx - 16}
            y={48 + (cx % 13)}
            width="32"
            height={64 - (cx % 13)}
            fill="url(#ce-stroke)"
            opacity="0.18"
          />
          <line
            x1={cx + 22}
            x2={cx + 30}
            y1="70"
            y2="70"
            stroke="url(#ce-stroke)"
            strokeWidth="1.2"
          />
          <circle cx={cx + 33} cy="70" r="2" fill="#34d399" />
        </g>
      ))}
      <path
        d="M0,128 L200,128"
        stroke="#ffffff"
        strokeOpacity="0.06"
        strokeWidth="1"
      />
    </svg>
  );
}

export function VineyardIllustration() {
  return (
    <svg {...baseProps}>
      <Defs id="vi" />
      <rect width="200" height="140" fill="url(#vi-bg)" />
      {Array.from({ length: 6 }).map((_, row) => (
        <path
          key={row}
          d={`M${-40 + row * 20},${50 + row * 14} L${260 + row * 6},${50 + row * 14}`}
          stroke="url(#vi-stroke)"
          strokeWidth="0.8"
          strokeOpacity={0.55 - row * 0.07}
          strokeDasharray="2 6"
        />
      ))}
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 14 + (i % 9) * 22;
        const y = 60 + Math.floor(i / 9) * 24;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.4"
            fill="#a5f3fc"
            opacity="0.85"
          />
        );
      })}
      <circle
        cx="160"
        cy="40"
        r="22"
        fill="none"
        stroke="url(#vi-stroke)"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <circle
        cx="160"
        cy="40"
        r="14"
        fill="none"
        stroke="url(#vi-stroke)"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <circle cx="160" cy="40" r="3" fill="#34d399" />
    </svg>
  );
}

export function SchedulingIllustration() {
  return (
    <svg {...baseProps}>
      <Defs id="sc" />
      <rect width="200" height="140" fill="url(#sc-bg)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          <rect
            x="20"
            y={20 + i * 20}
            width="160"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.04"
          />
          <rect
            x={28 + (i * 17) % 60}
            y={20 + i * 20}
            width={50 + (i * 19) % 70}
            height="10"
            rx="3"
            fill="url(#sc-stroke)"
            opacity={0.85 - i * 0.12}
          />
        </g>
      ))}
      <line
        x1="92"
        x2="92"
        y1="14"
        y2="126"
        stroke="#f0abfc"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.7"
      />
    </svg>
  );
}

export function NetworkIllustration() {
  const nodes: Array<[number, number]> = [
    [40, 40],
    [100, 28],
    [160, 50],
    [60, 90],
    [130, 100],
    [100, 70],
  ];
  return (
    <svg {...baseProps}>
      <Defs id="nw" />
      <rect width="200" height="140" fill="url(#nw-bg)" />
      {nodes.flatMap((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a[0]}
            y1={a[1]}
            x2={b[0]}
            y2={b[1]}
            stroke="url(#nw-stroke)"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#0a061f" stroke="url(#nw-stroke)" />
          <circle cx={x} cy={y} r="2" fill="#a5f3fc" />
        </g>
      ))}
    </svg>
  );
}
