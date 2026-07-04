"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stops } from "@/lib/data";
import JourneyMap from "./JourneyMap";

export default function Journey() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">The Journey</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
          From Mumbai to Manhattan to Atlanta
        </h2>
        <p className="mt-4 text-fog">
          Five stops, three cities, one throughline: turning messy problems into systems that
          grow revenue. Scroll to trace the route.
        </p>
      </div>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Sticky map */}
        <div className="sticky top-16 z-10 mb-8 lg:col-span-6 lg:mb-0 lg:self-start lg:top-24">
          <div className="rounded-2xl bg-ink/70 p-1 backdrop-blur-sm">
            <JourneyMap active={active} />
            <div className="mt-3 flex items-center justify-between px-2 text-xs text-fog">
              <span className="font-mono">
                Stop {String(active + 1).padStart(2, "0")} / {String(stops.length).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline">{stops[active].city}</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-6">
            {stops.map((s, i) => (
              <motion.div
                key={s.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`card-glass rounded-2xl p-6 transition-all duration-500 sm:p-7 ${
                  active === i ? "border-indigo/60 shadow-lg shadow-indigo/10" : ""
                }`}
              >
                <div className="flex items-center gap-2 text-xs text-fog">
                  <span className="text-base leading-none">{s.flag}</span>
                  <span>{s.city}</span>
                  <span className="text-line">•</span>
                  <span className="font-mono">{s.period}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-cloud">{s.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-indigo">
                  {s.org}
                  {s.note && <span className="ml-2 font-normal text-fog">· {s.note}</span>}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-mist">{s.summary}</p>

                <ul className="mt-4 space-y-2">
                  {s.results.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm text-mist">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan to-indigo" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.skills.map((sk) => (
                    <span
                      key={sk}
                      className="rounded-full border border-line bg-ink/60 px-3 py-1 text-xs text-mist"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
