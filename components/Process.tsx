import { process } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="approach" className="bg-night text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <SectionHead
          dark
          index="03"
          label="How I operate"
          title={
            <>
              From ambiguity to a <span className="text-white/40">running system.</span>
            </>
          }
          aside="The same playbook I've used to scale revenue, fix retention, and launch new business lines."
        />

        <div className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="group relative h-full border-t border-white/10 py-10">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-[14px] tabular-nums text-white/70 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                </div>
                <h3 className="mt-8 text-[26px] leading-tight tracking-[-0.035em]">{p.title}</h3>
                <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/55">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
