"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", title: "Développement Web", desc: "Applications React, Next.js, Angular. Interfaces rapides, accessibles et performantes.", tags: ["React", "Next.js", "Angular", "TypeScript"] },
  { num: "02", title: "Applications Mobile", desc: "Apps cross-platform React Native. Une codebase, tous les appareils, performances natives.", tags: ["React Native", "iOS", "Android"] },
  { num: "03", title: "Backend & APIs", desc: "Architecture NestJS, APIs REST & GraphQL, microservices scalables et intégrations complexes.", tags: ["NestJS", "GraphQL", "Node.js", "PostgreSQL"] },
  { num: "04", title: "UI/UX Design", desc: "Prototypage, design systems et interfaces pensées pour la conversion et l'engagement.", tags: ["Figma", "Prototyping", "Design System"] },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sv-num", { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-num", start: "top 88%" },
      });
      gsap.fromTo(".sv-h", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-title", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".sv-row").forEach((row, i) => {
        gsap.fromTo(row, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 lg:py-44">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="sv-num section-num font-[family-name:var(--font-mono)]">01 Services</div>
        <h2 className="sv-title font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3.2rem] font-800 leading-[1.05] tracking-tight mb-16">
          <span className="sv-h block">Ce que nous</span>
          <span className="sv-h block text-muted font-300">construisons pour vous.</span>
        </h2>

        {/* Horizontal service rows — not cards */}
        <div className="border-t border-border">
          {services.map((sv) => (
            <div key={sv.num} className="sv-row service-row group cursor-default">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 py-7 lg:py-8 px-4 lg:px-6">
                {/* Number */}
                <div className="lg:w-20 shrink-0">
                  <span className="text-[11px] text-dim group-hover:text-accent transition-colors duration-400 font-[family-name:var(--font-mono)] tracking-[0.15em]">{sv.num}</span>
                </div>
                {/* Title */}
                <div className="lg:w-64 shrink-0">
                  <h3 className="font-[family-name:var(--font-sans)] text-xl font-700 group-hover:text-accent transition-colors duration-300">{sv.title}</h3>
                </div>
                {/* Description */}
                <div className="flex-1 lg:px-8">
                  <p className="text-muted text-[14px] leading-relaxed font-[family-name:var(--font-sans)] max-w-md">{sv.desc}</p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 lg:w-56 lg:justify-end shrink-0">
                  {sv.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[9px] border border-border text-dim font-[family-name:var(--font-mono)] tracking-[0.12em] uppercase group-hover:border-border-active group-hover:text-muted transition-all duration-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
