"use client";

import { motion } from "framer-motion";
import { Star } from "./Doodles";

const traits = ["Go-getter", "AI-first", "Bias for action", "Systems thinker", "Zero fluff"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="paper-card sketch relative rotate-[-1deg] p-7 shadow-pop sm:p-10"
      >
        <Star className="animate-wiggle absolute -right-4 -top-4 h-10 w-10 text-amber" />
        <h2 className="text-4xl text-ink sm:text-5xl">A little about me</h2>
        <p className="mt-4 text-xl leading-relaxed text-ink">
          I&apos;m happiest turning chaos into systems that grow revenue. I went from enterprise
          sales in India to building the engine room of a venture-backed AI startup in the US — and
          I&apos;m AI-first by default: if a workflow can be smarter with an LLM or an agent,
          I&apos;ll build it.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {traits.map((t) => (
            <span key={t} className="sketch-alt bg-cream-deep px-3 py-1 text-lg shadow-pop-sm">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
