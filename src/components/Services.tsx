"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", title: "Développement Frontend", desc: "Applications web modernes et performantes. Interfaces élégantes et expériences utilisateur immersives qui convertissent.", tags: ["React", "Next.js", "Angular", "Vue.js", "Nuxt.js"], color: "#F5A623" },
  { num: "02", title: "Développement Backend", desc: "Architecture serveur robuste et scalable. APIs RESTful, GraphQL, microservices et intégrations sur mesure.", tags: ["NestJS", "TypeScript", "Node.js", "GraphQL"], color: "#2BA88C" },
  { num: "03", title: "RGPD & DPO Externalisé", desc: "Audit de conformité, mise en place de politiques de protection des données, DPO externalisé et accompagnement continu.", tags: ["RGPD", "DPO", "Audit", "Conformité", "Privacy by Design"], color: "#E85D4A" },
  { num: "04", title: "Design & UX/UI", desc: "Conception d'interfaces centrées utilisateur. Prototypage, design systems et identités visuelles mémorables.", tags: ["UI Design", "UX Research", "Prototyping", "Design System"], color: "#4A8AF5" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-label", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".services-label", start: "top 85%" },
      });

      gsap.fromTo(".services-title-line", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".services-title", start: "top 82%" },
      });

      gsap.fromTo(".service-card", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".service-cards", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="services-label flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">Services</span>
        </div>

        <h2 className="services-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.8rem] font-800 leading-[1.02] tracking-tight mb-20">
          <span className="services-title-line block">Ce que nous</span>
          <span className="services-title-line block text-text-secondary font-300">faisons le mieux.</span>
        </h2>

        <div className="service-cards space-y-3">
          {services.map((s) => (
            <div key={s.num} className="service-card group border border-border p-8 lg:p-10 card-hover cursor-default">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                <div className="flex items-center gap-4 lg:w-20 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-400" style={{ background: s.color }} />
                  <span className="text-text-dim text-[13px] font-[family-name:var(--font-mono)]">{s.num}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-700 mb-3 group-hover:text-accent transition-colors duration-400">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">{s.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 lg:w-72 lg:justify-end shrink-0">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] border border-border text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-400">
                      {tag}
                    </span>
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
