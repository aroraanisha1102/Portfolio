"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted"
        >
          Strategy & Operations — AI-native
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-6 text-[clamp(3.6rem,11vw,9.5rem)] font-bold leading-[0.9] tracking-[-0.04em]"
        >
          strategy
          <br />
          that <span className="serif-accent text-amber">ships.</span>
        </motion.h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="max-w-md text-[15px] leading-relaxed text-muted"
          >
            I&apos;m Anisha — an operator who builds. Four years turning ambiguous
            problems into revenue systems and working AI products, from Fortune 500
            sales floors to the engine room of a YC-backed startup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#journey"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition-opacity hover:opacity-80"
            >
              The journey ↓
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 border-t border-line lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`py-8 pr-6 ${i > 0 ? "border-line lg:border-l lg:pl-8" : ""} ${
                i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} border-line`}
            >
              <div className="display text-4xl font-bold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 max-w-[24ch] text-[13px] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
