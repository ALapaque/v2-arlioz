"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Frontend", desc: "Applications React, Next.js, Angular, Vue.js. Interfaces performantes et expériences immersives.", tags: ["React", "Next.js", "Angular", "Vue.js"], color: "#0ef" },
  { id: "02", title: "Backend", desc: "Architecture NestJS, APIs GraphQL & REST, microservices et intégrations complexes.", tags: ["NestJS", "TypeScript", "GraphQL", "Node.js"], color: "#22c55e" },
  { id: "03", title: "RGPD & DPO", desc: "Audit de conformité, DPO externalisé, Privacy by Design et accompagnement juridique.", tags: ["RGPD", "DPO", "Audit", "Conformité"], color: "#f43f5e" },
  { id: "04", title: "Design", desc: "UX Research, prototypage, design systems et identités visuelles sur mesure.", tags: ["UI/UX", "Prototyping", "Design System"], color: "#f5a623" },
];

export default function Services() {
  const s = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sv-tag", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".sv-tag", start: "top 85%" } });
      gsap.fromTo(".sv-h", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".sv-title", start: "top 82%" } });
      // Each card slides in with a horizontal scan
      gsap.utils.toArray<HTMLElement>(".sv-card").forEach((card, i) => {
        gsap.fromTo(card, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%" } });
      });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={s} className="relative py-32 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="sv-tag section-tag font-[family-name:var(--font-mono)]">002 Services</div>
        <h2 className="sv-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-800 leading-[1.02] tracking-tight mb-16">
          <span className="sv-h block">Ce que nous</span>
          <span className="sv-h block text-text-muted font-300">faisons le mieux.</span>
        </h2>

        <div className="space-y-2">
          {services.map((sv) => (
            <div key={sv.id} className="sv-card group glow-border bg-surface p-7 lg:p-9 cursor-default">
              <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                <div className="flex items-center gap-3 lg:w-16 shrink-0">
                  <div className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ background: sv.color }} />
                  <span className="text-text-ghost text-[12px] font-[family-name:var(--font-mono)]">{sv.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-700 mb-2 group-hover:text-cyan transition-colors duration-400">{sv.title}</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">{sv.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 lg:w-64 lg:justify-end shrink-0">
                  {sv.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[9px] border border-line text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase group-hover:border-line-active group-hover:text-text-muted transition-all duration-400">{t}</span>
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
