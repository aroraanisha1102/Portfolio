"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { motion } from "framer-motion";
import { stops, type Stop } from "@/lib/data";
import {
  CityBengaluru,
  CityMumbai,
  CityNYC,
  CityLiberty,
  CityAtlanta,
  Plane,
  Star,
} from "./Doodles";

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

type CardMeta = {
  cityShort: string;
  Doodle: ComponentType<SVGProps<SVGSVGElement>>;
};

const META: Record<string, CardMeta> = {
  hpe: { cityShort: "Bengaluru", Doodle: CityBengaluru },
  salesforce: { cityShort: "Mumbai", Doodle: CityMumbai },
  nyu: { cityShort: "New York", Doodle: CityNYC },
  creddnet: { cityShort: "New York", Doodle: CityLiberty },
  reframe: { cityShort: "Atlanta", Doodle: CityAtlanta },
};

// desktop corkboard positions (px within a fixed 960 x 980 board)
const POS = [
  { left: 40, top: 20, rot: -4 },
  { left: 560, top: 70, rot: 3 },
  { left: 70, top: 360, rot: -3 },
  { left: 560, top: 420, rot: 4 },
  { left: 300, top: 720, rot: -2 },
];
const CARD_W = 340;
const CARD_H = 230;

function Postcard({
  s,
  num,
  flipped,
  onToggle,
}: {
  s: Stop;
  num: number;
  flipped: boolean;
  onToggle: () => void;
}) {
  const meta = META[s.id];
  const Doodle = meta.Doodle;
  return (
    <div
      className="h-full w-full cursor-pointer select-none"
      style={{ perspective: 1200 }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onToggle())}
      aria-label={`${s.title} at ${s.company} — ${flipped ? "showing the note" : "click to read the note"}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div className="paper-card sketch absolute inset-0 flex flex-col overflow-hidden p-3 shadow-pop [backface-visibility:hidden]">
          {/* airmail top strip */}
          <div
            className="absolute inset-x-0 top-0 h-1.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg,#e4572e 0 7px,#f6efdd 7px 14px,#4a56d6 14px 21px,#f6efdd 21px 28px)",
            }}
          />
          {/* number stamp */}
          <div className={`sketch-alt absolute left-2 top-3.5 z-10 grid h-7 w-7 place-items-center ${accentBg[s.accent]} font-display text-lg text-cream shadow-pop-sm`}>
            {num}
          </div>
          {/* postmark */}
          <div className="absolute right-2 top-3.5 z-10 rotate-3 rounded border-2 border-dashed border-ink/50 bg-paper/80 px-1.5 py-0.5 text-right">
            <div className="font-display text-xs leading-none text-ink">{meta.cityShort}</div>
            <div className="text-[9px] leading-tight text-ink-soft">{s.period}</div>
          </div>

          {/* city illustration */}
          <div className="flex flex-1 items-center justify-center pt-4">
            <Doodle className={`h-24 w-auto ${accentText[s.accent]}`} />
          </div>

          <div className="flex items-end justify-between">
            <div className="font-display text-2xl leading-none text-ink">{meta.cityShort}</div>
            <div className={`text-xs ${accentText[s.accent]}`}>tap to read →</div>
          </div>
        </div>

        {/* BACK */}
        <div className="paper-card sketch absolute inset-0 flex overflow-hidden p-3 shadow-pop [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* note */}
          <div className="flex w-[58%] flex-col pr-2">
            <div className={`font-display text-lg leading-none ${accentText[s.accent]}`}>
              Greetings from {meta.cityShort}!
            </div>
            <div className="mt-1.5 space-y-1 overflow-hidden text-[11px] leading-snug text-ink">
              <p>{s.challenge}</p>
              <p>{s.contribution}</p>
              <p className="font-bold">{s.impact}</p>
            </div>
            <div className="mt-auto font-display text-base text-ink-soft">— A.</div>
          </div>

          {/* divider */}
          <div className="mx-1 border-l-2 border-dashed border-ink/40" />

          {/* address block */}
          <div className="flex w-[42%] flex-col pl-2">
            <div className={`sketch-alt mb-1 self-end ${accentBg[s.accent]} px-1.5 py-0.5 font-display text-xs text-cream`}>
              No. {num}
            </div>
            <div className="font-display text-[15px] leading-tight text-ink">{s.title}</div>
            <div className="text-[11px] leading-tight text-ink-soft">
              {s.company}
              {s.note ? ` · ${s.note}` : ""}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {s.coreSkills.slice(0, 4).map((sk) => (
                <span key={sk} className="rounded-sm border border-dashed border-ink/60 bg-cream-deep px-1.5 py-0.5 text-[9px] leading-none text-ink">
                  {sk}
                </span>
              ))}
            </div>
            <div className="mt-auto text-right text-[10px] text-ink-soft">↩ tap to flip</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const ordered = stops; // chronological: HPE -> Salesforce -> NYU -> CREDDnet -> Reframe

  // desktop travel-line points (card centers)
  const centers = POS.map((p) => ({ x: p.left + CARD_W / 2, y: p.top + CARD_H / 2 }));
  const linePath =
    `M ${centers[0].x} ${centers[0].y} ` +
    centers.slice(1).map((c, i) => {
      const prev = centers[i];
      const mx = (prev.x + c.x) / 2;
      return `Q ${mx} ${prev.y} ${c.x} ${c.y}`;
    }).join(" ");

  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">Postcards from my journey</h2>
        <p className="mx-auto mt-2 max-w-lg text-lg text-ink-soft">
          India → New York → Atlanta. Tap a postcard to read the note home.
        </p>
      </div>

      {/* ---------- desktop corkboard ---------- */}
      <div className="relative mx-auto hidden lg:block" style={{ width: 960, height: 980 }}>
        <svg viewBox="0 0 960 980" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <path d={linePath} fill="none" stroke="#b7a985" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" />
        </svg>
        {/* plane doodle mid-route (transatlantic hop) */}
        <Plane className="absolute h-8 w-8 -rotate-12 text-coral" style={{ left: 470, top: 300 }} />

        {ordered.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 22, rotate: POS[i].rot }}
            whileInView={{ opacity: 1, y: 0, rotate: POS[i].rot }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.03, rotate: 0, zIndex: 40 }}
            className="absolute"
            style={{
              left: POS[i].left,
              top: POS[i].top,
              width: CARD_W,
              height: CARD_H,
              zIndex: flipped.has(s.id) ? 40 : 10,
            }}
          >
            <Postcard s={s} num={i + 1} flipped={flipped.has(s.id)} onToggle={() => toggle(s.id)} />
          </motion.div>
        ))}
      </div>

      {/* ---------- mobile / tablet stack ---------- */}
      <div className="flex flex-col items-center gap-3 lg:hidden">
        {ordered.map((s, i) => (
          <div key={s.id} className="flex w-full max-w-[340px] flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="w-full"
              style={{ height: CARD_H, zIndex: flipped.has(s.id) ? 40 : 10 }}
            >
              <Postcard s={s} num={i + 1} flipped={flipped.has(s.id)} onToggle={() => toggle(s.id)} />
            </motion.div>
            {i < ordered.length - 1 && (
              <div className="flex flex-col items-center py-1 text-ink-soft">
                <Plane className="h-5 w-5 rotate-90 text-coral" />
                <div className="h-3 border-l-2 border-dashed border-ink/40" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-ink-soft">
        <Star className="animate-wiggle h-5 w-5 text-amber" />
        <span className="font-display text-xl">next stop: an AI-native team (yours?)</span>
      </div>
    </section>
  );
}
