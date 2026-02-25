"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.2 });

      // Staggered headline reveal with skew
      tl.fromTo(line1Ref.current, { y: 80, opacity: 0, skewY: 3 }, { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out" })
        .fromTo(line2Ref.current, { y: 80, opacity: 0, skewY: 3 }, { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .fromTo(line3Ref.current, { y: 60, opacity: 0, skewY: 2 }, { y: 0, opacity: 1, skewY: 0, duration: 0.9, ease: "power3.out" }, "-=0.6")
        .fromTo(subRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .fromTo(ctaRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .fromTo(logoRef.current, { scale: 0.5, opacity: 0, rotate: -45 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.6, ease: "elastic.out(1, 0.5)" }, "-=1.2")
        .fromTo(metaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2");

      // Parallax on scroll — different speeds create depth
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(line1Ref.current, { y: p * -60, opacity: 1 - p * 2 });
          gsap.set(line2Ref.current, { y: p * -40, opacity: 1 - p * 2 });
          gsap.set(line3Ref.current, { y: p * -25, opacity: 1 - p * 2.5 });
          gsap.set(logoRef.current, { y: p * -100, scale: 1 - p * 0.3, rotation: p * 15, opacity: 1 - p * 1.6 });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-28 pb-16">
        {/* Asymmetric 7/5 grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-[family-name:var(--font-sans)] leading-[0.9] tracking-[-0.04em] mb-8">
              <span ref={line1Ref} className="block text-[clamp(2.6rem,7vw,5rem)] font-300 text-muted opacity-0">
                Nous créons des
              </span>
              <span ref={line2Ref} className="block text-[clamp(3rem,8.5vw,6.5rem)] font-800 opacity-0">
                applications
              </span>
              <span ref={line3Ref} className="block text-[clamp(3rem,8.5vw,6.5rem)] font-800 opacity-0">
                <span className="grad-text">sur mesure.</span>
              </span>
            </h1>

            <p ref={subRef} className="text-muted text-[17px] leading-[1.8] max-w-lg mb-8 opacity-0 font-[family-name:var(--font-sans)]">
              Arlioz transforme vos idées en produits digitaux concrets — applications web, mobile et APIs — avec une exécution technique irréprochable.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 opacity-0">
              <a href="#contact" className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white font-medium text-[13px] rounded-md hover:bg-accent/85 transition-all duration-300 font-[family-name:var(--font-sans)]">
                Démarrer un projet
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#projects" className="inline-flex items-center px-6 py-3 text-muted hover:text-text text-[13px] transition-colors duration-300 font-[family-name:var(--font-sans)] gap-1.5">
                Voir nos projets
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          {/* Logo — intentionally offset, layered depth */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div ref={logoRef} className="relative opacity-0">
              {/* Glow behind */}
              <div className="absolute inset-[-20px] bg-accent/[0.03] rounded-full blur-[80px]" />
              {/* Orbits */}
              <div className="absolute inset-[-35px] rounded-full border border-accent/[0.06] animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[-70px] rounded-full border border-dim/20 animate-[spin_50s_linear_infinite_reverse]" />
              <Image src="/logo-arlioz.svg" alt="Arlioz" width={280} height={280} priority className="relative z-10 animate-[float_6s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Bottom meta bar — asymmetric placement */}
        <div ref={metaRef} className="mt-20 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 opacity-0">
          <div className="flex flex-wrap items-center gap-6">
            {[
              { label: "Based in Belgium", dot: "bg-teal" },
              { label: "Since 2018", dot: "bg-accent" },
              { label: "50+ Projects", dot: "bg-accent" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full ${item.dot} animate-[pulse-dot_2.5s_ease-in-out_infinite]`} />
                <span className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{item.label}</span>
              </div>
            ))}
          </div>
          <span className="text-[10px] text-ghost font-[family-name:var(--font-mono)] tracking-widest">50.85°N 4.35°E</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndRef} className="absolute bottom-6 left-6 lg:left-10 flex items-center gap-2 opacity-0">
        <div className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-dim font-[family-name:var(--font-mono)]">Scroll</span>
      </div>
    </section>
  );
}
