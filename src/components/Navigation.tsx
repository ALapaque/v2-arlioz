"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "A propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "Equipe", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll progress bar
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${self.progress})`;
        }
      },
    });

    // Nav entrance
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.2, ease: "power3.out" }
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 opacity-0 ${
          scrolled ? "bg-bg/80 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        {/* Scroll progress */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-[1px] w-full bg-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo-arlioz.svg"
              alt="Arlioz"
              width={36}
              height={36}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <span className="text-[14px] font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-display)]">
              Arlioz
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="accent-line px-4 py-2 text-[12px] text-text-secondary hover:text-text transition-colors duration-300 font-[family-name:var(--font-mono)] tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 px-6 py-2.5 text-[12px] font-bold bg-accent text-bg hover:bg-accent-hover transition-all duration-300 font-[family-name:var(--font-mono)] tracking-wider uppercase"
            >
              Parlons-en
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
          >
            <span
              className={`absolute w-5 h-[1.5px] bg-text transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-text transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-text transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[99] bg-bg transition-all duration-500 flex flex-col items-center justify-center gap-3 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-4xl font-light font-[family-name:var(--font-display)] text-text hover:text-accent transition-all duration-300 py-2"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
