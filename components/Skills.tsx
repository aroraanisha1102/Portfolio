"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

const accentMap: Record<string, string> = {
  indigo: "from-indigo/20 text-indigo",
  cyan: "from-cyan/20 text-cyan",
  amber: "from-amber/20 text-amber",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">Toolkit</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
          What I bring to the table
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <div className="card-glass h-full rounded-2xl p-6">
              <div
                className={`mb-5 inline-flex rounded-lg bg-gradient-to-b to-transparent px-3 py-1.5 text-sm font-semibold ${
                  accentMap[group.accent]
                }`}
              >
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-ink/50 px-3 py-1.5 text-sm text-mist transition-colors hover:border-fog/50 hover:text-cloud"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
