"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Sparkle, Star } from "./Doodles";

const accentBg: Record<Project["accent"], string> = {
  coral: "bg-coral",
  amber: "bg-amber",
  teal: "bg-teal",
  indigo: "bg-indigo",
  berry: "bg-berry",
};

const statusStyle: Record<Project["status"], string> = {
  Building: "bg-amber",
  Prototype: "bg-teal",
  Soon: "bg-indigo text-cream",
  Idea: "bg-berry text-cream",
  Live: "bg-coral text-cream",
};

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <Sparkle className="animate-floaty h-7 w-7 text-teal" />
          <h2 className="text-5xl text-ink sm:text-6xl">The AI Lab</h2>
          <Sparkle className="animate-floaty h-7 w-7 text-coral" />
        </div>
        <p className="mx-auto mt-3 max-w-lg text-lg text-ink-soft">
          A living workbench of AI things I&apos;m building to make strategy & ops smarter. I ship,
          learn, and keep adding — check back for more.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`paper-card sketch group p-5 shadow-pop transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${tilts[i % tilts.length]}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className={`h-9 w-9 shrink-0 ${accentBg[p.accent]} sketch-alt shadow-pop-sm`} />
              <span className={`sketch px-2.5 py-0.5 text-sm font-bold ${statusStyle[p.status]}`}>
                {p.status}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl leading-none text-ink">{p.title}</h3>
            <p className="mt-2 text-[0.98rem] leading-snug text-ink-soft">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border-2 border-ink/70 px-2.5 py-0.5 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* more brewing */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="sketch grid place-items-center border-dashed p-5 text-center"
        >
          <div>
            <Star className="animate-wiggle mx-auto h-9 w-9 text-amber" />
            <p className="mt-2 font-display text-3xl leading-none text-ink">More brewing…</p>
            <p className="mt-1 text-base text-ink-soft">new experiments land here often</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
