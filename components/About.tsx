import { credentials, principles } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">About</p>
          <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Give me something messy.
            <br />
            I&apos;ll hand back <span className="serif-accent text-amber">a system.</span>
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              Engineer by training, MBA by choice, operator by obsession. I started on
              enterprise sales floors in India — HPE, then Salesforce — crossed the
              world for a master&apos;s at NYU, and now run strategy &amp; operations
              at a YC-backed AI startup in Atlanta.
            </p>
            <p>
              The throughline: I don&apos;t just recommend — I build. Every role, I&apos;ve
              ended up shipping the tool I wished existed, whether that&apos;s an AI
              coaching product for 40K+ users or an LLM quietly running a CRM.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-ink/60">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
              >
                <span className="text-[14px] font-medium">{c.label}</span>
                <span className="text-[13px] text-muted">{c.detail}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title}>
                <span className="display text-[13px] font-bold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-1 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
