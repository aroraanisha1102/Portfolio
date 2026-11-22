"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-[1240px] items-center justify-end rounded-full md:justify-between border py-2 pl-5 pr-2 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-night/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2.5 text-[14px] text-white/70 transition-colors hover:text-white sm:inline-block"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-lime px-5 py-2.5 text-[14px] font-medium text-black transition-colors hover:bg-lime-2"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
