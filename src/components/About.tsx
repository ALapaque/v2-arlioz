"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "2018", label: "Depuis" },
  { value: "100%", label: "Belgique" },
  { value: "24/7", label: "Support" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ab-label", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-label", start: "top 88%" },
      });
      gsap.fromTo(".ab-heading", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-heading", start: "top 85%" },
      });
      gsap.fromTo(".ab-text", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-text-wrap", start: "top 85%" },
      });
      gsap.fromTo(".ab-stat", { y: 30, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-stats", start: "top 88%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span className="ab-label section-label font-[family-name:var(--font-mono)]">À propos</span>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="ab-heading font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight tracking-tight lg:sticky lg:top-28">
              Le digital,<br />
              <span className="gradient-text">autrement.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="ab-text-wrap space-y-5 text-text-secondary leading-relaxed text-[16px] mb-12 font-[family-name:var(--font-sans)]">
              <p className="ab-text">
                Arlioz est une agence digitale belge spécialisée dans le{" "}
                <span className="text-text font-medium">développement d&apos;applications sur mesure</span>.
                Nous transformons vos idées en produits digitaux concrets, performants et scalables.
              </p>
              <p className="ab-text">
                Notre approche combine{" "}
                <span className="text-text font-medium">expertise technique de pointe</span> et compréhension
                profonde de vos enjeux business pour livrer des solutions qui font la différence.
              </p>
            </div>

            <div className="ab-stats grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((st) => (
                <div key={st.label} className="ab-stat card p-5 text-center">
                  <div className="font-[family-name:var(--font-sans)] text-2xl font-800 mb-1">{st.value}</div>
                  <div className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] tracking-wider uppercase">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
