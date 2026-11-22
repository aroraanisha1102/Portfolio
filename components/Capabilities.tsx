import { capabilities } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-paper text-black">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="04"
          label="Capabilities"
          title={
            <>
              What I bring <span className="text-black/40">to the team.</span>
            </>
          }
          aside="A generalist operator with depth where scaling teams need it most."
        />

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <span className="text-[13px] tabular-nums text-black/40">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <h3 className="mt-10 text-[26px] leading-[1.1] tracking-[-0.035em]">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/60">{c.body}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-paper px-3 py-1 text-[12px] text-black/70 transition-colors group-hover:bg-lime group-hover:text-black"
                    >
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
