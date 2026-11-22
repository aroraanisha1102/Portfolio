"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companies, profile } from "@/lib/data";

const ease = [0.19, 1, 0.22, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const strip = [...companies, ...companies];

  return (
    <section id="top" className="relative overflow-hidden bg-night text-white">
      {/* soft lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(182,244,25,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto grid min-h-svh max-w-[1240px] items-center gap-14 px-4 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <motion.div {...rise(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/75">
              <span className="live-dot h-2 w-2 rounded-full bg-lime" />
              Open to Business Operations roles
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-8 max-w-[13ch] text-[clamp(3rem,6.4vw,6rem)] leading-[0.95] tracking-[-0.05em]"
          >
            I build the operating systems that help <span className="text-lime">teams scale.</span>
          </motion.h1>

          <motion.p
            {...rise(0.18)}
            className="mt-8 max-w-[540px] text-[17px] leading-relaxed text-white/60 sm:text-[18px]"
          >
            I&apos;m Anisha, Business Operations Lead at{" "}
            <span className="text-white">Reframe (YC S21)</span>. I own P&amp;L, scaled
            MRR <span className="text-white">3.3× in 7 months</span>, launched new revenue
            lines, and run the teams and AI-powered systems that keep a fast-growing business
            on track.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-[15px] font-medium text-black transition-colors hover:bg-lime-2"
            >
              Start a conversation
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-lime transition-transform group-hover:rotate-45">
                ↗
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-[15px] text-[15px] text-white transition-colors hover:border-white/60"
            >
              View resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[260px] lg:max-w-[280px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
            <Image
              src="/anisha.jpg"
              alt="Portrait of Anisha Arora"
              fill
              priority
              sizes="(min-width: 1024px) 280px, 260px"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <div className="absolute inset-x-3 bottom-3 rounded-[16px] border border-white/10 bg-night/75 px-3.5 py-3 backdrop-blur-md">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[14px] tracking-[-0.02em] text-white">{profile.name}</p>
              <span className="shrink-0 rounded-full bg-lime px-2.5 py-0.5 text-[11px] font-medium text-black">
                {profile.relocation}
              </span>
            </div>
            <p className="mt-0.5 text-[12px] text-white/55">
              {profile.role} · {profile.base}
            </p>
          </div>
        </motion.div>
      </div>

      {/* company strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative border-t border-white/10"
      >
        <div className="mx-auto flex max-w-[1240px] items-center gap-8 px-4 py-6 sm:px-8">
          <span className="eyebrow hidden shrink-0 text-white/40 md:block">Experience at</span>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track" aria-hidden>
              {strip.map((c, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[20px] tracking-[-0.03em] text-white/55 sm:text-[22px]"
                >
                  {c}
                  <span className="mx-8 h-1.5 w-1.5 rounded-full bg-lime/70" />
                </span>
              ))}
            </div>
            <span className="sr-only">{companies.join(", ")}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
