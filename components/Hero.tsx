"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";
import { Star, Sparkle, Squiggle, ArrowDoodle, Underline } from "./Doodles";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.rotating.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24">
      {/* doodles */}
      <Star className="animate-wiggle absolute left-[8%] top-[22%] h-10 w-10 text-coral" />
      <Sparkle className="animate-floaty absolute right-[14%] top-[24%] h-8 w-8 text-teal" />
      <Star className="animate-floaty absolute right-[9%] bottom-[26%] h-7 w-7 text-indigo" />
      <Sparkle className="animate-wiggle absolute left-[12%] bottom-[24%] h-6 w-6 text-berry" />

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5 }}
          className="sketch inline-flex items-center gap-2 bg-paper px-4 py-1.5 text-base font-bold shadow-pop-sm"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          AI-first · open to Strategy / Ops & AI-GTM roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-6xl leading-[0.95] text-ink sm:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            <span className="marker" style={{ ["--hl" as string]: "#f6d365" }}>
              Anisha
            </span>
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 flex flex-wrap items-baseline gap-x-3 text-3xl text-ink sm:text-5xl"
        >
          <span>I do</span>
          <span className="relative inline-flex h-[1.2em] min-w-[7ch] items-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.rotating[i]}
                initial={{ y: 18, opacity: 0, rotate: 4 }}
                animate={{ y: 0, opacity: 1, rotate: -1 }}
                exit={{ y: -18, opacity: 0, rotate: -4 }}
                transition={{ duration: 0.35 }}
                className="absolute left-0 whitespace-nowrap font-bold text-coral"
              >
                {profile.rotating[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 max-w-xl text-xl leading-relaxed text-ink-soft"
        >
          {profile.tagline} From enterprise sales in India to the engine room of a venture-backed AI
          startup in the US — bias for action, allergic to fluff, always shipping.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#journey"
            className="sketch bg-coral px-6 py-3 text-lg font-bold text-cream shadow-pop transition-transform hover:-translate-y-1"
          >
            Walk my journey →
          </a>
          <a
            href="#projects"
            className="sketch-alt bg-paper px-6 py-3 text-lg font-bold text-ink shadow-pop transition-transform hover:-translate-y-1"
          >
            Peek at the AI Lab
          </a>
        </motion.div>

        <div className="mt-16 flex items-end gap-3 text-ink-soft">
          <ArrowDoodle className="animate-bob h-14 w-10 text-coral" />
          <span className="mb-2 font-display text-2xl">start here — follow the road</span>
          <Squiggle className="mb-3 hidden h-4 w-24 text-teal sm:block" />
        </div>
      </div>

      <Underline className="pointer-events-none absolute bottom-0 left-1/2 h-4 w-[120%] -translate-x-1/2 text-line" />
    </section>
  );
}
