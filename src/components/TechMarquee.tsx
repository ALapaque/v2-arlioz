"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "React", "Next.js", "Angular", "Vue.js", "Nuxt.js", "NestJS",
  "TypeScript", "Node.js", "GraphQL", "RGPD", "DPO", "Tailwind",
  "PostgreSQL", "MongoDB", "Docker", "AWS",
];

export default function TechMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Speed up marquee on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (trackRef.current) {
            const speed = 40 + Math.abs(self.getVelocity()) * 0.005;
            trackRef.current.style.animationDuration = `${Math.max(10, 80 - speed)}s`;
          }
        },
      });

      // Entrance
      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 95%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const doubled = [...items, ...items];

  return (
    <section ref={sectionRef} className="relative border-y border-line py-6 overflow-hidden opacity-0">
      <div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="text-[11px] text-text-ghost font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] hover:text-cyan transition-colors duration-300 cursor-default select-none">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
