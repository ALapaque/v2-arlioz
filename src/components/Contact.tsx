"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const s = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ct-tag", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".ct-tag", start: "top 85%" } });
      gsap.fromTo(".ct-h", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".ct-title", start: "top 82%" } });
      gsap.fromTo(".ct-body", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".ct-body", start: "top 85%" } });
      gsap.fromTo(".ct-form", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".ct-form", start: "top 88%" } });
      gsap.fromTo(".ct-info", { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".ct-infos", start: "top 85%" } });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={s} className="relative py-32 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="ct-tag section-tag font-[family-name:var(--font-mono)]">005 Contact</div>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="ct-title font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-800 leading-[1.02] tracking-tight mb-8">
              <span className="ct-h block">Faisons</span>
              <span className="ct-h block text-cyan">briller votre</span>
              <span className="ct-h block">marque.</span>
            </h2>
            <p className="ct-body text-text-muted text-[16px] leading-[1.8] mb-12 font-[family-name:var(--font-body)]">
              Un projet ? Discutons de la meilleure façon de le concrétiser. Chaque grande idée mérite une exécution exceptionnelle.
            </p>
            <div className="ct-infos space-y-5">
              <a href="mailto:contact@arlioz.be" className="ct-info group flex items-center gap-4">
                <div className="w-10 h-10 border border-line flex items-center justify-center group-hover:border-cyan/20 transition-colors duration-400">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-0.5">Email</div>
                  <span className="text-text-primary group-hover:text-cyan transition-colors text-[14px]">contact@arlioz.be</span>
                </div>
              </a>
              <div className="ct-info flex items-center gap-4">
                <div className="w-10 h-10 border border-line flex items-center justify-center">
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-0.5">Location</div>
                  <span className="text-text-primary text-[14px]">Belgique</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="ct-form glow-border bg-surface p-8 lg:p-10 space-y-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-2 block">Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-transparent border-b border-line py-3 text-text-primary text-[14px] placeholder:text-text-ghost/40 focus:border-cyan focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
                </div>
                <div>
                  <label className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-2 block">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-transparent border-b border-line py-3 text-text-primary text-[14px] placeholder:text-text-ghost/40 focus:border-cyan focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
                </div>
              </div>
              <div>
                <label className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-2 block">Sujet</label>
                <input type="text" placeholder="De quoi s'agit-il ?" className="w-full bg-transparent border-b border-line py-3 text-text-primary text-[14px] placeholder:text-text-ghost/40 focus:border-cyan focus:outline-none transition-colors duration-400 font-[family-name:var(--font-body)]" />
              </div>
              <div>
                <label className="text-[9px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.25em] uppercase mb-2 block">Message</label>
                <textarea rows={4} placeholder="Décrivez votre projet..." className="w-full bg-transparent border-b border-line py-3 text-text-primary text-[14px] placeholder:text-text-ghost/40 focus:border-cyan focus:outline-none transition-colors duration-400 resize-none font-[family-name:var(--font-body)]" />
              </div>
              <button type="submit" className="group w-full sm:w-auto px-8 py-3.5 bg-cyan text-void font-bold text-[11px] tracking-[0.2em] uppercase font-[family-name:var(--font-mono)] hover:bg-cyan/80 transition-all duration-300 inline-flex items-center justify-center gap-3">
                Envoyer
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M10 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
