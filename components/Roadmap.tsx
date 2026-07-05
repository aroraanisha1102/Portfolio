"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { stops, type Stop } from "@/lib/data";
import { Flag, Star } from "./Doodles";

const accentBg: Record<Stop["accent"], string> = {
  coral: "bg-coral",
  amber: "bg-amber",
  teal: "bg-teal",
  indigo: "bg-indigo",
  berry: "bg-berry",
};
const accentText: Record<Stop["accent"], string> = {
  coral: "text-coral",
  amber: "text-amber",
  teal: "text-teal",
  indigo: "text-indigo",
  berry: "text-berry",
};

type Pt = { x: number; y: number };

// Newest first (top) -> oldest (bottom)
const ORDER = ["reframe", "creddnet", "nyu", "salesforce", "hpe"];
const COORDS: Record<string, Pt> = {
  reframe: { x: 30, y: 130 },
  creddnet: { x: 70, y: 305 },
  nyu: { x: 28, y: 480 },
  salesforce: { x: 72, y: 655 },
  hpe: { x: 34, y: 830 },
};
const ROAD_START: Pt = { x: 50, y: 34 }; // above the newest role (the "next chapter")
const ROAD_END: Pt = { x: 46, y: 936 }; // below the oldest role (where it began)

function catmullRom(points: Pt[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function RoleDetails({ s }: { s: Stop }) {
  const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <div className={`font-display text-lg leading-none ${accentText[s.accent]}`}>{label}</div>
      <p className="mt-1 text-[0.95rem] leading-snug text-ink">{children}</p>
    </div>
  );
  return (
    <div className="space-y-3">
      <div>
        <div className="font-display text-2xl leading-none text-ink">{s.title}</div>
        <div className="text-base text-ink-soft">
          {s.company}
          {s.note ? ` · ${s.note}` : ""}
        </div>
        <div className="text-sm text-ink-soft">
          {s.location} · {s.period}
        </div>
      </div>
      <Row label="The Challenge">{s.challenge}</Row>
      <Row label="My Contribution">{s.contribution}</Row>
      <Row label="The Impact">{s.impact}</Row>
      <div>
        <div className={`font-display text-lg leading-none ${accentText[s.accent]}`}>Core Skills</div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {s.coreSkills.map((sk) => (
            <span key={sk} className="sketch bg-cream-deep px-2 py-0.5 text-sm leading-tight">
              {sk}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = pinned ?? hovered;

  const close = () => {
    setPinned(null);
    setHovered(null);
  };

  const items = useMemo(
    () => ORDER.map((id) => ({ s: stops.find((x) => x.id === id) as Stop, c: COORDS[id] })),
    []
  );
  const roadD = useMemo(
    () => catmullRom([ROAD_START, ...ORDER.map((id) => COORDS[id]), ROAD_END]),
    []
  );

  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">The road so far</h2>
        <p className="mx-auto mt-2 max-w-md text-lg text-ink-soft">
          Newest first — hover (or tap) a stop to see the play-by-play.
        </p>
      </div>

      <div className="relative mx-auto h-[1550px] w-full sm:h-[1700px]">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {/* road base */}
          <path
            d={roadD}
            fill="none"
            stroke="#2a2622"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* lane dashes */}
          <path
            d={roadD}
            fill="none"
            stroke="#f6efdd"
            strokeWidth="3"
            strokeDasharray="1 15"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* next chapter (top) */}
        <div
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ left: `${ROAD_START.x}%`, top: `${ROAD_START.y / 10}%` }}
        >
          <Flag className="h-10 w-10 text-ink" />
          <span className="sketch mt-1 whitespace-nowrap border-dashed bg-paper px-3 py-1 font-display text-lg text-ink shadow-pop-sm">
            Next chapter — AI-Native Strategy &amp; Ops
          </span>
        </div>

        {/* milestones (newest -> oldest) */}
        {items.map(({ s, c }, i) => {
          const side = c.x < 50 ? "right" : "left";
          const isActive = active === i;
          return (
            <div
              key={s.id}
              className="absolute z-20"
              style={{ left: `${c.x}%`, top: `${c.y / 10}%` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* stone */}
              <motion.button
                type="button"
                onClick={() => setPinned((p) => (p === i ? null : i))}
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.12 + i * 0.07 }}
                whileHover={{ scale: 1.12, rotate: 0 }}
                className={`sketch absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center ${accentBg[s.accent]} font-display text-3xl text-cream shadow-pop`}
                aria-label={`${s.title} at ${s.company}`}
              >
                {i + 1}
              </motion.button>

              {/* label */}
              <div className="absolute top-0 w-40 -translate-y-1/2 sm:w-52" style={side === "right" ? { left: 44 } : { right: 44 }}>
                <div className={`font-display text-xl leading-tight text-ink ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.title}
                </div>
                <div className={`text-base leading-tight text-ink-soft ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.company}
                </div>
                <div className={`mt-0.5 text-sm ${accentText[s.accent]} ${side === "right" ? "text-left" : "text-right"}`}>
                  {isActive ? "" : "hover for details"}
                </div>
              </div>

              {/* desktop popover */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="paper-card sketch absolute top-0 z-40 hidden w-[320px] -translate-y-1/2 p-4 shadow-pop sm:block"
                  style={side === "right" ? { left: 44 } : { right: 44 }}
                >
                  <RoleDetails s={s} />
                </motion.div>
              )}
            </div>
          );
        })}

        {/* where it began (bottom) */}
        <div
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ left: `${ROAD_END.x}%`, top: `${ROAD_END.y / 10}%` }}
        >
          <Star className="animate-wiggle h-7 w-7 text-amber" />
          <span className="sketch mt-1 whitespace-nowrap bg-paper px-3 py-1 font-display text-xl text-ink shadow-pop-sm">
            Where it began · 2021
          </span>
        </div>
      </div>

      {/* mobile bottom sheet */}
      {active !== null && (
        <div className="sm:hidden">
          <div className="fixed inset-0 z-[55] bg-ink/25" onClick={close} />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="paper-card sketch fixed inset-x-3 bottom-3 z-[60] max-h-[75vh] overflow-auto p-4 shadow-pop"
          >
            <button
              type="button"
              onClick={close}
              className="sketch-alt float-right bg-ink px-2.5 py-0.5 text-sm font-bold text-cream"
            >
              close ✕
            </button>
            <RoleDetails s={items[active].s} />
          </motion.div>
        </div>
      )}
    </section>
  );
}
