"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SplitText, SlideIn } from "./AnimatedText";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Figma",
  "AWS",
  "Vercel",
  "GraphQL",
  "Docker",
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Double the array for seamless marquee loop
  const doubled = [...technologies, ...technologies];

  return (
    <section className="relative py-24 md:py-32 bg-[var(--nx-black-alt)] overflow-hidden" ref={ref}>
      {/* Top line */}
      <div className="line-decorative absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <div className="text-center">
          <SlideIn animate={isInView} delay={0} direction="right" className="mb-4 flex justify-center">
            <span className="section-label">TECHNOLOGIES</span>
          </SlideIn>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <SplitText animate={isInView} delay={0.1}>
              TECHNOLOGIES
            </SplitText>{" "}
            <span className="text-[var(--nx-gold)]">
              <SplitText animate={isInView} delay={0.18}>
                DE POINTE
              </SplitText>
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--nx-black-alt)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--nx-black-alt)] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-8 md:px-12 py-6 flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 bg-[var(--nx-gold)] rotate-45 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span
                className="text-[clamp(1.2rem,2vw,1.8rem)] tracking-wide text-[var(--nx-ivory-ghost)] group-hover:text-[var(--nx-ivory)] transition-colors duration-300 whitespace-nowrap"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="line-decorative absolute bottom-0 left-0 right-0" />
    </section>
  );
}
