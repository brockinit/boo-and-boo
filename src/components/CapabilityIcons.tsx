// Editorial ink-on-parchment illustrations for the capability cards.
// All deterministic — no random/Date inputs — so SSR and CSR match.

const baseProps = {
  viewBox: "0 0 200 140",
  className: "h-full w-full",
  preserveAspectRatio: "xMidYMid slice",
  "aria-hidden": true,
} as const;

const ink = "#1f1814";
const sage = "#5f7351";
const oxblood = "#6b1e2a";
const amber = "#b3803a";
const rule = "#c9bda4";

function Background({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern
          id={`${id}-paper`}
          x="0"
          y="0"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="14" height="14" fill="#faf4e5" />
          <circle cx="2" cy="3" r="0.4" fill={rule} opacity="0.4" />
          <circle cx="9" cy="8" r="0.4" fill={rule} opacity="0.3" />
          <circle cx="13" cy="2" r="0.3" fill={rule} opacity="0.35" />
        </pattern>
      </defs>
      <rect width="200" height="140" fill={`url(#${id}-paper)`} />
    </>
  );
}

export function ForecastIllustration() {
  return (
    <svg {...baseProps}>
      <Background id="fc" />
      {/* axes */}
      <line x1="20" y1="120" x2="184" y2="120" stroke={ink} strokeWidth="0.6" />
      <line x1="20" y1="20" x2="20" y2="120" stroke={ink} strokeWidth="0.6" />
      {/* y-tick labels */}
      {["100", "75", "50", "25"].map((t, i) => (
        <g key={t}>
          <line
            x1="18"
            x2="20"
            y1={28 + i * 24}
            y2={28 + i * 24}
            stroke={ink}
            strokeWidth="0.5"
          />
          <text
            x="14"
            y={31 + i * 24}
            fontFamily="serif"
            fontSize="6"
            fill={ink}
            textAnchor="end"
          >
            {t}
          </text>
        </g>
      ))}
      {/* historical */}
      <path
        d="M28,90 L48,82 L68,86 L88,72 L108,76 L128,68"
        fill="none"
        stroke={ink}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* forecast (oxblood, dashed) */}
      <path
        d="M128,68 L148,52 L168,42 L184,30"
        fill="none"
        stroke={oxblood}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      {/* confidence band */}
      <path
        d="M128,68 L148,46 L168,32 L184,18 L184,42 L168,52 L148,58 L128,68 Z"
        fill={oxblood}
        opacity="0.08"
      />
      {[28, 48, 68, 88, 108, 128].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={[90, 82, 86, 72, 76, 68][i]}
          r="1.6"
          fill={ink}
        />
      ))}
      <text
        x="184"
        y="14"
        fontFamily="serif"
        fontSize="6"
        fill={oxblood}
        textAnchor="end"
        fontStyle="italic"
      >
        forecast
      </text>
      <text
        x="20"
        y="135"
        fontFamily="serif"
        fontSize="6"
        fill={ink}
        opacity="0.6"
      >
        Q1 — Q4 depletion velocity
      </text>
    </svg>
  );
}

export function CellarIllustration() {
  return (
    <svg {...baseProps}>
      <Background id="ce" />
      {/* three barrels in cellar elevation */}
      {[40, 100, 160].map((cx) => (
        <g key={cx}>
          {/* barrel body */}
          <ellipse
            cx={cx}
            cy={48}
            rx="22"
            ry="6"
            fill="none"
            stroke={ink}
            strokeWidth="0.8"
          />
          <path
            d={`M${cx - 22},48 Q${cx - 28},78 ${cx - 22},108 L${cx + 22},108 Q${cx + 28},78 ${cx + 22},48`}
            fill="#faf4e5"
            stroke={ink}
            strokeWidth="0.9"
          />
          {/* hoops */}
          {[58, 78, 98].map((y) => (
            <path
              key={y}
              d={`M${cx - (y === 78 ? 27 : 25)},${y} Q${cx},${y + 1.5} ${cx + (y === 78 ? 27 : 25)},${y}`}
              fill="none"
              stroke={ink}
              strokeWidth="0.6"
            />
          ))}
          {/* wood grain */}
          <path
            d={`M${cx - 18},58 Q${cx},60 ${cx + 18},58`}
            fill="none"
            stroke={ink}
            strokeWidth="0.3"
            opacity="0.4"
          />
          <path
            d={`M${cx - 16},88 Q${cx},90 ${cx + 16},88`}
            fill="none"
            stroke={ink}
            strokeWidth="0.3"
            opacity="0.4"
          />
          {/* sensor probe */}
          <line
            x1={cx + 22}
            y1="78"
            x2={cx + 32}
            y2="78"
            stroke={oxblood}
            strokeWidth="0.6"
          />
          <circle cx={cx + 33} cy="78" r="1.6" fill={amber} />
        </g>
      ))}
      {/* cellar floor */}
      <line
        x1="10"
        x2="190"
        y1="120"
        y2="120"
        stroke={ink}
        strokeWidth="0.5"
      />
      <line
        x1="10"
        x2="190"
        y1="124"
        y2="124"
        stroke={ink}
        strokeWidth="0.3"
        opacity="0.4"
      />
      <text
        x="100"
        y="135"
        fontFamily="serif"
        fontSize="6"
        fill={ink}
        opacity="0.6"
        textAnchor="middle"
        fontStyle="italic"
      >
        elevation · barrel hall · sensor array
      </text>
    </svg>
  );
}

export function VineyardIllustration() {
  return (
    <svg {...baseProps}>
      <Background id="vi" />
      {/* topographic contour lines (hills) */}
      {[
        "M10,40 Q60,20 110,40 T200,38",
        "M0,55 Q50,35 110,55 T200,52",
        "M-10,72 Q40,52 100,70 T210,68",
        "M-20,90 Q40,72 110,90 T220,88",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={sage}
          strokeWidth="0.6"
          opacity={0.7 - i * 0.1}
        />
      ))}
      {/* vine row hatching */}
      {Array.from({ length: 22 }).map((_, i) => {
        const y = 60 + i * 3.5;
        return (
          <line
            key={i}
            x1="20"
            x2="180"
            y1={y}
            y2={y + 1}
            stroke={sage}
            strokeWidth="0.5"
            opacity="0.55"
          />
        );
      })}
      {/* block boundaries (oxblood) */}
      <path
        d="M40,95 L40,135 L90,135 L90,95"
        fill="none"
        stroke={oxblood}
        strokeWidth="0.7"
        strokeDasharray="3 2"
      />
      <path
        d="M115,90 L115,135 L165,135 L165,88"
        fill="none"
        stroke={oxblood}
        strokeWidth="0.7"
        strokeDasharray="3 2"
      />
      {/* block labels */}
      <text
        x="65"
        y="115"
        fontFamily="serif"
        fontSize="6"
        fill={ink}
        textAnchor="middle"
        fontStyle="italic"
      >
        Block 04
      </text>
      <text
        x="140"
        y="113"
        fontFamily="serif"
        fontSize="6"
        fill={ink}
        textAnchor="middle"
        fontStyle="italic"
      >
        Block 07
      </text>
      {/* IoT sensor markers */}
      {[
        [55, 105],
        [78, 122],
        [128, 100],
        [152, 120],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill="none" stroke={amber} />
          <circle cx={x} cy={y} r="1" fill={amber} />
        </g>
      ))}
      {/* compass tick */}
      <g transform="translate(178, 18)">
        <line x1="0" y1="0" x2="0" y2="-10" stroke={ink} strokeWidth="0.5" />
        <text
          x="0"
          y="-12"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="6"
          fill={ink}
        >
          N
        </text>
      </g>
    </svg>
  );
}

export function SchedulingIllustration() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <svg {...baseProps}>
      <Background id="sc" />
      {/* calendar grid */}
      {days.map((d, i) => (
        <g key={i}>
          <text
            x={28 + i * 22}
            y="22"
            fontFamily="serif"
            fontSize="7"
            fill={ink}
            textAnchor="middle"
          >
            {d}
          </text>
          <line
            x1={18 + i * 22}
            x2={18 + i * 22}
            y1="28"
            y2="118"
            stroke={rule}
            strokeWidth="0.5"
          />
        </g>
      ))}
      <line
        x1={18 + 7 * 22}
        x2={18 + 7 * 22}
        y1="28"
        y2="118"
        stroke={rule}
        strokeWidth="0.5"
      />
      {[28, 50, 72, 94, 118].map((y) => (
        <line
          key={y}
          x1="18"
          x2={18 + 7 * 22}
          y1={y}
          y2={y}
          stroke={rule}
          strokeWidth="0.4"
        />
      ))}
      {/* harvest blocks */}
      <rect x="20" y="30" width="42" height="18" fill={sage} opacity="0.7" />
      <rect x="64" y="52" width="64" height="18" fill={oxblood} opacity="0.7" />
      <rect x="86" y="74" width="42" height="18" fill={amber} opacity="0.7" />
      <rect x="130" y="96" width="42" height="18" fill={sage} opacity="0.55" />
      {/* labels */}
      <text x="41" y="42" fontFamily="serif" fontSize="6" fill="#faf4e5" textAnchor="middle" fontStyle="italic">Block 4</text>
      <text x="96" y="64" fontFamily="serif" fontSize="6" fill="#faf4e5" textAnchor="middle" fontStyle="italic">Pick crew A</text>
      <text x="107" y="86" fontFamily="serif" fontSize="6" fill="#faf4e5" textAnchor="middle" fontStyle="italic">Bottling</text>
      {/* annotation arrow */}
      <path
        d="M148,38 Q132,28 120,52"
        fill="none"
        stroke={oxblood}
        strokeWidth="0.5"
      />
      <text
        x="150"
        y="36"
        fontFamily="serif"
        fontSize="5.5"
        fill={oxblood}
        fontStyle="italic"
      >
        ripeness window
      </text>
    </svg>
  );
}

export function NetworkIllustration() {
  const nodes: Array<[number, number, string]> = [
    [40, 36, "ERP"],
    [100, 24, "GIS"],
    [160, 38, "POS"],
    [50, 90, "Cellar"],
    [150, 92, "DTC"],
    [100, 70, "Brix"],
  ];
  return (
    <svg {...baseProps}>
      <Background id="nw" />
      {/* connections */}
      {nodes.flatMap((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a[0]}
            y1={a[1]}
            x2={b[0]}
            y2={b[1]}
            stroke={sage}
            strokeWidth="0.4"
            opacity="0.55"
          />
        )),
      )}
      {/* nodes */}
      {nodes.map(([x, y, label], i) => {
        const isHub = label === "Brix";
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={isHub ? 10 : 6}
              fill="#faf4e5"
              stroke={isHub ? oxblood : ink}
              strokeWidth={isHub ? "1" : "0.7"}
            />
            <circle cx={x} cy={y} r={isHub ? 3 : 1.6} fill={isHub ? oxblood : ink} />
            <text
              x={x}
              y={y + (isHub ? 22 : 18)}
              fontFamily="serif"
              fontSize={isHub ? "7" : "6"}
              fill={ink}
              textAnchor="middle"
              fontStyle={isHub ? "normal" : "italic"}
              fontWeight={isHub ? "600" : "400"}
            >
              {label}
            </text>
          </g>
        );
      })}
      <text
        x="100"
        y="135"
        fontFamily="serif"
        fontSize="6"
        fill={ink}
        opacity="0.6"
        textAnchor="middle"
        fontStyle="italic"
      >
        unified data lake · ERP · GIS · POS · cellar · DTC
      </text>
    </svg>
  );
}
