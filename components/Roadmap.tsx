"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { stops, type Stop } from "@/lib/data";

const accentText: Record<Stop["accent"], string> = {
  coral: "text-coral",
  amber: "text-amber",
  teal: "text-teal",
  indigo: "text-indigo",
  berry: "text-berry",
};
const accentBorder: Record<Stop["accent"], string> = {
  coral: "border-coral",
  amber: "border-amber",
  teal: "border-teal",
  indigo: "border-indigo",
  berry: "border-berry",
};
const accentHex: Record<Stop["accent"], string> = {
  coral: "#e4572e",
  amber: "#eaa221",
  teal: "#1f9e8f",
  indigo: "#4a56d6",
  berry: "#cb437c",
};

const W = 1000;
const H = 520;

// Geographic-ish positions on the map canvas, in stop (chronological) order
const MAP: Record<string, { x: number; y: number; region: string; city: string }> = {
  hpe: { x: 842, y: 250, region: "India", city: "Bengaluru, India" },
  salesforce: { x: 796, y: 300, region: "India", city: "Mumbai, India" },
  nyu: { x: 300, y: 150, region: "New York", city: "New York, NY" },
  creddnet: { x: 258, y: 126, region: "New York", city: "New York, NY" },
  reframe: { x: 238, y: 300, region: "Atlanta", city: "Atlanta, GA" },
};

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const lift = Math.min(150, dist * 0.26 + 24);
  return `M ${a.x} ${a.y} Q ${mx} ${my - lift} ${b.x} ${b.y}`;
}

function JourneyMap({ active }: { active: number }) {
  const cur = MAP[stops[active].id];
  const px = useMotionValue(MAP[stops[0].id].x);
  const py = useMotionValue(MAP[stops[0].id].y);
  const rot = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const srot = useSpring(rot, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const c = MAP[stops[active].id];
    const prev = MAP[stops[Math.max(0, active - 1)].id];
    px.set(c.x);
    py.set(c.y);
    if (active > 0) {
      const ang = (Math.atan2(c.y - prev.y, c.x - prev.x) * 180) / Math.PI;
      rot.set(ang + 90);
    }
  }, [active, px, py, rot]);

  // region labels only on the first stop of each region
  const firstOfRegion = new Set<string>();
  const seenRegion = new Set<string>();
  stops.forEach((s) => {
    const r = MAP[s.id].region;
    if (!seenRegion.has(r)) {
      seenRegion.add(r);
      firstOfRegion.add(s.id);
    }
  });

  return (
    <div className="paper-card sketch relative w-full overflow-hidden p-2 shadow-pop">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Career journey map: India to New York to Atlanta">
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e4572e" />
            <stop offset="100%" stopColor="#eaa221" />
          </linearGradient>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="#c9b98f" opacity="0.5" />
          </pattern>
        </defs>

        <rect x="0" y="0" width={W} height={H} fill="url(#dots)" />
        {[110, 220, 330, 440].map((y) => (
          <line key={y} x1="24" x2={W - 24} y1={y} y2={y} stroke="#ddd0b0" strokeWidth="1.5" strokeDasharray="2 12" />
        ))}

        {/* arcs */}
        {stops.slice(0, -1).map((s, i) => {
          const d = arcPath(MAP[s.id], MAP[stops[i + 1].id]);
          const reached = active >= i + 1;
          return (
            <g key={s.id}>
              <path d={d} fill="none" stroke="#cbb98d" strokeWidth="2.5" strokeDasharray="4 8" />
              <motion.path
                d={d}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: reached ? 1 : 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>
          );
        })}

        {/* pins */}
        {stops.map((s, i) => {
          const m = MAP[s.id];
          const visited = i <= active;
          const isActive = i === active;
          const hex = accentHex[s.accent];
          return (
            <g key={s.id} transform={`translate(${m.x} ${m.y})`}>
              {isActive && (
                <circle r="9" fill="none" stroke={hex} strokeWidth="2.5">
                  <animate attributeName="r" from="8" to="26" dur="1.7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.7" to="0" dur="1.7s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                r={isActive ? 9 : 7}
                fill={visited ? hex : "#fffdf6"}
                stroke="#2a2622"
                strokeWidth="2.5"
              />
              {firstOfRegion.has(s.id) && (
                <text x="0" y="-20" textAnchor="middle" fill="#2a2622" fontSize="26" fontWeight="700" style={{ fontFamily: "var(--font-display)" }}>
                  {m.region}
                </text>
              )}
            </g>
          );
        })}

        {/* plane */}
        <motion.g style={{ x: sx, y: sy, rotate: srot }}>
          <g transform="translate(-11 -11) scale(1.1)">
            <path
              d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"
              fill="#e4572e"
              stroke="#2a2622"
              strokeWidth="0.7"
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

function RoleCard({ s, isActive }: { s: Stop; isActive: boolean }) {
  const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <span className={`font-display text-lg leading-none ${accentText[s.accent]}`}>{label} </span>
      <span className="text-[0.95rem] leading-snug text-ink">{children}</span>
    </div>
  );
  return (
    <div
      className={`paper-card sketch rounded-2xl p-6 shadow-pop transition-all duration-300 ${
        isActive ? `${accentBorder[s.accent]} -translate-y-0.5` : ""
      }`}
    >
      <div className="font-display text-2xl leading-none text-ink">{s.title}</div>
      <div className="mt-1 text-base text-ink-soft">
        {s.company}
        {s.note ? ` · ${s.note}` : ""}
      </div>
      <div className="text-sm text-ink-soft">
        {MAP[s.id].city} · {s.period}
      </div>
      <div className="mt-4 space-y-2">
        <Row label="The Challenge">{s.challenge}</Row>
        <Row label="My Contribution">{s.contribution}</Row>
        <Row label="The Impact">{s.impact}</Row>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {s.coreSkills.map((sk) => (
          <span key={sk} className="sketch bg-cream-deep px-2.5 py-0.5 text-sm leading-tight">
            {sk}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-5xl text-ink sm:text-6xl">The road so far</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Mumbai → Bengaluru → New York → Atlanta — every stop taught me something the last one
          couldn&apos;t. Scroll to trace the route.
        </p>
      </div>

      <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* sticky map */}
        <div className="sticky top-16 z-10 mb-8 lg:col-span-6 lg:mb-0 lg:self-start lg:top-24">
          <div className="rounded-2xl bg-cream/70 p-1 backdrop-blur-sm">
            <JourneyMap active={active} />
            <div className="mt-2 flex items-center justify-between px-2 font-display text-lg text-ink-soft">
              <span>
                Stop {String(active + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}
              </span>
              <span>{MAP[stops[active].id].city}</span>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-6">
            {stops.map((s, i) => (
              <motion.div
                key={s.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <RoleCard s={s} isActive={active === i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
