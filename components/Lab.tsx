import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Lab() {
  return (
    <section id="lab" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold lowercase leading-none tracking-[-0.04em]">
            the lab
          </h2>
          <p className="max-w-xs text-[13px] leading-snug text-muted">
            Things I&apos;ve built with AI — at work and on weekends. Real tools,
            shipped fast with Claude Code &amp; Cursor.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group flex min-h-56 flex-col justify-between bg-card p-7 transition-colors hover:bg-paper-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    p.status === "Building" || p.status === "Live"
                      ? "bg-amber"
                      : "bg-ink/30"
                  }`}
                />
                {p.status}
              </span>
            </div>
            <div className="mt-8">
              <h3 className="display text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-[12px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex min-h-56 flex-col justify-between bg-coal p-7 text-bone">
          <span className="text-[13px] text-bone-soft">✦</span>
          <div>
            <h3 className="display text-2xl font-bold tracking-tight">
              Something&apos;s always <span className="serif-accent text-amber">cooking.</span>
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-bone-soft">
              This section changes often — the whole point is shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
