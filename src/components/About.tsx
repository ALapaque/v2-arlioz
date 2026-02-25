"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ab-num", { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-num", start: "top 88%" },
      });
      gsap.fromTo(".ab-h", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-title", start: "top 85%" },
      });
      gsap.fromTo(".ab-p", { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-content", start: "top 85%" },
      });
      gsap.fromTo(".ab-stat", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-stats", start: "top 88%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 lg:py-44">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="ab-num section-num font-[family-name:var(--font-mono)]">02 À propos</div>

        {/* Asymmetric 5/7 grid with sticky heading */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="ab-title font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3.2rem] font-800 leading-[1.05] tracking-tight lg:sticky lg:top-28">
              <span className="ab-h block">Le digital,</span>
              <span className="ab-h block"><span className="grad-text">autrement.</span></span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="ab-content space-y-6 text-muted text-[16px] leading-[1.85] font-[family-name:var(--font-sans)] mb-14">
              <p className="ab-p">
                Arlioz est une agence digitale belge spécialisée dans le{" "}
                <span className="text-text font-medium">développement d&apos;applications sur mesure</span>.
                Nous ne faisons pas de templates — chaque projet est pensé, architecturé et développé spécifiquement pour vos besoins.
              </p>
              <p className="ab-p">
                Notre approche combine{" "}
                <span className="text-text font-medium">rigueur technique</span> et sens du produit.
                Du premier wireframe à la mise en production, nous accompagnons chaque étape avec une obsession : livrer quelque chose qui{" "}
                <span className="text-accent">fonctionne vraiment</span>.
              </p>
            </div>

            {/* Stats — inline, not in a separate grid block */}
            <div className="ab-stats flex flex-wrap gap-3">
              {[
                { val: "50+", label: "Projets" },
                { val: "2018", label: "Depuis" },
                { val: "100%", label: "Sur mesure" },
              ].map((st) => (
                <div key={st.label} className="ab-stat card-base px-6 py-5 flex-1 min-w-[120px]">
                  <div className="font-[family-name:var(--font-sans)] text-2xl font-800 mb-0.5">{st.val}</div>
                  <div className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
