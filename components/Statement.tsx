import Reveal from "./Reveal";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-[0.25em] inline-flex -translate-y-[0.12em] items-center rounded-full bg-lime px-[0.45em] py-[0.08em] align-middle text-[0.62em] leading-none tracking-[-0.02em] text-black">
      {children}
    </span>
  );
}

export default function Statement() {
  return (
    <section className="bg-paper text-black">
      <div className="mx-auto max-w-[1240px] px-4 py-28 sm:px-8 sm:py-40">
        <Reveal>
          <p className="eyebrow text-black/50">The short version</p>
          <p className="display mt-8 text-[clamp(2rem,4.4vw,3.9rem)] leading-[1.08] tracking-[-0.04em]">
            Leaders hand me the messy problems: pricing <Chip>P&amp;L</Chip>, churn and
            refunds <Chip>CS</Chip>, new revenue lines <Chip>GTM</Chip>, and teams that
            outgrew their process <Chip>People</Chip>.{" "}
            <span className="text-black/40">
              I hand back systems that run, and numbers that move.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
