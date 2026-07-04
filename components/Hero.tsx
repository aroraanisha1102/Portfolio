"use client";

import { motion } from "framer-motion";
import { profile, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24">
      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute right-[8%] top-[14%] h-72 w-72 rounded-full bg-indigo/25 blur-3xl" />
        <div className="animate-float-slow absolute left-[6%] bottom-[12%] h-80 w-80 rounded-full bg-cyan/15 blur-3xl [animation-delay:-4s]" />
        <div className="dotgrid absolute inset-0 opacity-[0.35]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-4 py-1.5 text-xs font-medium text-mist"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          Open to Strategy · Ops · GTM roles at AI companies
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-cloud sm:text-7xl"
        >
          {profile.name}
          <span className="mt-3 block text-gradient">{profile.tagline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-fog"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#journey"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo to-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/25 transition-transform hover:-translate-y-0.5"
          >
            Follow the journey
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-6 py-3 text-sm font-semibold text-cloud transition-colors hover:border-indigo/60"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8"
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold text-cloud sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-fog sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
