"use client";

import { impactMetrics, marqueeItems } from "@/lib/data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section id="impact" className="relative border-y border-line bg-ink-soft/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">By the numbers</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            Results, not just responsibilities
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {impactMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="h-full bg-panel/60 p-6 sm:p-8">
                <div className="text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
                  <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} compact={m.compact} />
                </div>
                <p className="mt-3 text-sm leading-snug text-fog">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-panel/50 px-5 py-2 text-sm text-mist"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
