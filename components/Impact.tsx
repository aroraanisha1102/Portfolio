import { stats } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Impact() {
  return (
    <section id="impact" className="bg-night text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <SectionHead
          dark
          index="01"
          label="Impact"
          title={
            <>
              Results, not <span className="text-white/40">responsibilities.</span>
            </>
          }
          aside="Revenue, margin, retention, and scale, measured across a YC startup and two enterprise sales orgs."
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col justify-between rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-lime/40 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-white/50">{s.label}</span>
                  <span className="text-[12px] tabular-nums text-white/30">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                </div>
                <div className="mt-12">
                  <div className="display text-[clamp(3.25rem,5vw,4.5rem)] leading-none tracking-[-0.05em] text-white transition-colors group-hover:text-lime">
                    {s.value}
                  </div>
                  <p className="mt-4 text-[15px] leading-snug text-white/55">{s.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
