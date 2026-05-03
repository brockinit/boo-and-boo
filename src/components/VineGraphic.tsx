"use client";

import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

type RingDef = { radius: number; count: number; speed: number; dir: 1 | -1 };

const RINGS: RingDef[] = [
  { radius: 110, count: 6, speed: 6, dir: 1 },
  { radius: 180, count: 12, speed: 4, dir: -1 },
  { radius: 260, count: 18, speed: 3, dir: 1 },
  { radius: 350, count: 24, speed: 2, dir: -1 },
  { radius: 450, count: 32, speed: 1.4, dir: 1 },
];

type Particle = {
  id: number;
  angle: number;
  radius: number;
  delay: number;
  duration: number;
};

function makeRingPath(count: number, radius: number): string {
  const points = d3.range(count).map<[number, number, number]>((i) => {
    const angle = (i / count) * Math.PI * 2;
    return [angle, Math.cos(angle) * radius, Math.sin(angle) * radius];
  });
  const data = points.map(([, x, y]) => ({ x, y }));
  data.push(data[0]);
  const line = d3
    .line<{ x: number; y: number }>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveCardinalClosed.tension(0.35));
  return line(data) ?? "";
}

function makeSpokes(
  innerRadius: number,
  outerRadius: number,
  count: number,
): { d: string; angle: number }[] {
  return d3.range(count).map((i) => {
    const angle = (i / count) * Math.PI * 2;
    const x1 = Math.cos(angle) * innerRadius;
    const y1 = Math.sin(angle) * innerRadius;
    const x2 = Math.cos(angle) * outerRadius;
    const y2 = Math.sin(angle) * outerRadius;
    const cx = Math.cos(angle + 0.18) * (innerRadius + outerRadius) * 0.5;
    const cy = Math.sin(angle + 0.18) * (innerRadius + outerRadius) * 0.5;
    return { d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, angle };
  });
}

export function VineGraphic() {
  const ringsRef = useRef<SVGGElement>(null);

  const spokes = useMemo(() => makeSpokes(110, 450, 16), []);

  const particles = useMemo<Particle[]>(() => {
    const rng = d3.randomLcg(42);
    return d3.range(40).map((i) => ({
      id: i,
      angle: rng() * Math.PI * 2,
      radius: 130 + rng() * 320,
      delay: rng() * 6,
      duration: 4 + rng() * 4,
    }));
  }, []);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const dt = (t - start) / 1000;
      const groups =
        ringsRef.current?.querySelectorAll<SVGGElement>("[data-ring-index]");
      groups?.forEach((g) => {
        const i = Number(g.dataset.ringIndex);
        const ring = RINGS[i];
        if (!ring) return;
        const angle = ring.dir * ring.speed * dt;
        g.setAttribute("transform", `rotate(${angle})`);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      viewBox="-500 -500 1000 1000"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vine-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1b0d3a" />
          <stop offset="55%" stopColor="#0a061f" />
          <stop offset="100%" stopColor="#020107" />
        </radialGradient>
        <linearGradient
          id="vine-stroke"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient
          id="vine-wordmark-fill"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
        <linearGradient
          id="vine-iq-fill"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <filter id="vine-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="vine-soft-glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect x="-500" y="-500" width="1000" height="1000" fill="url(#vine-bg)" />

      <g opacity="0.55">
        {spokes.map((s, i) => (
          <path
            key={i}
            d={s.d}
            fill="none"
            stroke="url(#vine-stroke)"
            strokeWidth="0.8"
            strokeOpacity="0.35"
            className="vine-pulse"
            style={{ animationDelay: `${(i * 0.18) % 4}s` }}
          />
        ))}
      </g>

      <g ref={ringsRef}>
        {RINGS.map((ring, i) => {
          const path = makeRingPath(ring.count, ring.radius);
          const points = d3.range(ring.count).map((j) => {
            const angle = (j / ring.count) * Math.PI * 2;
            return [
              Math.cos(angle) * ring.radius,
              Math.sin(angle) * ring.radius,
            ] as const;
          });
          return (
            <g key={i} data-ring-index={i}>
              <path
                d={path}
                fill="none"
                stroke="url(#vine-stroke)"
                strokeWidth="1.1"
                strokeOpacity="0.45"
                filter="url(#vine-glow)"
              />
              <path
                d={path}
                fill="none"
                stroke="url(#vine-stroke)"
                strokeWidth="1.6"
                strokeOpacity="0.9"
                className="vine-dash"
                style={{ animationDuration: `${10 + i * 2}s` }}
              />
              {points.map(([x, y], j) => (
                <circle
                  key={j}
                  cx={x}
                  cy={y}
                  r={i === 0 ? 3.2 : 1.8}
                  fill={i === 0 ? "#f0abfc" : "#a5f3fc"}
                  filter="url(#vine-glow)"
                  className="vine-pulse"
                  style={{ animationDelay: `${(j * 0.13) % 4}s` }}
                />
              ))}
            </g>
          );
        })}
      </g>

      <g>
        {particles.map((p) => {
          const x = Math.cos(p.angle) * p.radius;
          const y = Math.sin(p.angle) * p.radius;
          return (
            <circle
              key={p.id}
              cx={x}
              cy={y}
              r="1.6"
              fill="#e9d5ff"
              filter="url(#vine-glow)"
              className="vine-pulse"
              style={{
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          );
        })}
      </g>

      <circle
        cx="0"
        cy="0"
        r="95"
        fill="#02010a"
        opacity="0.85"
        filter="url(#vine-soft-glow)"
      />
      <circle
        cx="0"
        cy="0"
        r="80"
        fill="none"
        stroke="url(#vine-stroke)"
        strokeWidth="1"
        strokeOpacity="0.6"
        className="vine-pulse"
      />
    </svg>
  );
}
