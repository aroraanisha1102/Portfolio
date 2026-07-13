"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="display text-sm font-bold tracking-tight">
          Anisha Arora
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-[13px] text-muted sm:inline">
            <span className="mr-1.5 text-amber">✦</span>
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bone transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
