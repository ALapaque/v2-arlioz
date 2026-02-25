"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Restomax Book",
    type: "Plateforme Web",
    desc: "Plateforme de réservation restaurant avec widget intégrable, dashboard de gestion et paiement en ligne.",
    tags: ["Next.js", "TypeScript", "API REST", "Stripe"],
    year: "2024",
    featured: true,
  },
  {
    title: "Hawaiian Pokebowl",
    type: "Application Mobile",
    desc: "Application de commande en ligne cross-platform avec suivi en temps réel.",
    tags: ["React Native", "NestJS"],
    year: "2023",
    featured: false,
  },
  {
    title: "Supermark'Ett",
    type: "Application Cross-platform",
    desc: "Application de gestion et commande pour retail avec synchronisation en temps réel.",
    tags: ["Angular", "NestJS", "PWA"],
    year: "2023",
    featured: false,
  },
  {
    title: "JK Studio",
    type: "Site Web",
    desc: "Site vitrine avec design minimal, animations soignées et performance optimale.",
    tags: ["Next.js", "GSAP"],
    year: "2022",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pj-num", { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: ".pj-num", start: "top 88%" },
      });
      gsap.fromTo(".pj-h", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".pj-title", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".pj-card").forEach((card) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, clipPath: "inset(4% 0 4% 0)" },
          {
            y: 0, opacity: 1, clipPath: "inset(0% 0 0% 0)", duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%" },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" ref={sectionRef} className="py-32 lg:py-44">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="pj-num section-num font-[family-name:var(--font-mono)]">03 Projets</div>
        <h2 className="pj-title font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3.2rem] font-800 leading-[1.05] tracking-tight mb-16">
          <span className="pj-h block">Réalisations</span>
          <span className="pj-h block text-muted font-300">sélectionnées.</span>
        </h2>

        {/* Featured project — full width, larger */}
        <article className="pj-card group mb-4">
          <div className="card-base overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-52 lg:h-auto bg-gradient-to-br from-accent/10 via-surface to-teal/5 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
                <div className="absolute top-5 left-6 font-[family-name:var(--font-sans)] text-7xl font-900 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700 text-accent">01</div>
                <span className="absolute bottom-5 left-6 text-[9px] text-accent font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{featured.type}</span>
                <span className="absolute top-5 right-6 text-[10px] text-dim font-[family-name:var(--font-mono)]">{featured.year}</span>
              </div>
              <div className="lg:col-span-5 p-7 lg:p-10 flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-sans)] text-2xl lg:text-3xl font-700 mb-3 group-hover:text-accent transition-colors duration-300">{featured.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed mb-6 font-[family-name:var(--font-sans)]">{featured.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[9px] border border-border text-dim font-[family-name:var(--font-mono)] tracking-[0.12em] uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Remaining projects — 3-column grid, smaller */}
        <div className="grid md:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <article key={p.title} className="pj-card group">
              <div className="card-base h-full overflow-hidden">
                <div className="relative h-36 bg-gradient-to-br from-accent/5 to-surface overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: "radial-gradient(circle, var(--color-text) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }} />
                  <div className="absolute top-4 left-5 font-[family-name:var(--font-sans)] text-5xl font-900 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700">{String(i + 2).padStart(2, "0")}</div>
                  <span className="absolute bottom-3 left-5 text-[9px] text-muted font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{p.type}</span>
                  <span className="absolute top-4 right-5 text-[10px] text-dim font-[family-name:var(--font-mono)]">{p.year}</span>
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-[family-name:var(--font-sans)] text-base font-700 mb-1.5 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                  <p className="text-muted text-[13px] leading-relaxed mb-4 font-[family-name:var(--font-sans)]">{p.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[9px] border border-border text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">{t}</span>
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
