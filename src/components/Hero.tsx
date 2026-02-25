"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sRef = useRef<HTMLElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const l1Ref = useRef<HTMLSpanElement>(null);
  const l2Ref = useRef<HTMLSpanElement>(null);
  const l3Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.2 });

      tl.fromTo(coordRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" })
        .fromTo(l1Ref.current, { y: 120, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: "power3.out" }, "-=0.3")
        .fromTo(l2Ref.current, { y: 120, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: "power3.out" }, "-=0.8")
        .fromTo(l3Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .fromTo(logoRef.current, { scale: 0.5, opacity: 0, rotate: -90 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: "elastic.out(1,0.5)" }, "-=1.2")
        .fromTo(statusRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.5")
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

      // Scroll parallax
      ScrollTrigger.create({
        trigger: sRef.current, start: "top top", end: "bottom top", scrub: 1.5,
        onUpdate: (p) => {
          const v = p.progress;
          gsap.set(l1Ref.current, { y: v * -100, opacity: 1 - v * 2 });
          gsap.set(l2Ref.current, { y: v * -70, x: v * 50, opacity: 1 - v * 2 });
          gsap.set(logoRef.current, { y: v * -150, scale: 1 - v * 0.4, rotation: v * 30, opacity: 1 - v * 1.5 });
        },
      });
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            {/* Coordinates */}
            <div ref={coordRef} className="flex items-center gap-3 mb-8 opacity-0">
              <span className="text-[10px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.2em]">50.8503°N 4.3517°E</span>
              <span className="text-text-ghost">&mdash;</span>
              <span className="text-[10px] text-cyan font-[family-name:var(--font-mono)] tracking-[0.2em]">BELGIQUE // 2018</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] leading-[0.85] tracking-[-0.05em] mb-8">
              <span ref={l1Ref} className="block text-[clamp(3.2rem,9vw,7rem)] font-900 opacity-0">Data</span>
              <span ref={l2Ref} className="block text-[clamp(3.2rem,9vw,7rem)] font-900 text-cyan opacity-0">Protection</span>
              <span ref={l3Ref} className="block text-[clamp(1.4rem,3.5vw,2.4rem)] font-300 text-text-muted mt-2 opacity-0 font-[family-name:var(--font-mono)] tracking-[0.05em]">
                {'{ développement_digital }'}
              </span>
            </h1>

            <p ref={descRef} className="text-text-muted text-[16px] leading-[1.9] max-w-lg mb-10 opacity-0 font-[family-name:var(--font-body)]">
              Nous fusionnons expertise RGPD et ingénierie web pour construire des produits digitaux sécurisés, performants et mémorables.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3 opacity-0">
              <a href="#contact" className="group inline-flex items-center gap-3 px-7 py-3.5 bg-cyan text-void font-bold text-[11px] tracking-[0.2em] uppercase font-[family-name:var(--font-mono)] hover:bg-cyan/80 transition-all duration-300">
                Démarrer un projet
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#portfolio" className="inline-flex items-center px-7 py-3.5 border border-line text-text-muted hover:text-cyan hover:border-cyan-dim text-[11px] tracking-[0.2em] uppercase font-[family-name:var(--font-mono)] transition-all duration-300">
                Voir nos projets
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div ref={logoRef} className="relative opacity-0">
              <div className="absolute inset-[-50px] border border-cyan/[0.06] rounded-full animate-[rotate-slow_30s_linear_infinite]" />
              <div className="absolute inset-[-100px] border border-line/30 rounded-full animate-[rotate-slow_50s_linear_infinite_reverse]" />
              <div className="absolute inset-[-10px] bg-cyan/[0.03] rounded-full blur-[80px]" />
              <Image src="/logo-arlioz.svg" alt="Arlioz" width={340} height={340} priority className="relative z-10 drop-shadow-[0_0_100px_rgba(0,238,255,0.08)]" />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div ref={statusRef} className="mt-16 flex items-center gap-6 opacity-0">
          {["RGPD compliant", "TypeScript native", "Secure by design"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="text-[10px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase">{s}</span>
            </div>
          ))}
        </div>

        {/* Scroll */}
        <div ref={scrollRef} className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-3 opacity-0">
          <div className="w-px h-10 bg-gradient-to-b from-cyan/50 to-transparent" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-text-ghost font-[family-name:var(--font-mono)]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
