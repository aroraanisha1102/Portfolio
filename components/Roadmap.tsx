"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { stops, roadStart, roadFinish, type Stop } from "@/lib/data";
import { Flag, Pin, Star } from "./Doodles";

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

const pathPoints: Pt[] = [roadStart, ...stops.map((s) => ({ x: s.x, y: s.y })), roadFinish];
const roadD = catmullRom(pathPoints);

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
          {s.note ? ` · ${s.note}` : ""} · {s.location} · {s.period}
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = pinned ?? hovered;

  const mx = useMotionValue(roadStart.x);
  const my = useMotionValue(roadStart.y / 10);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "end 0.7"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, []);

  useMotionValueEvent(progress, "change", (v) => {
    if (!pathRef.current || !len) return;
    const p = pathRef.current.getPointAtLength(Math.min(Math.max(v, 0), 1) * len);
    mx.set(p.x);
    my.set(p.y / 10);
  });

  return (
    <section id="journey" ref={sectionRef} className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">The road so far</h2>
        <p className="mx-auto mt-2 max-w-md text-lg text-ink-soft">
          India → New York → Atlanta. Tap a stop to see the play-by-play.
        </p>
      </div>

      <div className="relative mx-auto h-[1550px] w-full sm:h-[1700px]">
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
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
          {/* traveled progress */}
          <motion.path
            ref={pathRef}
            d={roadD}
            fill="none"
            stroke="#eaa221"
            strokeWidth="7"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: progress }}
          />
        </svg>

        {/* traveling pin */}
        <motion.div
          className="pointer-events-none absolute z-30"
          style={{ left: mx as unknown as string, top: my as unknown as string }}
        >
          <div className="-translate-x-1/2 -translate-y-full drop-shadow">
            <Pin className="h-9 w-9 text-coral" />
          </div>
        </motion.div>

        {/* start label */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${roadStart.x}%`, top: `${roadStart.y / 10}%` }}
        >
          <span className="sketch bg-teal px-3 py-1 font-display text-xl text-cream shadow-pop-sm">
            Start
          </span>
        </div>

        {/* milestones */}
        {stops.map((s, i) => {
          const side = s.x < 50 ? "right" : "left";
          const isActive = active === i;
          return (
            <div
              key={s.id}
              className="absolute z-20"
              style={{ left: `${s.x}%`, top: `${s.y / 10}%` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* stone */}
              <motion.button
                type="button"
                onClick={() => setPinned((p) => (p === i ? null : i))}
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 + i * 0.08 }}
                whileHover={{ scale: 1.12, rotate: 0 }}
                className={`sketch absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center ${accentBg[s.accent]} font-display text-3xl text-cream shadow-pop`}
                aria-label={`${s.title} at ${s.company}`}
              >
                {s.step}
              </motion.button>

              {/* label (always visible) */}
              <div
                className="absolute top-0 w-40 -translate-y-1/2 sm:w-52"
                style={side === "right" ? { left: 44 } : { right: 44 }}
              >
                <div className={`text-right font-display text-xl leading-tight text-ink ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.title}
                </div>
                <div className={`text-base leading-tight text-ink-soft ${side === "right" ? "text-left" : "text-right"}`}>
                  {s.company}
                </div>
                <div className={`mt-0.5 text-sm ${accentText[s.accent]} ${side === "right" ? "text-left" : "text-right"}`}>
                  {isActive ? "" : "tap for details"}
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

        {/* finish */}
        <div
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${roadFinish.x}%`, top: `${roadFinish.y / 10}%` }}
        >
          <Flag className="h-14 w-14 text-ink" />
          <span className="sketch mt-1 whitespace-nowrap bg-paper px-3 py-1 font-display text-2xl text-ink shadow-pop-sm">
            To be continued…
          </span>
          <Star className="animate-wiggle mt-2 h-6 w-6 text-amber" />
        </div>
      </div>

      {/* mobile bottom sheet */}
      {active !== null && (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-[55] bg-ink/25"
            onClick={() => {
              setPinned(null);
              setHovered(null);
            }}
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="paper-card sketch fixed inset-x-3 bottom-3 z-[60] max-h-[75vh] overflow-auto p-4 shadow-pop"
          >
            <button
              type="button"
              onClick={() => {
                setPinned(null);
                setHovered(null);
              }}
              className="sketch-alt float-right bg-ink px-2.5 py-0.5 text-sm font-bold text-cream"
            >
              close ✕
            </button>
            <RoleDetails s={stops[active]} />
          </motion.div>
        </div>
      )}
    </section>
  );
}
