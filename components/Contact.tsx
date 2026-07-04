"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/15 blur-3xl" />
        <div className="dotgrid absolute inset-0 opacity-25" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">Next stop?</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
            Let&apos;s build the next chapter — <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
            I&apos;m looking for Strategy, Ops & GTM roles at AI companies where I can turn ambiguity
            into measurable growth. If that sounds like your team, I&apos;d love to talk.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo/25 transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:border-indigo/60"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-fog">
            <span>{profile.email}</span>
            <span className="hidden sm:inline text-line">•</span>
            <span>{profile.phone}</span>
            <span className="hidden sm:inline text-line">•</span>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-line px-5 pt-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-fog sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed & built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </section>
  );
}
