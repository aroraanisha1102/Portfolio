import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-coal text-bone">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-bone-soft">
            Contact
          </p>
          <h2 className="mt-6 text-[clamp(3.2rem,10vw,8.5rem)] font-bold lowercase leading-[0.9] tracking-[-0.04em]">
            let&apos;s <span className="serif-accent text-amber">talk.</span>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-bone-soft">
            The best conversations start with a hard problem. Bring me one —
            AI, ops, go-to-market, or something that doesn&apos;t have a name yet.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="display border-b-2 border-amber pb-1 text-lg font-bold tracking-tight transition-colors hover:text-amber sm:text-2xl"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-bone-soft transition-colors hover:text-bone"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-bone-soft transition-colors hover:text-bone"
            >
              Resume ↓
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-line-dark py-6 text-[12px] text-bone-soft">
          <span>© {new Date().getFullYear()} Anisha Arora · {profile.location}</span>
          <span>Designed &amp; vibe-coded by me — naturally.</span>
        </div>
      </div>
    </section>
  );
}
