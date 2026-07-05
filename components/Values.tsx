"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/data";

const accentBg: Record<string, string> = {
  coral: "bg-coral",
  amber: "bg-amber",
  teal: "bg-teal",
  indigo: "bg-indigo",
  berry: "bg-berry",
};

const tilts = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export default function Values() {
  return (
    <section id="values" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">How I operate</h2>
        <p className="mt-2 text-lg text-ink-soft">
          Not a mission statement — just how I actually work.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            className={`paper-card sketch p-5 shadow-pop transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${tilts[i % tilts.length]}`}
          >
            <div className={`h-8 w-8 ${accentBg[v.accent]} sketch-alt shadow-pop-sm`} />
            <h3 className="mt-4 font-display text-3xl leading-none text-ink">{v.title}</h3>
            <p className="mt-2 text-[0.98rem] leading-snug text-ink-soft">{v.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
