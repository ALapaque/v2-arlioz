"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ft-col", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 92%" },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="ft-col md:col-span-4">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo-arlioz.svg" alt="Arlioz" width={24} height={24} />
              <span className="text-sm font-semibold font-[family-name:var(--font-sans)]">Arlioz</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-[family-name:var(--font-sans)]">
              Développement d&apos;applications sur mesure. Belgique.
            </p>
          </div>

          <div className="ft-col md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-widest uppercase mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "À propos", href: "#about" },
                { label: "Projets", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="block text-sm text-text-secondary hover:text-text transition-colors font-[family-name:var(--font-sans)]">{l.label}</a>
              ))}
            </div>
          </div>

          <div className="ft-col md:col-span-3">
            <h4 className="text-[10px] text-text-dim font-[family-name:var(--font-mono)] tracking-widest uppercase mb-4">Stack</h4>
            <div className="space-y-2">
              {["React / Next.js", "NestJS / Node.js", "TypeScript", "React Native"].map((s) => (
                <span key={s} className="block text-sm text-text-secondary font-[family-name:var(--font-sans)]">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="sep mb-5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] tracking-wider">
            &copy; {new Date().getFullYear()} Arlioz. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/arlioz" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-blue transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://github.com/arlioz" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-blue transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
