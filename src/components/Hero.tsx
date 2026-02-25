"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const h1aRef = useRef<HTMLSpanElement>(null);
  const h1bRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3 });

      tl.fromTo(tagRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(h1aRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.2")
        .fromTo(h1bRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .fromTo(logoRef.current, { scale: 0.6, opacity: 0, rotate: -60 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: "elastic.out(1,0.6)" }, "-=1")
        .fromTo(indicatorsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

      // Scroll parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          const v = self.progress;
          gsap.set(h1aRef.current, { y: v * -80, opacity: 1 - v * 2.5 });
          gsap.set(h1bRef.current, { y: v * -50, opacity: 1 - v * 2.5 });
          gsap.set(logoRef.current, { y: v * -120, scale: 1 - v * 0.3, rotation: v * 20, opacity: 1 - v * 1.8 });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div ref={tagRef} className="opacity-0 mb-6">
              <span className="section-label font-[family-name:var(--font-mono)]">Agence digitale belge</span>
            </div>

            <h1 className="font-[family-name:var(--font-sans)] leading-[0.92] tracking-tight mb-6">
              <span ref={h1aRef} className="block text-[clamp(2.8rem,7.5vw,5.5rem)] font-800 opacity-0">
                Applications
              </span>
              <span ref={h1bRef} className="block text-[clamp(2.8rem,7.5vw,5.5rem)] font-800 opacity-0">
                <span className="gradient-text">sur mesure</span>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-text-secondary text-lg leading-relaxed max-w-md mb-8 opacity-0 font-[family-name:var(--font-sans)]"
            >
              Nous concevons et développons des applications web et mobile qui transforment vos idées en produits digitaux performants.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3 opacity-0">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-blue text-white font-medium text-sm rounded-lg hover:bg-blue/85 transition-all duration-300 font-[family-name:var(--font-sans)]"
              >
                Démarrer un projet
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-border text-text-secondary hover:text-text hover:border-border-hover text-sm rounded-lg transition-all duration-300 font-[family-name:var(--font-sans)]"
              >
                Voir nos projets
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div ref={logoRef} className="relative opacity-0">
              <div className="absolute inset-[-40px] rounded-full border border-blue/[0.08] animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-[-80px] rounded-full border border-teal/[0.05] animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-blue/[0.04] rounded-full blur-[60px]" />
              <Image
                src="/logo-arlioz.svg"
                alt="Arlioz"
                width={300}
                height={300}
                priority
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        <div ref={indicatorsRef} className="mt-14 flex flex-wrap items-center gap-5 opacity-0">
          {["Next.js & React", "TypeScript natif", "Applications sur mesure"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">{s}</span>
            </div>
          ))}
        </div>

        <div ref={scrollRef} className="absolute bottom-8 left-6 lg:left-8 flex items-center gap-2 opacity-0">
          <div className="w-px h-8 bg-gradient-to-b from-blue/40 to-transparent" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-dim font-[family-name:var(--font-mono)]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
