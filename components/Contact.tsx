"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Sparkle, Squiggle } from "./Doodles";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <Sparkle className="animate-floaty absolute left-[12%] top-10 h-8 w-8 text-teal" />
      <Sparkle className="animate-wiggle absolute right-[14%] top-16 h-6 w-6 text-berry" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl leading-tight text-ink sm:text-7xl">
          Let&apos;s build the{" "}
          <span className="marker" style={{ ["--hl" as string]: "#7fd1c1" }}>
            next chapter
          </span>
        </h2>
        <Squiggle className="mx-auto mt-3 h-5 w-40 text-coral" />
        <p className="mx-auto mt-5 max-w-xl text-xl text-ink-soft">
          Looking for Strategy / Ops & AI-GTM roles at teams building with AI. If that&apos;s you,
          let&apos;s talk.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="sketch bg-coral px-7 py-3.5 text-xl font-bold text-cream shadow-pop transition-transform hover:-translate-y-1"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-alt bg-paper px-7 py-3.5 text-xl font-bold text-ink shadow-pop transition-transform hover:-translate-y-1"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch bg-paper px-7 py-3.5 text-xl font-bold text-ink shadow-pop transition-transform hover:-translate-y-1"
          >
            ↓ Resume
          </a>
        </div>

        <div className="mt-8 text-lg text-ink-soft">
          {profile.email} · {profile.location}
        </div>
      </motion.div>

      <footer className="mt-20 border-t-2 border-ink/60 pt-6 text-base text-ink-soft">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Handcrafted with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </section>
  );
}
