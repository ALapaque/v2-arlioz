"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ct-num", { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-num", start: "top 88%" },
      });
      gsap.fromTo(".ct-h", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-title", start: "top 85%" },
      });
      gsap.fromTo(".ct-p", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-p", start: "top 88%" },
      });
      gsap.fromTo(".ct-form", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-form", start: "top 90%" },
      });
      gsap.fromTo(".ct-info", { x: -10, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-infos", start: "top 88%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 lg:py-44">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="ct-num section-num font-[family-name:var(--font-mono)]">04 Contact</div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="ct-title font-[family-name:var(--font-sans)] text-3xl sm:text-4xl lg:text-[3.2rem] font-800 leading-[1.05] tracking-tight mb-6">
              <span className="ct-h block">Parlons de</span>
              <span className="ct-h block"><span className="grad-text">votre projet.</span></span>
            </h2>
            <p className="ct-p text-muted text-[16px] leading-[1.85] mb-10 font-[family-name:var(--font-sans)]">
              Une idée, un besoin, un défi technique ? Discutons de la meilleure façon de le concrétiser.
            </p>

            <div className="ct-infos space-y-4">
              <a href="mailto:contact@arlioz.be" className="ct-info group flex items-center gap-3">
                <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-0.5">Email</div>
                  <span className="text-text text-sm group-hover:text-accent transition-colors">contact@arlioz.be</span>
                </div>
              </a>
              <div className="ct-info flex items-center gap-3">
                <div className="w-9 h-9 border border-border flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-0.5">Location</div>
                  <span className="text-text text-sm">Belgique</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="ct-form card-base p-7 lg:p-9 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-2 block">Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-transparent border-b border-border py-3 text-text text-sm placeholder:text-ghost focus:border-accent focus:outline-none transition-colors font-[family-name:var(--font-sans)]" />
                </div>
                <div>
                  <label className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-2 block">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-transparent border-b border-border py-3 text-text text-sm placeholder:text-ghost focus:border-accent focus:outline-none transition-colors font-[family-name:var(--font-sans)]" />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-2 block">Sujet</label>
                <input type="text" placeholder="De quoi s'agit-il ?" className="w-full bg-transparent border-b border-border py-3 text-text text-sm placeholder:text-ghost focus:border-accent focus:outline-none transition-colors font-[family-name:var(--font-sans)]" />
              </div>
              <div>
                <label className="text-[10px] text-dim font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-2 block">Message</label>
                <textarea rows={4} placeholder="Décrivez votre projet..." className="w-full bg-transparent border-b border-border py-3 text-text text-sm placeholder:text-ghost focus:border-accent focus:outline-none transition-colors resize-none font-[family-name:var(--font-sans)]" />
              </div>
              <button type="submit" className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white font-medium text-[13px] rounded-md hover:bg-accent/85 transition-all duration-300 font-[family-name:var(--font-sans)]">
                Envoyer le message
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
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
