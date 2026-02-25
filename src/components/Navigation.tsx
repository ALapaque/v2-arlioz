"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`;
      },
    });

    gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: 3.2, ease: "power3.out",
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 opacity-0 ${
          scrolled ? "bg-bg/70 backdrop-blur-2xl border-b border-border" : ""
        }`}
      >
        <div
          ref={barRef}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          style={{ transform: "scaleX(0)", background: "linear-gradient(90deg, var(--color-blue), var(--color-teal))" }}
        />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/logo-arlioz.svg"
              alt="Arlioz"
              width={30}
              height={30}
              className="transition-transform duration-400 group-hover:scale-110"
            />
            <span className="text-sm font-semibold tracking-wide font-[family-name:var(--font-sans)]">
              Arlioz
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[13px] text-text-secondary hover:text-text transition-colors duration-300 font-[family-name:var(--font-sans)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 text-[13px] font-medium bg-blue text-white rounded-lg hover:bg-blue/85 transition-colors duration-300 font-[family-name:var(--font-sans)]"
            >
              Nous contacter
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
          >
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[99] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-light font-[family-name:var(--font-sans)] text-text hover:text-blue transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
