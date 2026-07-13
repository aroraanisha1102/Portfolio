"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/lib/data";

export default function Journey() {
  const [open, setOpen] = useState<string | null>(chapters[0].id);

  return (
    <section id="journey" className="bg-coal text-bone">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold lowercase leading-none tracking-[-0.04em]">
            the journey
          </h2>
          <p className="text-[13px] uppercase tracking-[0.18em] text-bone-soft">
            2021 — now · India → New York → Atlanta
          </p>
        </div>

        <div className="mt-16 border-t border-line-dark">
          {chapters.map((c, i) => {
            const isOpen = open === c.id;
            return (
              <div key={c.id} className="border-b border-line-dark">
                <button
                  onClick={() => setOpen(isOpen ? null : c.id)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-5 py-7 text-left sm:grid-cols-[3rem_1fr_auto_2rem] sm:gap-x-8"
                >
                  <span className="text-[13px] tabular-nums text-bone-soft">
                    {String(chapters.length - i).padStart(2, "0")}
                  </span>

                  <span>
                    <span className="display block text-2xl font-bold tracking-tight transition-colors group-hover:text-amber sm:text-4xl">
                      {c.company}
                      {c.note && (
                        <span className="serif-accent ml-3 text-lg text-bone-soft sm:text-xl">
                          {c.note}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-[13px] text-bone-soft">
                      {c.role} · {c.location}
                    </span>
                  </span>

                  <span className="hidden text-right sm:block">
                    <span className="display block text-2xl font-bold text-amber">{c.metric}</span>
                    <span className="block text-[12px] text-bone-soft">{c.metricLabel}</span>
                  </span>

                  <span
                    className={`hidden justify-self-end text-xl text-bone-soft transition-transform duration-300 sm:block ${
                      isOpen ? "rotate-45" : ""
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
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8 sm:pl-0">
                        <span className="hidden sm:block" />
                        <div className="max-w-2xl">
                          <p className="text-[15px] leading-relaxed text-bone">{c.line}</p>
                          <ul className="mt-5 space-y-3">
                            {c.details.map((d) => (
                              <li key={d} className="flex gap-3 text-[14px] leading-relaxed text-bone-soft">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {c.skills.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-line-dark px-3 py-1 text-[12px] text-bone-soft"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[13px] uppercase tracking-[0.18em] text-bone-soft">
                          {c.period}
                        </span>
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
