"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Restomax Book", type: "Web Platform", desc: "Plateforme de réservation restaurant avec widget intégrable.", tags: ["Next.js", "TypeScript", "API"], color: "#0ef", year: "2023" },
  { title: "Hawaiian Pokebowl", type: "Cross-platform App", desc: "Application mobile et web commande en ligne.", tags: ["React Native", "NestJS"], color: "#22c55e", year: "2023" },
  { title: "Supermark'Ett", type: "Cross-platform App", desc: "Application gestion et commande pour retail.", tags: ["Angular", "NestJS", "PWA"], color: "#f43f5e", year: "2022" },
  { title: "JK Studio", type: "Website", desc: "Site vitrine, design minimal, animations soignées.", tags: ["Next.js", "Framer Motion"], color: "#f5a623", year: "2022" },
];

export default function Portfolio() {
  const s = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pf-tag", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".pf-tag", start: "top 85%" } });
      gsap.fromTo(".pf-h", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".pf-title", start: "top 82%" } });
      gsap.utils.toArray<HTMLElement>(".pf-card").forEach((c) => {
        gsap.fromTo(c, { y: 80, opacity: 0, clipPath: "inset(8% 0 8% 0)" }, {
          y: 0, opacity: 1, clipPath: "inset(0% 0 0% 0)", duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 90%" },
        });
      });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={s} className="relative py-32 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="pf-tag section-tag font-[family-name:var(--font-mono)]">003 Projects</div>
        <h2 className="pf-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-800 leading-[1.02] tracking-tight mb-16">
          <span className="pf-h block">Projets</span>
          <span className="pf-h block text-text-muted font-300">sélectionnés.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((p, i) => (
            <article key={p.title} className={`pf-card group ${i === 0 ? "md:row-span-2" : ""}`}>
              <div className="h-full glow-border bg-surface overflow-hidden">
                <div className={`relative ${i === 0 ? "h-64 md:h-[55%]" : "h-48"} bg-panel overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle at 30% 50%, ${p.color}12, transparent 70%)` }} />
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
                  <div className="absolute top-5 left-5 font-[family-name:var(--font-display)] text-6xl font-900 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" style={{ color: p.color }}>0{i + 1}</div>
                  <span className="absolute top-5 right-5 text-[10px] text-text-ghost font-[family-name:var(--font-mono)]">{p.year}</span>
                  <span className="absolute bottom-5 left-5 text-[9px] font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase" style={{ color: p.color }}>{p.type}</span>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-lg lg:text-xl font-700 mb-2 group-hover:text-cyan transition-colors duration-400">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 font-[family-name:var(--font-body)]">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="px-2 py-0.5 text-[9px] border border-line text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase">{t}</span>)}
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
