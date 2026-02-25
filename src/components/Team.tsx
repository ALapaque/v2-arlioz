"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const members = [
  { name: "Amaury Lapaque", role: "Fullstack Developer", bio: "Architecte de solutions web modernes. Expert React, Next.js et TypeScript. Passionné par le code propre et les expériences utilisateur exceptionnelles.", skills: ["React", "Next.js", "NestJS", "TypeScript"], initials: "AL", color: "#F5A623" },
  { name: "Guy Moins", role: "IT Architect & GDPR Expert", bio: "Expert en architecture IT et conformité RGPD. DPO certifié accompagnant les entreprises dans leur mise en conformité et la protection de leurs données.", skills: ["RGPD", "DPO", "Architecture IT", "Audit"], initials: "GM", color: "#2BA88C" },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".team-label", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".team-label", start: "top 85%" },
      });

      gsap.fromTo(".team-title-line", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".team-title", start: "top 82%" },
      });

      gsap.fromTo(".team-card", { y: 70, opacity: 0, rotateY: 5 }, {
        y: 0, opacity: 1, rotateY: 0, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".team-cards", start: "top 82%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="relative py-32 lg:py-44" style={{ perspective: "1000px" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="team-label flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">L&apos;équipe</span>
        </div>

        <h2 className="team-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.8rem] font-800 leading-[1.02] tracking-tight mb-20">
          <span className="team-title-line block">Les esprits</span>
          <span className="team-title-line block text-text-secondary font-300">derrière Arlioz.</span>
        </h2>

        <div className="team-cards grid md:grid-cols-2 gap-4">
          {members.map((m) => (
            <div key={m.name} className="team-card group border border-border p-8 lg:p-10 card-hover">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 border flex items-center justify-center shrink-0" style={{ borderColor: `${m.color}30`, background: `${m.color}08` }}>
                  <span className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: m.color }}>
                    {m.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-700 group-hover:text-accent transition-colors duration-400">
                    {m.name}
                  </h3>
                  <p className="text-[12px] font-[family-name:var(--font-mono)] tracking-wider mt-1" style={{ color: m.color }}>
                    {m.role}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary text-[15px] leading-[1.8] mb-8 font-[family-name:var(--font-body)]">{m.bio}</p>

              <div className="flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-[10px] border border-border text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase group-hover:border-border-hover transition-colors duration-400">
                    {s}
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
