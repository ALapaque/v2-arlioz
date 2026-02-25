"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "About", href: "#about", id: "001" },
  { label: "Services", href: "#services", id: "002" },
  { label: "Projects", href: "#portfolio", id: "003" },
  { label: "Team", href: "#team", id: "004" },
  { label: "Contact", href: "#contact", id: "005" },
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
      start: 0, end: "max",
      onUpdate: (self) => {
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
      },
    });

    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 3.5, ease: "power3.out" });

    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <header ref={navRef} className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 opacity-0 ${scrolled ? "bg-void/80 backdrop-blur-2xl" : ""}`}>
        <div ref={progressRef} className="absolute bottom-0 left-0 h-px w-full bg-cyan origin-left" style={{ transform: "scaleX(0)" }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/logo-arlioz.svg" alt="Arlioz" width={32} height={32} className="transition-transform duration-500 group-hover:scale-110" />
            <span className="text-[13px] font-bold tracking-[0.3em] uppercase font-[family-name:var(--font-mono)] text-cyan">
              Arlioz
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group px-4 py-2 text-[11px] text-text-muted hover:text-cyan transition-colors duration-300 font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="text-text-ghost group-hover:text-cyan-dim text-[9px] transition-colors">{l.id}</span>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-5 py-2 text-[11px] font-bold border border-cyan text-cyan hover:bg-cyan hover:text-void transition-all duration-300 font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">
              Contact
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden relative w-8 h-8 flex items-center justify-center" aria-label="Menu">
            <span className={`absolute w-5 h-px bg-cyan transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute w-5 h-px bg-cyan transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute w-5 h-px bg-cyan transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </header>

      {/* Mobile */}
      <div className={`fixed inset-0 z-[99] bg-void flex flex-col items-center justify-center gap-4 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-light font-[family-name:var(--font-display)] text-text-primary hover:text-cyan transition-colors py-2">
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
