// Editorial wine-atlas plate — a hand-drawn topographic vineyard survey
// rendered as still SVG. Deterministic geometry; no animation engine.

const ink = "#1f1814";
const sage = "#5f7351";
const sageSoft = "#8aa07a";
const oxblood = "#6b1e2a";
const amber = "#b3803a";
const water = "#8aa6b3";
const cream = "#faf4e5";

export function VineyardMapPlate() {
  return (
    <figure className="relative w-full">
      <div className="relative border border-ink/30 bg-cream p-3 shadow-[0_2px_24px_rgba(31,24,20,0.08)]">
        <div className="relative border border-oxblood/50">
          <svg
            viewBox="0 0 600 720"
            className="block h-auto w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-labelledby="plate-title plate-desc"
          >
            <title id="plate-title">
              Sonoma Valley vineyard survey — VineIQ Plate I
            </title>
            <desc id="plate-desc">
              A hand-drawn editorial topographic map showing vineyard blocks,
              contour lines, a meandering creek, and sensor markers.
            </desc>

            <defs>
              <pattern
                id="paper-grain"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <rect width="120" height="120" fill={cream} />
                <circle cx="20" cy="30" r="0.5" fill={ink} opacity="0.06" />
                <circle cx="60" cy="80" r="0.6" fill={ink} opacity="0.05" />
                <circle cx="95" cy="20" r="0.4" fill={ink} opacity="0.07" />
                <circle cx="40" cy="100" r="0.5" fill={ink} opacity="0.05" />
                <circle cx="100" cy="55" r="0.4" fill={ink} opacity="0.06" />
              </pattern>
              <pattern
                id="vine-rows"
                x="0"
                y="0"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="3"
                  x2="6"
                  y2="3"
                  stroke={sage}
                  strokeWidth="0.5"
                  opacity="0.65"
                />
              </pattern>
              <pattern
                id="vine-rows-tight"
                x="0"
                y="0"
                width="4.5"
                height="4.5"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="2.25"
                  x2="4.5"
                  y2="2.25"
                  stroke={sage}
                  strokeWidth="0.5"
                  opacity="0.7"
                />
              </pattern>
            </defs>

            <rect width="600" height="720" fill="url(#paper-grain)" />

            {/* — Header band — */}
            <g>
              <line
                x1="32"
                x2="568"
                y1="58"
                y2="58"
                stroke={ink}
                strokeWidth="0.7"
              />
              <line
                x1="32"
                x2="568"
                y1="62"
                y2="62"
                stroke={ink}
                strokeWidth="0.3"
              />
              <text
                x="32"
                y="40"
                fontFamily="ui-monospace, monospace"
                fontSize="9"
                letterSpacing="3"
                fill={oxblood}
              >
                PLATE I — AERIAL SURVEY
              </text>
              <text
                x="568"
                y="40"
                textAnchor="end"
                fontFamily="ui-monospace, monospace"
                fontSize="9"
                letterSpacing="3"
                fill={ink}
                opacity="0.7"
              >
                SONOMA VALLEY · 2026
              </text>
              <text
                x="300"
                y="86"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="22"
                fontStyle="italic"
                fill={ink}
              >
                Estate Atlas — Section IV.
              </text>
            </g>

            {/* — Coordinate ticks (frame edge) — */}
            <g
              fontFamily="ui-monospace, monospace"
              fontSize="7"
              fill={ink}
              opacity="0.55"
            >
              {[120, 220, 320, 420, 520].map((x) => (
                <g key={`tx-${x}`}>
                  <line
                    x1={x}
                    x2={x}
                    y1="105"
                    y2="110"
                    stroke={ink}
                    strokeWidth="0.4"
                  />
                  <line
                    x1={x}
                    x2={x}
                    y1="640"
                    y2="645"
                    stroke={ink}
                    strokeWidth="0.4"
                  />
                </g>
              ))}
              {[180, 280, 380, 480, 580].map((y) => (
                <g key={`ty-${y}`}>
                  <line
                    x1="32"
                    x2="40"
                    y1={y}
                    y2={y}
                    stroke={ink}
                    strokeWidth="0.4"
                  />
                  <line
                    x1="560"
                    x2="568"
                    y1={y}
                    y2={y}
                    stroke={ink}
                    strokeWidth="0.4"
                  />
                </g>
              ))}
              <text x="48" y="118">
                122.50°W
              </text>
              <text x="520" y="118">
                122.45°W
              </text>
            </g>

            {/* — Map frame — */}
            <rect
              x="40"
              y="110"
              width="520"
              height="540"
              fill="none"
              stroke={ink}
              strokeWidth="0.5"
              opacity="0.4"
            />

            {/* — Topographic contour lines (hills) — */}
            <g
              fill="none"
              stroke={sageSoft}
              strokeWidth="0.7"
              opacity="0.55"
            >
              <path d="M40,180 Q160,140 300,170 T560,160" />
              <path d="M40,210 Q160,170 300,200 T560,190" />
              <path d="M40,245 Q160,205 300,235 T560,225" />
              <path d="M40,285 Q160,250 300,280 T560,270" />
              <path d="M40,330 Q160,300 300,325 T560,320" />
            </g>

            {/* Eastern hills */}
            <g
              fill="none"
              stroke={sageSoft}
              strokeWidth="0.7"
              opacity="0.55"
            >
              <path d="M40,560 Q160,580 300,560 T560,570" />
              <path d="M40,590 Q160,610 300,592 T560,600" />
              <path d="M40,620 Q160,635 300,620 T560,628" />
            </g>

            {/* — Creek (water feature) — */}
            <g>
              <path
                d="M40,400 Q120,420 200,395 T360,420 T520,405 L560,410"
                fill="none"
                stroke={water}
                strokeWidth="2.4"
                opacity="0.65"
                strokeLinecap="round"
              />
              <path
                d="M40,400 Q120,420 200,395 T360,420 T520,405 L560,410"
                fill="none"
                stroke={water}
                strokeWidth="0.6"
                opacity="0.4"
              />
              <text
                x="100"
                y="392"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fontStyle="italic"
                fill={water}
                opacity="0.85"
              >
                Sonoma Creek
              </text>
            </g>

            {/* — Road — */}
            <g>
              <path
                d="M40,500 Q200,485 360,495 T560,488"
                fill="none"
                stroke={ink}
                strokeWidth="1.2"
                opacity="0.55"
              />
              <path
                d="M40,500 Q200,485 360,495 T560,488"
                fill="none"
                stroke={cream}
                strokeWidth="0.6"
                strokeDasharray="6 6"
              />
              <text
                x="450"
                y="478"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="8"
                fontStyle="italic"
                fill={ink}
                opacity="0.6"
              >
                Old Vineyard Rd.
              </text>
            </g>

            {/* — Vineyard blocks — */}
            {/* Block 04 — Cabernet Sauvignon */}
            <g>
              <path
                d="M80,225 L240,205 L260,310 L100,335 Z"
                fill="url(#vine-rows)"
                stroke={oxblood}
                strokeWidth="1.1"
                strokeDasharray="4 3"
              />
              <text
                x="170"
                y="260"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="11"
                fontStyle="italic"
                fontWeight="600"
                fill={ink}
              >
                Block 04
              </text>
              <text
                x="170"
                y="276"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fill={ink}
                opacity="0.75"
              >
                Cabernet Sauvignon · 18.4 ac
              </text>
            </g>

            {/* Block 07 — Chardonnay */}
            <g>
              <path
                d="M310,200 L500,215 L490,330 L320,320 Z"
                fill="url(#vine-rows-tight)"
                stroke={oxblood}
                strokeWidth="1.1"
                strokeDasharray="4 3"
              />
              <text
                x="405"
                y="258"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="11"
                fontStyle="italic"
                fontWeight="600"
                fill={ink}
              >
                Block 07
              </text>
              <text
                x="405"
                y="274"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fill={ink}
                opacity="0.75"
              >
                Chardonnay · 22.1 ac
              </text>
            </g>

            {/* Block 12 — Pinot Noir (lower) */}
            <g>
              <path
                d="M75,430 L260,420 L270,540 L85,545 Z"
                fill="url(#vine-rows)"
                stroke={oxblood}
                strokeWidth="1.1"
                strokeDasharray="4 3"
              />
              <text
                x="172"
                y="478"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="11"
                fontStyle="italic"
                fontWeight="600"
                fill={ink}
              >
                Block 12
              </text>
              <text
                x="172"
                y="494"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fill={ink}
                opacity="0.75"
              >
                Pinot Noir · 14.7 ac
              </text>
            </g>

            {/* Block 14 — Merlot */}
            <g>
              <path
                d="M320,440 L520,432 L510,555 L330,548 Z"
                fill="url(#vine-rows-tight)"
                stroke={oxblood}
                strokeWidth="1.1"
                strokeDasharray="4 3"
              />
              <text
                x="420"
                y="488"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="11"
                fontStyle="italic"
                fontWeight="600"
                fill={ink}
              >
                Block 14
              </text>
              <text
                x="420"
                y="504"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fill={ink}
                opacity="0.75"
              >
                Merlot · 19.6 ac
              </text>
            </g>

            {/* — Sensor markers (subtle hint at the technology) — */}
            {[
              [140, 280],
              [220, 248],
              [380, 250],
              [450, 290],
              [150, 480],
              [220, 510],
              [380, 470],
              [470, 510],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="4.5"
                  fill="none"
                  stroke={amber}
                  strokeWidth="0.7"
                />
                <circle cx={x} cy={y} r="1.4" fill={amber} />
              </g>
            ))}

            {/* — Estate marker — */}
            <g transform="translate(300, 380)">
              <circle r="9" fill={cream} stroke={oxblood} strokeWidth="1.4" />
              <circle r="3" fill={oxblood} />
              <text
                x="0"
                y="-16"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="11"
                fontStyle="italic"
                fontWeight="600"
                fill={ink}
              >
                Estate
              </text>
            </g>

            {/* — Compass rose (top-right of map) — */}
            <g transform="translate(515, 155)">
              <circle
                r="20"
                fill={cream}
                stroke={ink}
                strokeWidth="0.5"
                opacity="0.85"
              />
              <line
                x1="0"
                y1="-20"
                x2="0"
                y2="20"
                stroke={ink}
                strokeWidth="0.5"
              />
              <line
                x1="-20"
                y1="0"
                x2="20"
                y2="0"
                stroke={ink}
                strokeWidth="0.5"
              />
              <polygon points="0,-18 -3,0 0,-12 3,0" fill={oxblood} />
              <text
                x="0"
                y="-23"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="9"
                fontWeight="600"
                fill={ink}
              >
                N
              </text>
            </g>

            {/* — Scale bar — */}
            <g transform="translate(60, 605)">
              <line x1="0" y1="0" x2="80" y2="0" stroke={ink} strokeWidth="1" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke={ink} strokeWidth="1" />
              <line
                x1="40"
                y1="-3"
                x2="40"
                y2="3"
                stroke={ink}
                strokeWidth="1"
              />
              <line
                x1="80"
                y1="-3"
                x2="80"
                y2="3"
                stroke={ink}
                strokeWidth="1"
              />
              <text
                x="0"
                y="14"
                fontFamily="ui-monospace, monospace"
                fontSize="7"
                fill={ink}
                opacity="0.7"
              >
                0
              </text>
              <text
                x="40"
                y="14"
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="7"
                fill={ink}
                opacity="0.7"
              >
                ¼ mi
              </text>
              <text
                x="80"
                y="14"
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="7"
                fill={ink}
                opacity="0.7"
              >
                ½ mi
              </text>
            </g>

            {/* — Legend (bottom-right) — */}
            <g transform="translate(390, 590)">
              <rect
                width="160"
                height="50"
                fill={cream}
                stroke={ink}
                strokeWidth="0.4"
                opacity="0.95"
              />
              <text
                x="10"
                y="14"
                fontFamily="ui-monospace, monospace"
                fontSize="7"
                letterSpacing="2"
                fill={oxblood}
              >
                LEGEND
              </text>
              <g transform="translate(10, 24)">
                <line
                  x1="0"
                  y1="0"
                  x2="14"
                  y2="0"
                  stroke={oxblood}
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                <text
                  x="20"
                  y="2.5"
                  fontFamily="Fraunces, Georgia, serif"
                  fontSize="8"
                  fontStyle="italic"
                  fill={ink}
                >
                  block boundary
                </text>
              </g>
              <g transform="translate(10, 36)">
                <circle
                  cx="7"
                  cy="0"
                  r="3"
                  fill="none"
                  stroke={amber}
                  strokeWidth="0.7"
                />
                <circle cx="7" cy="0" r="1" fill={amber} />
                <text
                  x="20"
                  y="2.5"
                  fontFamily="Fraunces, Georgia, serif"
                  fontSize="8"
                  fontStyle="italic"
                  fill={ink}
                >
                  IoT sensor
                </text>
              </g>
            </g>

            {/* — Footer band — */}
            <line
              x1="32"
              x2="568"
              y1="678"
              y2="678"
              stroke={ink}
              strokeWidth="0.3"
            />
            <line
              x1="32"
              x2="568"
              y1="682"
              y2="682"
              stroke={ink}
              strokeWidth="0.7"
            />
            <text
              x="32"
              y="702"
              fontFamily="ui-monospace, monospace"
              fontSize="8"
              letterSpacing="2"
              fill={ink}
              opacity="0.7"
            >
              VINEIQ FIELD STUDY
            </text>
            <text
              x="568"
              y="702"
              textAnchor="end"
              fontFamily="Fraunces, Georgia, serif"
              fontSize="9"
              fontStyle="italic"
              fill={ink}
              opacity="0.7"
            >
              74.8 acres surveyed · 4 blocks · 8 sensors
            </text>
          </svg>
        </div>
      </div>
    </figure>
  );
}
