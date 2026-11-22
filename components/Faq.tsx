"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { credentials, faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper text-black">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-black/50">
            <span className="text-black">(06)</span>
            <span className="h-px w-8 bg-black/20" />
            For hiring teams
          </p>
          <h2 className="section-title mt-6">
            Questions? <span className="text-black/40">Answered.</span>
          </h2>

          <div className="mt-12 rounded-[var(--radius-card)] bg-white p-7 sm:p-8">
            <p className="eyebrow text-black/40">Education &amp; certifications</p>
            <div className="mt-4">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-0.5 border-b border-black/[0.08] py-3.5 last:border-0 last:pb-0"
                >
                  <span className="text-[15px]">{c.label}</span>
                  <span className="text-[13px] text-black/50">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-black/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-black/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[clamp(1.15rem,1.6vw,1.4rem)] tracking-[-0.03em]">{f.q}</span>
                    <span
                      aria-hidden
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/15 transition-all duration-300 ${
                        isOpen ? "rotate-45 border-lime bg-lime" : ""
                      }`}
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
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] pb-7 text-[16px] leading-relaxed text-black/60">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
