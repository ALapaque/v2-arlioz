"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1 = useRef<HTMLSpanElement>(null);
  const titleLine2 = useRef<HTMLSpanElement>(null);
  const titleLine3 = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scrollIndicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3 });

      tl.fromTo(badgeRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
        .fromTo(titleLine1.current, { y: 100, opacity: 0, rotateX: 40 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out" }, "-=0.4")
        .fromTo(titleLine2.current, { y: 100, opacity: 0, rotateX: 40 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(titleLine3.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .fromTo(logoRef.current, { scale: 0.6, opacity: 0, rotate: -30 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" }, "-=1")
        .fromTo(scrollIndicRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          if (titleLine1.current) gsap.set(titleLine1.current, { y: p * -80, x: p * -40, opacity: 1 - p * 1.5 });
          if (titleLine2.current) gsap.set(titleLine2.current, { y: p * -60, x: p * 30, opacity: 1 - p * 1.5 });
          if (logoRef.current) gsap.set(logoRef.current, { y: p * -120, scale: 1 - p * 0.3, rotation: p * 20, opacity: 1 - p * 1.2 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div ref={badgeRef} className="flex items-center gap-3 mb-10 opacity-0">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="h-[1px] w-8 bg-accent/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-text-secondary font-[family-name:var(--font-mono)]">
                Belgique — Depuis 2018
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] leading-[0.88] tracking-[-0.04em] mb-8">
              <span ref={titleLine1} className="block text-[clamp(3rem,8vw,6.5rem)] font-900 opacity-0" style={{ transformOrigin: "left center" }}>
                Protection
              </span>
              <span ref={titleLine2} className="block text-[clamp(3rem,8vw,6.5rem)] font-900 text-accent opacity-0" style={{ transformOrigin: "left center" }}>
                des données
              </span>
              <span ref={titleLine3} className="block text-[clamp(1.6rem,4vw,3rem)] font-300 text-text-secondary mt-3 opacity-0">
                &amp; développement digital
              </span>
            </h1>

            <p ref={subtitleRef} className="text-text-secondary text-[17px] leading-[1.8] max-w-lg mb-12 opacity-0 font-[family-name:var(--font-body)]">
              Nous fusionnons expertise RGPD et ingénierie web pour construire des produits digitaux
              qui respectent vos utilisateurs et propulsent votre croissance.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-bold text-[12px] tracking-wider uppercase font-[family-name:var(--font-mono)] hover:bg-accent-hover transition-all duration-400 hover:gap-5">
                Démarrer un projet
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#portfolio" className="inline-flex items-center px-8 py-4 border border-border text-text-secondary hover:text-text hover:border-text-dim text-[12px] tracking-wider uppercase font-[family-name:var(--font-mono)] transition-all duration-400">
                Voir nos projets
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div ref={logoRef} className="relative opacity-0">
              <div className="absolute inset-[-40px] border border-accent/10 rounded-full animate-[rotate-slow_25s_linear_infinite]" />
              <div className="absolute inset-[-80px] border border-border/20 rounded-full animate-[rotate-slow_40s_linear_infinite_reverse]" />
              <div className="absolute inset-[-120px] border border-border/10 rounded-full animate-[rotate-slow_60s_linear_infinite]" />
              <div className="absolute inset-[-20px] bg-accent/[0.05] rounded-full blur-[80px]" />
              <Image src="/logo-arlioz.svg" alt="Arlioz" width={380} height={380} priority className="relative z-10 drop-shadow-[0_0_80px_rgba(245,166,35,0.1)]" />
            </div>
          </div>
        </div>

        <div ref={scrollIndicRef} className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-4 opacity-0">
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-[float_2s_ease-in-out_infinite]" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-text-dim font-[family-name:var(--font-mono)]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
