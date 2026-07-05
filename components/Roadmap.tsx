"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { stops, summit, type Stop } from "@/lib/data";

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
const accentBg: Record<Stop["accent"], string> = {
  coral: "bg-coral",
  amber: "bg-amber",
  teal: "bg-teal",
  indigo: "bg-indigo",
  berry: "bg-berry",
};

type Pt = { x: number; y: number };

// Stops top (latest) -> bottom (oldest) along the winding road
const ORDER = ["reframe", "creddnet", "nyu", "salesforce", "hpe"];
const COORDS: Record<string, Pt> = {
  reframe: { x: 30, y: 150 },
  creddnet: { x: 70, y: 322 },
  nyu: { x: 28, y: 500 },
  salesforce: { x: 72, y: 678 },
  hpe: { x: 34, y: 850 },
};
const SUMMIT_POS: Pt = { x: 50, y: 52 };

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

  const roleFlags = useMemo(
    () =>
      ORDER.map((id) => ({
        stop: stops.find((s) => s.id === id) as Stop,
        c: COORDS[id],
      })),
    []
  );

  const roadD = useMemo(
    () => catmullRom([SUMMIT_POS, ...ORDER.map((id) => COORDS[id]), { x: 48, y: 940 }]),
    []
  );

  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="mb-4 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">The road so far</h2>
        <p className="mx-auto mt-2 max-w-xl text-lg text-ink-soft">
          Mumbai → Bengaluru → New York → Atlanta — every stop taught me something the last one
          couldn&apos;t.
        </p>
        <span className="sketch mt-4 inline-block rotate-[-1deg] bg-paper px-4 py-1.5 text-base font-bold text-ink shadow-pop-sm">
          Click each flag to see the story
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto mt-8 h-[1500px] w-full max-w-2xl sm:h-[1650px]"
      >
        {/* winding road: black dotted base + alternating solid amber segments */}
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d={roadD}
            fill="none"
            stroke="#2a2622"
            strokeWidth="4"
            strokeDasharray="1 11"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={roadD}
            fill="none"
            stroke="#eaa221"
            strokeWidth="6"
            strokeDasharray="46 54"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* summit flag — aspirational, distinct dashed style */}
        <div
          className="absolute z-20 flex -translate-x-1/2 -translate-y-full flex-col items-center"
          style={{ left: `${SUMMIT_POS.x}%`, top: `${SUMMIT_POS.y / 10}%` }}
        >
          <Image src="/flag.png" alt="" width={54} height={72} className="h-11 w-auto opacity-90 grayscale-[0.2]" />
          <div className="sketch -mt-1 border-dashed bg-paper/95 px-2.5 py-1 text-center shadow-pop-sm">
            <div className="font-display text-sm leading-none text-coral">{summit.label}</div>
            <div className="font-display text-base leading-tight text-ink">{summit.title}</div>
          </div>
        </div>

        {/* role flags */}
        {roleFlags.map(({ stop: s, c }, i) => {
          const side = c.x < 50 ? "right" : "left";
          return (
            <div
              key={s.id}
              className="absolute z-20"
              style={{ left: `${c.x}%`, top: `${c.y / 10}%` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                type="button"
                onClick={() => setPinned((v) => (v === i ? null : i))}
                aria-label={`${s.title} at ${s.company}`}
                className="absolute -translate-x-1/2 -translate-y-full cursor-pointer"
              >
                <span className="relative block">
                  <span
                    className={`pointer-events-none absolute left-1/2 top-[36%] -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${accentBg[s.accent]} opacity-[0.18] blur-[6px]`}
                  />
                  <span
                    className={`pulse-ring pointer-events-none absolute left-1/2 top-[36%] h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] ${accentBorder[s.accent]}`}
                  />
                  <Image
                    src="/flag.png"
                    alt=""
                    width={56}
                    height={74}
                    className="h-14 w-auto drop-shadow transition-transform hover:scale-110"
                  />
                </span>
              </button>

              {/* side label */}
              <div
                className="absolute top-0 w-40 -translate-y-1/2 sm:w-52"
                style={side === "right" ? { left: 42 } : { right: 42 }}
              >
                <div className={`font-display text-xl leading-tight text-ink ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.title}
                </div>
                <div className={`text-base leading-tight text-ink-soft ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.company}
                </div>
                <div className={`mt-0.5 text-sm ${accentText[s.accent]} ${side === "right" ? "text-left" : "text-right"}`}>
                  tap for details
                </div>
              </div>
            </div>
          );
        })}

        {/* detail popover — desktop */}
        {active !== null && <PopoverDesktop s={roleFlags[active].stop} c={roleFlags[active].c} />}

        {/* detail popover — mobile inline */}
        {active !== null && (
          <div className="sm:hidden">
            <div className="fixed inset-0 z-[55] bg-ink/25" onClick={close} />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="paper-card sketch absolute inset-x-2 z-[60] p-4 shadow-pop"
              style={{
                top: `calc(${roleFlags[active].c.y / 10}% + ${roleFlags[active].c.y / 10 > 55 ? "-14px" : "26px"})`,
                transform: roleFlags[active].c.y / 10 > 55 ? "translateY(-100%)" : "none",
              }}
            >
              <button
                type="button"
                onClick={close}
                className="sketch-alt float-right bg-ink px-2.5 py-0.5 text-sm font-bold text-cream"
              >
                close ✕
              </button>
              <RoleDetails s={roleFlags[active].stop} />
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function PopoverDesktop({ s, c }: { s: Stop; c: Pt }) {
  const side = c.x < 50 ? "right" : "left";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="paper-card sketch absolute z-50 hidden w-[330px] -translate-y-1/2 p-4 shadow-pop sm:block"
      style={side === "right" ? { left: `${c.x}%`, top: `${c.y / 10}%`, marginLeft: 44 } : { right: `${100 - c.x}%`, top: `${c.y / 10}%`, marginRight: 44 }}
    >
      <RoleDetails s={s} />
    </motion.div>
  );
}
