"use client";

import { motion } from "framer-motion";
import { toolkit } from "@/lib/data";

const rot = ["-rotate-1", "rotate-1", "-rotate-1"];

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-5xl text-ink sm:text-6xl">My toolkit</h2>
        <p className="mt-2 text-lg text-ink-soft">AI-first, data-driven, ship-focused.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {toolkit.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`paper-card sketch p-5 shadow-pop ${rot[i % rot.length]}`}
          >
            <h3 className="font-display text-3xl leading-none text-coral">{g.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="sketch bg-cream-deep px-3 py-1 text-base leading-tight">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
