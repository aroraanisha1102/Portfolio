"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { stops } from "@/lib/data";

const W = 1000;
const H = 560;

function arcPath(
  a: { x: number; y: number },
  b: { x: number; y: number }
) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const lift = Math.min(180, dist * 0.28 + 26);
  return `M ${a.x} ${a.y} Q ${mx} ${my - lift} ${b.x} ${b.y}`;
}

export default function JourneyMap({ active }: { active: number }) {
  const px = useMotionValue(stops[0].x);
  const py = useMotionValue(stops[0].y);
  const rot = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const srot = useSpring(rot, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const cur = stops[active];
    const prev = stops[Math.max(0, active - 1)];
    px.set(cur.x);
    py.set(cur.y);
    if (active > 0) {
      const angle = (Math.atan2(cur.y - prev.y, cur.x - prev.x) * 180) / Math.PI;
      rot.set(angle);
    }
  }, [active, px, py, rot]);

  const firstOfRegion = new Set<number>();
  const seen = new Set<string>();
  stops.forEach((s, i) => {
    if (!seen.has(s.region)) {
      seen.add(s.region);
      firstOfRegion.add(i);
    }
  });

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-ink-soft/80 p-3 shadow-2xl shadow-black/40">
      <div className="dotgrid absolute inset-0 opacity-40" />
      {/* soft continent hints */}
      <div className="pointer-events-none absolute left-[6%] top-[18%] h-40 w-56 rounded-full bg-indigo/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[30%] h-44 w-52 rounded-full bg-cyan/10 blur-3xl" />

      <svg viewBox={`0 0 ${W} ${H}`} className="relative w-full" role="img" aria-label="Career journey map from India to New York to Atlanta">
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint latitude lines */}
        {[120, 240, 360, 480].map((y) => (
          <line key={y} x1="30" x2={W - 30} y1={y} y2={y} stroke="#1c2436" strokeWidth="1" strokeDasharray="2 10" />
        ))}

        {/* segments */}
        {stops.slice(0, -1).map((s, i) => {
          const d = arcPath(s, stops[i + 1]);
          const reached = active >= i + 1;
          return (
            <g key={s.id}>
              <path d={d} fill="none" stroke="#26304a" strokeWidth="2" strokeDasharray="4 9" />
              <motion.path
                d={d}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: reached ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>
          );
        })}

        {/* pins */}
        {stops.map((s, i) => {
          const visited = i <= active;
          const isActive = i === active;
          return (
            <g key={s.id} transform={`translate(${s.x} ${s.y})`}>
              {isActive && <circle r="34" fill="url(#pinGlow)" />}
              {isActive && (
                <circle r="10" fill="none" stroke="#6366f1" strokeWidth="2">
                  <animate attributeName="r" from="8" to="26" dur="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.7" to="0" dur="1.6s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                r={isActive ? 8 : 6}
                fill={visited ? "#e6ebff" : "#0e1320"}
                stroke={visited ? "#6366f1" : "#334063"}
                strokeWidth="2.5"
                className="transition-all"
              />
              {firstOfRegion.has(i) && (
                <text
                  x="0"
                  y="-22"
                  textAnchor="middle"
                  fill={visited ? "#eef1f8" : "#8a94ad"}
                  fontSize="18"
                  fontWeight="600"
                >
                  {s.region}
                </text>
              )}
            </g>
          );
        })}

        {/* plane */}
        <motion.g style={{ x: sx, y: sy, rotate: srot }} filter="url(#soft)">
          <g transform="translate(-11 -11)">
            <path
              d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"
              fill="#22d3ee"
              stroke="#eef1f8"
              strokeWidth="0.6"
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
