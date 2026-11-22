"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(chapters[0].id);

  return (
    <section id="experience" className="bg-paper text-black">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="02"
          label="Experience"
          title={
            <>
              Where I&apos;ve <span className="text-black/40">operated.</span>
            </>
          }
          aside="From enterprise sales floors in India to leading operations at a YC-backed startup, 2021 to now."
        />

        <div className="mt-16 space-y-3">
          {chapters.map((c, i) => {
            const isOpen = open === c.id;
            return (
              <div
                key={c.id}
                className={`overflow-hidden rounded-[var(--radius-card)] border transition-colors ${
                  isOpen ? "border-black/10 bg-white" : "border-black/[0.08] bg-white/50 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : c.id)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 p-6 text-left sm:grid-cols-[3.5rem_1fr_auto_auto] sm:p-8"
                >
                  <span className="hidden text-[13px] tabular-nums text-black/40 sm:block">
                    ({String(i + 1).padStart(2, "0")})
                  </span>

                  <span>
                    <span className="display block text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight tracking-[-0.04em]">
                      {c.company}
                    </span>
                    <span className="mt-1 block text-[14px] text-black/55">
                      {c.role}
                      {c.note && <span className="text-black/35"> · {c.note}</span>}
                    </span>
                  </span>

                  <span className="col-start-1 row-start-2 sm:col-start-auto sm:row-start-auto sm:text-right">
                    <span className="inline-flex items-baseline gap-2 rounded-full bg-lime px-3.5 py-1.5 text-black">
                      <span className="display text-[15px] font-medium tracking-[-0.02em]">{c.metric}</span>
                      <span className="text-[12px] text-black/70">{c.metricLabel}</span>
                    </span>
                  </span>

                  <span
                    className={`col-start-2 row-span-2 row-start-1 grid h-11 w-11 place-items-center self-start rounded-full border border-black/10 text-lg transition-all duration-300 sm:col-start-auto sm:row-span-1 sm:row-start-auto sm:self-center ${
                      isOpen ? "rotate-45 bg-black text-white" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 border-t border-black/[0.08] px-6 pb-8 pt-6 sm:grid-cols-[3.5rem_1fr_220px] sm:gap-x-6 sm:px-8">
                        <span className="hidden sm:block" />
                        <div className="max-w-2xl">
                          <p className="text-[17px] leading-relaxed text-black">{c.line}</p>
                          <ul className="mt-6 space-y-3.5">
                            {c.details.map((d) => (
                              <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-black/65">
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-5">
                          <div>
                            <p className="eyebrow text-black/40">Period</p>
                            <p className="mt-1 text-[15px]">{c.period}</p>
                          </div>
                          <div>
                            <p className="eyebrow text-black/40">Location</p>
                            <p className="mt-1 text-[15px]">{c.location}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {c.skills.map((s) => (
                              <span
                                key={s}
                                className="rounded-full bg-stone px-3 py-1 text-[12px] text-black/70"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
