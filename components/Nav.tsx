"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#impact", label: "Impact" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-ink/70 border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2 text-cloud">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo to-cyan text-sm font-bold text-ink">
            AA
          </span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fog transition-colors hover:text-cloud"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-line bg-panel/60 px-4 py-2 text-sm font-medium text-cloud transition-all hover:border-indigo hover:bg-indigo/10"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
