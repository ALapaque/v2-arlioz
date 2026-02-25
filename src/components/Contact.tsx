"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-label", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-label", start: "top 85%" },
      });

      gsap.fromTo(".contact-title-line", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 82%" },
      });

      gsap.fromTo(".contact-body", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-body", start: "top 85%" },
      });

      gsap.fromTo(".contact-form", { y: 50, opacity: 0, rotateY: -3 }, {
        y: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
      });

      gsap.fromTo(".contact-info-item", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-info", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-44" style={{ perspective: "1000px" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="contact-label flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-[family-name:var(--font-mono)]">Contact</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="contact-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.8rem] font-800 leading-[1.02] tracking-tight mb-8">
              <span className="contact-title-line block">Faisons briller</span>
              <span className="contact-title-line block text-accent">votre marque.</span>
            </h2>

            <p className="contact-body text-text-secondary text-[17px] leading-[1.8] mb-14 font-[family-name:var(--font-body)]">
              Vous avez un projet en tête ? Discutons de la meilleure façon de le concrétiser.
              Chaque grande idée mérite une exécution exceptionnelle.
            </p>

            <div className="contact-info space-y-6">
              <a href="mailto:contact@arlioz.be" className="contact-info-item group flex items-center gap-4">
                <div className="w-11 h-11 border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-400">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-1">Email</div>
                  <span className="text-text group-hover:text-accent transition-colors duration-300 text-[15px]">contact@arlioz.be</span>
                </div>
              </a>

              <div className="contact-info-item flex items-center gap-4">
                <div className="w-11 h-11 border border-border flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-1">Localisation</div>
                  <span className="text-text text-[15px]">Belgique</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="contact-form border border-border p-8 lg:p-10 space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-3 block">Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/40 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
                </div>
                <div>
                  <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-3 block">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/40 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-3 block">Sujet</label>
                <input type="text" placeholder="De quoi s'agit-il ?" className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/40 focus:border-accent focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
              </div>
              <div>
                <label className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-3 block">Message</label>
                <textarea rows={5} placeholder="Décrivez votre projet..." className="w-full bg-transparent border-b border-border py-3 text-text text-[15px] placeholder:text-text-dim/40 focus:border-accent focus:outline-none transition-colors duration-400 resize-none font-[family-name:var(--font-body)]" />
              </div>
              <button type="submit" className="group w-full sm:w-auto px-10 py-4 bg-accent text-bg font-bold text-[12px] tracking-wider uppercase font-[family-name:var(--font-mono)] hover:bg-accent-hover transition-all duration-400 inline-flex items-center justify-center gap-3 hover:gap-5">
                Envoyer le message
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
