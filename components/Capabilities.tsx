import { capabilities } from "@/lib/data";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold lowercase leading-none tracking-[-0.04em]">
            what i do
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {capabilities.map((c, i) => (
            <Reveal key={c.index} delay={i * 0.08}>
              <div className="border-t border-ink/60 pt-6">
                <span className="display text-[13px] font-bold text-amber">{c.index}</span>
                <h3 className="display mt-3 text-2xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{c.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-[12px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
