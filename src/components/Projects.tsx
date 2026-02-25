"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Restomax Book",
    type: "Web Platform",
    desc: "Plateforme de réservation restaurant avec widget intégrable et dashboard de gestion.",
    tags: ["Next.js", "TypeScript", "API REST"],
    gradient: "from-blue/20 to-teal/10",
    year: "2024",
  },
  {
    title: "Hawaiian Pokebowl",
    type: "Application Mobile",
    desc: "Application mobile et web de commande en ligne avec paiement intégré.",
    tags: ["React Native", "NestJS"],
    gradient: "from-teal/20 to-blue/10",
    year: "2023",
  },
  {
    title: "Supermark'Ett",
    type: "Application Cross-platform",
    desc: "Application de gestion et commande pour retail avec synchronisation en temps réel.",
    tags: ["Angular", "NestJS", "PWA"],
    gradient: "from-orange/20 to-blue/10",
    year: "2023",
  },
  {
    title: "JK Studio",
    type: "Site Web",
    desc: "Site vitrine avec design minimal, animations soignées et performance optimale.",
    tags: ["Next.js", "GSAP"],
    gradient: "from-blue/15 to-orange/10",
    year: "2022",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pj-label", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".pj-label", start: "top 88%" },
      });
      gsap.fromTo(".pj-heading", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".pj-heading", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".pj-card").forEach((card) => {
        gsap.fromTo(card,
          { y: 70, opacity: 0, clipPath: "inset(6% 0 6% 0)" },
          {
            y: 0, opacity: 1, clipPath: "inset(0% 0 0% 0)", duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%" },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span className="pj-label section-label font-[family-name:var(--font-mono)]">Projets</span>
        <h2 className="pj-heading font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight tracking-tight mb-14">
          Réalisations<br />
          <span className="text-text-secondary font-300">sélectionnées.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <article key={p.title} className={`pj-card group ${i === 0 ? "md:row-span-2" : ""}`}>
              <div className={`card h-full overflow-hidden ${i === 0 ? "flex flex-col" : ""}`}>
                <div className={`relative ${i === 0 ? "h-56 md:flex-1" : "h-44"} bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }} />
                  <div className="absolute top-4 right-4 text-[10px] text-text-dim font-[family-name:var(--font-mono)]">{p.year}</div>
                  <div className="absolute bottom-4 left-5 text-[10px] text-text-secondary font-[family-name:var(--font-mono)] tracking-widest uppercase">{p.type}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-sans)] text-lg font-700 mb-2 group-hover:text-blue transition-colors duration-300">{p.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 font-[family-name:var(--font-sans)]">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] border border-border rounded-md text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">{t}</span>
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
