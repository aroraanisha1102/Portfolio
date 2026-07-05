"use client";

import { useEffect, useState } from "react";
import { Sparkle } from "./Doodles";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "AI Lab" },
  { href: "#toolkit", label: "Toolkit" },
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
        scrolled ? "border-b-2 border-ink/80 bg-cream/85 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" aria-label="Back to top" className="text-ink">
          <span className="sketch grid h-10 w-10 place-items-center bg-amber shadow-pop-sm transition-transform hover:-translate-y-0.5">
            <Sparkle className="h-5 w-5 text-ink" />
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg text-ink-soft transition-colors hover:text-ink hover:underline decoration-wavy decoration-amber underline-offset-4"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="sketch-alt bg-ink px-4 py-1.5 text-base font-bold text-cream shadow-pop-sm transition-transform hover:-translate-y-0.5"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
