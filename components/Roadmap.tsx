"use client";

import Image from "next/image";
import { useState } from "react";
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

// Fixed positions on the mountain image (% of container), base -> peak
const pos: Record<string, { x: number; y: number }> = {
  hpe: { x: 30, y: 80 },
  salesforce: { x: 64, y: 66 },
  nyu: { x: 40, y: 52 },
  creddnet: { x: 58, y: 38 },
  reframe: { x: 48, y: 24 },
};

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

  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="mb-6 text-center">
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
        className="relative mx-auto mt-28 w-full max-w-3xl"
      >
        {/* image + flags share one coordinate space; scaled up on mobile for room */}
        <div className="relative left-1/2 w-[142%] -translate-x-1/2 sm:left-auto sm:w-full sm:translate-x-0">
          {/* mountain base */}
          <Image
            src="/mountain.png"
            alt="An illustrated mountain representing the career climb"
            width={1496}
            height={984}
            priority
            className="pointer-events-none h-auto w-full select-none"
          />

          {/* summit flag — aspirational, distinct dashed style */}
          <div
            className="absolute z-20 flex -translate-x-1/2 -translate-y-full flex-col items-center"
            style={{ left: `${summit.x}%`, top: "0%" }}
          >
            <Image src="/flag.png" alt="" width={60} height={80} className="h-11 w-auto opacity-90 grayscale-[0.2]" />
            <div className="sketch -mt-1 border-dashed bg-paper/95 px-2.5 py-1 text-center shadow-pop-sm">
              <div className="font-display text-sm leading-none text-coral">{summit.label}</div>
              <div className="font-display text-base leading-tight text-ink">{summit.title}</div>
            </div>
          </div>

          {/* role flags */}
          {stops.map((s, i) => {
            const p = pos[s.id];
            const isBottom = i === 0;
            return (
              <div
                key={s.id}
                className="absolute z-20"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  type="button"
                  onClick={() => setPinned((v) => (v === i ? null : i))}
                  aria-label={`${s.title} at ${s.company}`}
                  className="absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                >
                  <span className={`relative block ${isBottom ? "flag-bounce" : ""}`}>
                    <span
                      className={`pointer-events-none absolute left-1/2 top-[36%] -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${accentBg[s.accent]} opacity-[0.18] blur-[6px]`}
                    />
                    <span
                      className={`pulse-ring pointer-events-none absolute left-1/2 top-[36%] h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] ${accentBorder[s.accent]}`}
                    />
                    <Image
                      src="/flag.png"
                      alt=""
                      width={60}
                      height={80}
                      className="h-16 w-auto drop-shadow transition-transform hover:scale-110"
                    />
                  </span>
                </button>

                <div className="absolute top-1 left-1/2 w-max -translate-x-1/2">
                  <div className="sketch bg-paper/95 px-2 py-0.5 text-center shadow-pop-sm">
                    <div className="font-display text-sm leading-none text-ink sm:text-base">{s.company}</div>
                    <div className={`text-[11px] leading-tight ${accentText[s.accent]}`}>tap for details</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* detail popover — desktop */}
        {active !== null && <PopoverDesktop s={stops[active]} p={pos[stops[active].id]} />}

        {/* detail popover — mobile inline */}
        {active !== null && (
          <div className="sm:hidden">
            <div className="fixed inset-0 z-[55] bg-ink/25" onClick={close} />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="paper-card sketch absolute inset-x-1 z-[60] p-4 shadow-pop"
              style={{
                top: `calc(${pos[stops[active].id].y}% + ${pos[stops[active].id].y > 45 ? "-20px" : "28px"})`,
                transform: pos[stops[active].id].y > 45 ? "translateY(-100%)" : "none",
              }}
            >
              <button
                type="button"
                onClick={close}
                className="sketch-alt float-right bg-ink px-2.5 py-0.5 text-sm font-bold text-cream"
              >
                close ✕
              </button>
              <RoleDetails s={stops[active]} />
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function PopoverDesktop({ s, p }: { s: Stop; p: { x: number; y: number } }) {
  const below = p.y <= 45;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: below ? 6 : -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="paper-card sketch absolute z-50 hidden w-[330px] p-4 shadow-pop sm:block"
      style={{
        left: `${p.x}%`,
        top: `calc(${p.y}% + ${below ? "44px" : "-44px"})`,
        transform: below ? "translate(-50%, 0)" : "translate(-50%, -100%)",
      }}
    >
      <RoleDetails s={s} />
    </motion.div>
  );
}
