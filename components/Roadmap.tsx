"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stops, summit, trailBase, type Stop } from "@/lib/data";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = pinned ?? hovered;

  // Trail geometry (viewBox 0..100 x, 0..100 y; y=100 is the base)
  const { d, verts, cum, total } = useMemo(() => {
    const v: Pt[] = [
      trailBase,
      ...stops.map((s) => ({ x: s.x, y: s.y })),
      { x: summit.x, y: summit.y },
    ];
    let dStr = `M ${v[0].x} ${v[0].y}`;
    const c: number[] = [0];
    let t = 0;
    for (let i = 1; i < v.length; i++) {
      dStr += ` L ${v[i].x} ${v[i].y}`;
      t += Math.hypot(v[i].x - v[i - 1].x, v[i].y - v[i - 1].y);
      c.push(t);
    }
    return { d: dStr, verts: v, cum: c, total: t };
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      const mk = markerRef.current;
      if (!el || !mk) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh * 0.8 - rect.top) / (vh * 0.4 + rect.height), 0), 1);

      // walk the polyline to find the point at distance p*total
      const dist = p * total;
      let idx = 1;
      while (idx < cum.length && cum[idx] < dist) idx++;
      const a = verts[idx - 1];
      const b = verts[idx] ?? a;
      const segLen = cum[idx] - cum[idx - 1] || 1;
      const tt = Math.min(Math.max((dist - cum[idx - 1]) / segLen, 0), 1);
      const x = a.x + (b.x - a.x) * tt;
      const y = a.y + (b.y - a.y) * tt;
      mk.style.left = `${x}%`;
      mk.style.top = `${y}%`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cum, total, verts]);

  return (
    <section id="journey" ref={sectionRef} className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="mb-4 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">The road so far</h2>
        <p className="mx-auto mt-2 max-w-xl text-lg text-ink-soft">
          Mumbai → Bengaluru → New York → Atlanta — the long way to becoming an AI-native operator.
        </p>
      </div>

      <div className="relative mx-auto h-[1500px] w-full sm:h-[1600px]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {/* mountain silhouettes */}
          <path d="M0 100 L34 34 L60 100 Z" fill="#e7dcc0" opacity="0.7" />
          <path d="M40 100 L72 14 L100 100 Z" fill="#efe6cf" opacity="0.9" />
          <path d="M0 100 L34 34 L60 100 Z" fill="none" stroke="#c9b98f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M40 100 L72 14 L100 100 Z" fill="none" stroke="#c9b98f" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          {/* snow caps */}
          <path d="M65 27 L72 14 L79 27 L74 24 L71 28 L68 24 Z" fill="#fffdf6" stroke="#c9b98f" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />

          {/* switchback trail */}
          <path
            d={d}
            fill="none"
            stroke="#2a2622"
            strokeWidth="3.5"
            strokeDasharray="1 9"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* base camp marker */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: `${trailBase.x}%`, top: `${trailBase.y}%` }}
        >
          <span className="font-display text-lg text-ink-soft">base camp · 2021</span>
        </div>

        {/* climbing marker */}
        <div ref={markerRef} className="absolute z-30" style={{ left: `${trailBase.x}%`, top: `${trailBase.y}%` }}>
          <div className="sketch grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center bg-paper text-lg shadow-pop-sm">
            <span aria-hidden>🥾</span>
          </div>
        </div>

        {/* role flags */}
        {stops.map((s, i) => {
          const side = s.x < 50 ? "right" : "left";
          const isActive = active === i;
          return (
            <div
              key={s.id}
              className="absolute z-20"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.button
                type="button"
                onClick={() => setPinned((p) => (p === i ? null : i))}
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 + i * 0.06 }}
                whileHover={{ scale: 1.12, rotate: 0 }}
                className={`sketch absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center ${accentBg[s.accent]} text-2xl shadow-pop`}
                aria-label={`${s.title} at ${s.company}`}
              >
                <span aria-hidden>{s.icon}</span>
              </motion.button>

              <div
                className="absolute top-0 w-40 -translate-y-1/2 sm:w-52"
                style={side === "right" ? { left: 40 } : { right: 40 }}
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

        {/* summit flag (aspirational goal) */}
        <div
          className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ left: `${summit.x}%`, top: `${summit.y}%` }}
        >
          <span className="text-3xl" aria-hidden>
            {summit.icon}
          </span>
          <div className="sketch mt-1 border-dashed bg-paper px-3 py-1.5 shadow-pop-sm">
            <div className="font-display text-base leading-none text-coral">{summit.label}</div>
            <div className="font-display text-xl leading-tight text-ink">{summit.title}</div>
          </div>
        </div>

        {/* detail popover — desktop */}
        {active !== null && (
          <PopoverDesktop s={stops[active]} />
        )}
        {/* detail popover — mobile inline */}
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="paper-card sketch absolute inset-x-3 z-[60] p-4 shadow-pop"
              style={{
                top: `calc(${stops[active].y}% + ${stops[active].y > 60 ? "-12px" : "44px"})`,
                transform: stops[active].y > 60 ? "translateY(-100%)" : "none",
              }}
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
      </div>
    </section>
  );
}

function PopoverDesktop({ s }: { s: Stop }) {
  const below = s.y <= 60;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: below ? 6 : -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="paper-card sketch absolute z-50 hidden w-[340px] p-4 shadow-pop sm:block"
      style={{
        left: `${s.x}%`,
        top: `calc(${s.y}% + ${below ? "46px" : "-46px"})`,
        transform: below ? "translate(-50%, 0)" : "translate(-50%, -100%)",
      }}
    >
      <RoleDetails s={s} />
    </motion.div>
  );
}
