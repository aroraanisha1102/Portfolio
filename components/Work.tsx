import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work() {
  return (
    <section id="work" className="bg-night text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <SectionHead
          dark
          index="05"
          label="Selected work"
          title={
            <>
              Built, shipped, <span className="text-white/40">in use.</span>
            </>
          }
          aside="AI products, dashboards, and automations I've built at work and on weekends."
        />

        <div className="mt-16 grid gap-3 md:grid-cols-2">
          {projects.map((p, i) => {
            const className =
              "group flex h-full min-h-[280px] flex-col justify-between rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-lime/40 sm:p-9";
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {p.status}
                  </span>
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-all ${
                      p.href
                        ? "group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-black"
                        : "text-[12px] tabular-nums text-white/40"
                    }`}
                  >
                    {p.href ? "↗" : String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-14">
                  <h3 className="text-[clamp(1.75rem,3vw,2.4rem)] leading-tight tracking-[-0.04em]">{p.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/55">{p.blurb}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="h-full">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
