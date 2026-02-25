"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Services", href: "#services", num: "01" },
  { label: "À propos", href: "#about", num: "02" },
  { label: "Projets", href: "#projects", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
      },
    });

    gsap.fromTo(navRef.current, { y: -50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: 3.6, ease: "power3.out",
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 opacity-0 ${
          scrolled ? "bg-bg/60 backdrop-blur-2xl" : ""
        }`}
      >
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-px w-full bg-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <Image src="/logo-arlioz.svg" alt="Arlioz" width={28} height={28} className="transition-transform duration-400 group-hover:scale-105" />
            <span className="text-[13px] font-semibold tracking-[0.04em] font-[family-name:var(--font-sans)]">Arlioz</span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group px-4 py-2 text-[13px] text-muted hover:text-text transition-colors duration-300 font-[family-name:var(--font-sans)] flex items-center gap-1.5">
                <span className="text-[9px] text-dim group-hover:text-accent transition-colors font-[family-name:var(--font-mono)]">{l.num}</span>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-5 py-2 text-[12px] font-medium border border-accent/30 text-accent hover:bg-accent hover:text-white rounded-md transition-all duration-300 font-[family-name:var(--font-sans)]">
              Nous contacter
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden relative w-8 h-8 flex items-center justify-center" aria-label="Menu">
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute w-5 h-px bg-text transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[99] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-5 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-2xl font-light font-[family-name:var(--font-sans)] text-text hover:text-accent transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
