"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2018", label: "Année de création" },
  { value: "50+", label: "Projets livrés" },
  { value: "RGPD", label: "Expertise certifiée" },
  { value: "100%", label: "Made in Belgium" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label entrance
      gsap.fromTo(
        ".about-label",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-label", start: "top 85%" } }
      );

      // Title lines
      gsap.fromTo(
        ".about-title-line",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".about-title", start: "top 80%" } }
      );

      // Paragraphs
      gsap.fromTo(
        ".about-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".about-text-wrap", start: "top 80%" } }
      );

      // Stats
      gsap.fromTo(
        ".about-stat",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="about-label flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">
            A propos
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="about-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.8rem] font-800 leading-[1.02] tracking-tight lg:sticky lg:top-32">
              <span className="about-title-line block">Le digital,</span>
              <span className="about-title-line block text-text-secondary font-300">en toute</span>
              <span className="about-title-line block text-accent">confiance.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="about-text-wrap space-y-6 text-text-secondary leading-[1.8] text-[17px] mb-16 font-[family-name:var(--font-body)]">
              <p className="about-text">
                Arlioz est une agence digitale belge qui se distingue par une double expertise rare :{" "}
                <span className="text-text font-medium">la protection des données</span> et le{" "}
                <span className="text-text font-medium">développement web de pointe</span>.
              </p>
              <p className="about-text">
                Fondée en 2018, notre mission est d&apos;aider les entreprises à croître intelligemment en combinant
                conformité <span className="text-accent">RGPD</span>, innovation technologique et design centré utilisateur.
              </p>
            </div>

            <div className="about-stats grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={s.label} className={`about-stat border border-border p-6 lg:p-8 card-hover ${i === 1 ? "border-accent/20" : ""}`}>
                  <div className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-900 mb-2 ${i === 1 ? "text-accent" : "text-text"}`}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
