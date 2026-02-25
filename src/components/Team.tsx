"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const members = [
  { name: "Amaury Lapaque", role: "Fullstack Developer", bio: "Architecte de solutions web modernes. Expert React, Next.js et TypeScript.", skills: ["React", "Next.js", "NestJS", "TypeScript"], initials: "AL", color: "#0ef" },
  { name: "Guy Moins", role: "IT Architect & GDPR Expert", bio: "Expert architecture IT et conformité RGPD. DPO certifié.", skills: ["RGPD", "DPO", "Architecture IT", "Audit"], initials: "GM", color: "#22c55e" },
];

export default function Team() {
  const s = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tm-tag", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".tm-tag", start: "top 85%" } });
      gsap.fromTo(".tm-h", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".tm-title", start: "top 82%" } });
      gsap.fromTo(".tm-card", { y: 60, opacity: 0, rotateY: 4 }, { y: 0, opacity: 1, rotateY: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".tm-cards", start: "top 84%" } });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={s} className="relative py-32 lg:py-44" style={{ perspective: "1200px" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="tm-tag section-tag font-[family-name:var(--font-mono)]">004 Team</div>
        <h2 className="tm-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-800 leading-[1.02] tracking-tight mb-16">
          <span className="tm-h block">Les esprits</span>
          <span className="tm-h block text-text-muted font-300">derrière Arlioz.</span>
        </h2>

        <div className="tm-cards grid md:grid-cols-2 gap-3">
          {members.map((m) => (
            <div key={m.name} className="tm-card group glow-border bg-surface p-8 lg:p-10">
              <div className="flex items-start gap-5 mb-7">
                <div className="w-14 h-14 border flex items-center justify-center shrink-0" style={{ borderColor: `${m.color}25`, background: `${m.color}06` }}>
                  <span className="text-base font-bold font-[family-name:var(--font-mono)]" style={{ color: m.color }}>{m.initials}</span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-700 group-hover:text-cyan transition-colors duration-400">{m.name}</h3>
                  <p className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.15em] mt-0.5" style={{ color: m.color }}>{m.role}</p>
                </div>
              </div>
              <p className="text-text-muted text-[14px] leading-[1.8] mb-7 font-[family-name:var(--font-body)]">{m.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {m.skills.map((sk) => <span key={sk} className="px-2.5 py-1 text-[9px] border border-line text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase group-hover:border-line-active transition-colors duration-400">{sk}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
