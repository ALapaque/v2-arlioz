"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "React", "Next.js", "Angular", "Vue.js", "NestJS", "TypeScript",
  "Node.js", "GraphQL", "Tailwind", "PostgreSQL", "Docker", "AWS",
];

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (trackRef.current) {
            const speed = 30 + Math.abs(self.getVelocity()) * 0.004;
            trackRef.current.style.animationDuration = `${Math.max(8, 50 - speed)}s`;
          }
        },
      });

      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 95%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const doubled = [...items, ...items];

  return (
    <section ref={sectionRef} className="border-y border-border py-5 overflow-hidden opacity-0">
      <div
        ref={trackRef}
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] hover:text-blue transition-colors duration-300 cursor-default select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
