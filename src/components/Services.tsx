"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Développement Web",
    desc: "Applications React, Next.js, Angular et Vue.js. Interfaces rapides, accessibles et optimisées SEO.",
    tags: ["React", "Next.js", "TypeScript"],
    color: "var(--color-blue)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Applications Mobile",
    desc: "Apps cross-platform avec React Native. Une codebase, tous les appareils, performances natives.",
    tags: ["React Native", "iOS", "Android"],
    color: "var(--color-teal)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Backend & APIs",
    desc: "Architecture NestJS, APIs REST & GraphQL, microservices scalables et intégrations sur mesure.",
    tags: ["NestJS", "GraphQL", "Node.js"],
    color: "var(--color-orange)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Prototypage, design systems et interfaces utilisateur pensées pour la conversion et l'engagement.",
    tags: ["Figma", "Prototyping", "Design System"],
    color: "var(--color-blue)",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sv-label", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-label", start: "top 88%" },
      });
      gsap.fromTo(".sv-heading", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-heading", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".sv-card").forEach((card, i) => {
        gsap.fromTo(card, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span className="sv-label section-label font-[family-name:var(--font-mono)]">Nos services</span>
        <h2 className="sv-heading font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight tracking-tight mb-14">
          Ce que nous construisons<br />
          <span className="text-text-secondary font-300">pour vous.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((sv) => (
            <div key={sv.title} className="sv-card card p-7 lg:p-8 group cursor-default">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-400" style={{ background: `color-mix(in srgb, ${sv.color} 12%, transparent)`, color: sv.color }}>
                {sv.icon}
              </div>
              <h3 className="font-[family-name:var(--font-sans)] text-lg font-700 mb-2 group-hover:text-blue transition-colors duration-300">
                {sv.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5 font-[family-name:var(--font-sans)]">
                {sv.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sv.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] border border-border rounded-md text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
