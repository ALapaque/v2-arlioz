"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Restomax Book", type: "Website & Widget", desc: "Plateforme de réservation en ligne pour restaurants. Interface intuitive et widget intégrable clé en main.", tags: ["Next.js", "TypeScript", "API"], color: "#F5A623", year: "2023" },
  { title: "Hawaiian Pokebowl", type: "Application cross-platform", desc: "Application mobile et web pour commande en ligne. Expérience fluide et design sur mesure.", tags: ["React Native", "NestJS", "Mobile"], color: "#2BA88C", year: "2023" },
  { title: "Supermark'Ett", type: "Application cross-platform", desc: "Application de gestion et commande pour supermarché. Interface optimisée pour le retail.", tags: ["Angular", "NestJS", "PWA"], color: "#E85D4A", year: "2022" },
  { title: "JK Studio", type: "Website", desc: "Site vitrine pour studio créatif. Design minimaliste et animations soignées.", tags: ["Next.js", "Framer Motion", "Design"], color: "#4A8AF5", year: "2022" },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".portfolio-label", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".portfolio-label", start: "top 85%" },
      });

      gsap.fromTo(".portfolio-title-line", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".portfolio-title", start: "top 82%" },
      });

      // Projects with clip-path reveal
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, clipPath: "inset(10% 0% 10% 0%)" },
          {
            y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)",
            duration: 1, ease: "power3.out", delay: i * 0.08,
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="portfolio-label flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">Portfolio</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <h2 className="portfolio-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.8rem] font-800 leading-[1.02] tracking-tight">
            <span className="portfolio-title-line block">Projets</span>
            <span className="portfolio-title-line block text-text-secondary font-300">sélectionnés.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <article key={p.title} className={`project-card group ${i === 0 ? "md:row-span-2" : ""}`}>
              <div className="h-full border border-border overflow-hidden card-hover">
                {/* Visual */}
                <div className={`relative ${i === 0 ? "h-72 md:h-[55%]" : "h-52"} bg-bg-elevated overflow-hidden`}>
                  {/* Animated gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${p.color}15, transparent 70%)` }}
                  />
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-[0.025]" style={{
                    backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }} />
                  {/* Floating number */}
                  <div className="absolute top-6 left-6 font-[family-name:var(--font-display)] text-7xl font-900 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700" style={{ color: p.color }}>
                    0{i + 1}
                  </div>
                  <span className="absolute top-6 right-6 text-[11px] text-text-dim font-[family-name:var(--font-mono)]">{p.year}</span>
                  <span className="absolute bottom-6 left-6 text-[10px] font-[family-name:var(--font-mono)] tracking-wider uppercase" style={{ color: p.color }}>
                    {p.type}
                  </span>
                </div>

                <div className="p-7 lg:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-700 mb-3 group-hover:text-accent transition-colors duration-400">
                    {p.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-[family-name:var(--font-body)]">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] border border-border text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
