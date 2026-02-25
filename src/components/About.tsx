"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { val: "2018", label: "Fondation", sym: "▸" },
  { val: "50+", label: "Projets", sym: "◆" },
  { val: "RGPD", label: "Certifié", sym: "◈" },
  { val: "100%", label: "Belgique", sym: "●" },
];

export default function About() {
  const s = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ab-tag", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".ab-tag", start: "top 85%" } });
      gsap.fromTo(".ab-h", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".ab-title", start: "top 82%" } });
      gsap.fromTo(".ab-p", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".ab-text", start: "top 82%" } });
      gsap.fromTo(".ab-stat", { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".ab-stats", start: "top 85%" } });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={s} className="relative py-32 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="ab-tag section-tag font-[family-name:var(--font-mono)]">001 About</div>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="ab-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-800 leading-[1.02] tracking-tight lg:sticky lg:top-32">
              <span className="ab-h block">Le digital,</span>
              <span className="ab-h block text-text-muted font-300">en toute</span>
              <span className="ab-h block text-cyan">confiance.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="ab-text space-y-6 text-text-muted leading-[1.8] text-[16px] mb-14 font-[family-name:var(--font-body)]">
              <p className="ab-p">Arlioz est une agence digitale belge qui se distingue par une double expertise rare : <span className="text-text-primary font-medium">la protection des données</span> et le <span className="text-text-primary font-medium">développement web de pointe</span>.</p>
              <p className="ab-p">Fondée en 2018, notre mission est d&apos;aider les entreprises à croître en combinant conformité <span className="text-cyan">RGPD</span>, innovation technologique et design centré utilisateur.</p>
            </div>
            <div className="ab-stats grid grid-cols-2 gap-3">
              {stats.map((st, i) => (
                <div key={st.label} className={`ab-stat glow-border p-6 lg:p-7 bg-surface ${i === 1 ? "border-cyan/15" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cyan text-[10px]">{st.sym}</span>
                    <span className="text-[10px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{st.label}</span>
                  </div>
                  <div className={`font-[family-name:var(--font-display)] text-3xl font-900 ${i === 1 ? "text-cyan" : "text-text-primary"}`}>{st.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
