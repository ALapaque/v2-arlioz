"use client";

import { useLoaderState } from "./LoaderProvider";
import { SplitText, SlideIn, FadeUp, ScaleReveal } from "./AnimatedText";

export default function Hero() {
  const { isLoaderDone } = useLoaderState();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-mesh-secondary" aria-hidden="true" />

      {/* Decorative vertical line */}
      <div
        className="absolute left-[15%] top-0 h-full line-vertical hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="max-w-[900px]">
          {/* Top label — slides in from left */}
          <SlideIn animate={isLoaderDone} delay={0} className="mb-8">
            <span className="section-label">
              ARLIOZ &mdash; PRIVACY &amp; DIGITAL DEVELOPMENT
            </span>
          </SlideIn>

          {/* Main title — word-by-word reveal */}
          <h1
            className="text-[clamp(3.2rem,10vw,9rem)] leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">
              <SplitText animate={isLoaderDone} delay={0.12}>
                WE BUILD
              </SplitText>
            </span>
            <span className="block text-[var(--nx-gold)]">
              <SplitText animate={isLoaderDone} delay={0.22} stagger={0.04}>
                DIGITAL EMPIRES
              </SplitText>
            </span>
          </h1>

          {/* Subtitle — subtle fade up */}
          <FadeUp animate={isLoaderDone} delay={0.5} className="mb-12">
            <p
              className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[var(--nx-ivory-dim)] max-w-[540px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Privacy &amp; digital design r&eacute;unis pour aider les entreprises
              &agrave; grandir en s&eacute;curit&eacute; et intelligemment.
            </p>
          </FadeUp>

          {/* CTAs — scale reveal, last in sequence */}
          <ScaleReveal animate={isLoaderDone} delay={0.65}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="btn-slide inline-flex items-center gap-3 px-8 py-4 bg-[var(--nx-gold)] text-[var(--nx-black)] text-[12px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Voir nos réalisations</span>
              </a>
              <a
                href="#process"
                className="btn-outline-slide inline-flex items-center gap-3 px-8 py-4 border border-[var(--nx-ivory-ghost)] text-[var(--nx-ivory)] text-[12px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Notre process</span>
                <span>&#8594;</span>
              </a>
            </div>
          </ScaleReveal>
        </div>

        {/* Floating badge */}
        <FadeUp
          animate={isLoaderDone}
          delay={0.8}
          className="absolute right-8 md:right-16 top-[35%] hidden lg:block"
        >
          <div className="badge-float border border-[var(--nx-gold)] px-5 py-3 bg-[rgba(8,8,8,0.7)] backdrop-blur-md">
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[var(--nx-gold)] block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Available for projects
            </span>
            <span
              className="text-2xl text-[var(--nx-ivory)] tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2026
            </span>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <FadeUp animate={isLoaderDone} delay={0.9} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 scroll-indicator">
          <span
            className="text-[9px] tracking-[0.3em] uppercase text-[var(--nx-ivory-ghost)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--nx-gold)] to-transparent" />
        </div>
      </FadeUp>
    </section>
  );
}
