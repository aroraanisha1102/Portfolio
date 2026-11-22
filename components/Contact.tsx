import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px] bg-[radial-gradient(ellipse_55%_60%_at_50%_100%,rgba(182,244,25,0.09),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1240px] px-4 pt-28 sm:px-8 sm:pt-40">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/75">
              <span className="live-dot h-2 w-2 rounded-full bg-lime" />
              Available for new opportunities
            </span>
            <h2 className="mt-8 max-w-[14ch] text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.05em]">
              Let&apos;s build <span className="text-lime">what&apos;s next.</span>
            </h2>
            <p className="mt-8 max-w-[520px] text-[17px] leading-relaxed text-white/60">
              Hiring for Business Operations or Strategy &amp; Ops on a scaling team? I&apos;d
              love to hear what you&apos;re building and where operations can move the numbers.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-[15px] font-medium text-black transition-colors hover:bg-lime-2"
              >
                Email me
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-lime transition-transform group-hover:rotate-45">
                  ↗
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-[15px] text-[15px] transition-colors hover:border-white/60"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-28 grid gap-10 border-t border-white/10 py-12 sm:mt-36 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="display text-[26px] tracking-[-0.04em]">
              anisha<span className="text-lime">.</span>
            </a>
            <p className="mt-3 max-w-[30ch] text-[14px] leading-relaxed text-white/50">
              Business operations for teams that are scaling fast.
            </p>
          </div>
          <div>
            <p className="eyebrow text-white/40">Contact</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block break-all text-[14px] text-white/80 hover:text-lime"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-[14px] text-white/50">{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow text-white/40">Links</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-[14px] text-white/80 hover:text-lime"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[14px] text-white/80 hover:text-lime"
            >
              Resume ↓
            </a>
          </div>
          <div>
            <p className="eyebrow text-white/40">Sections</p>
            {[
              ["#impact", "Impact"],
              ["#experience", "Experience"],
              ["#work", "Work"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="mt-2 block text-[14px] text-white/80 first-of-type:mt-4 hover:text-lime">
                {label}
              </a>
            ))}
          </div>
        </footer>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-[12px] text-white/40">
          <span>© {new Date().getFullYear()} Anisha Arora. All rights reserved.</span>
          <span>Designed &amp; built by me, with Claude Code.</span>
        </div>
      </div>
    </section>
  );
}
