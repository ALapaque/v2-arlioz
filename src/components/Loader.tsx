"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const bootLines = [
  "ARLIOZ SYSTEMS v2.0.26",
  "Initializing secure environment...",
  "Loading GDPR compliance module...",
  "Connecting frontend engines...",
  "Calibrating design systems...",
  "All systems operational.",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(screenRef.current, {
          clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut", onComplete,
        });
      },
    });

    const lines = linesRef.current?.querySelectorAll(".boot-line");
    if (lines) {
      lines.forEach((line, i) => {
        tl.to(line, { opacity: 1, duration: 0.05 }, 0.2 + i * 0.3)
          .to(line, { className: "boot-line done font-[family-name:var(--font-mono)]" }, 0.2 + i * 0.3 + 0.25);
      });
    }

    tl.to(barRef.current, { width: "100%", duration: 2, ease: "power2.inOut" }, 0);
    tl.to(fillRef.current, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power3.inOut" }, 0.5);
    tl.to(screenRef.current, { backgroundColor: "rgba(0,238,255,0.03)", duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2");

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={screenRef} className="boot-screen" style={{ clipPath: "inset(0 0 0% 0)" }}>
      <div ref={linesRef} className="mb-10 flex flex-col items-center gap-1">
        {bootLines.map((line) => (
          <span key={line} className="boot-line font-[family-name:var(--font-mono)]">{line}</span>
        ))}
      </div>
      <div className="boot-logo font-[family-name:var(--font-display)]">
        ARLIOZ
        <span ref={fillRef} className="boot-logo-fill font-[family-name:var(--font-display)]" style={{ clipPath: "inset(100% 0 0 0)" }}>
          ARLIOZ
        </span>
      </div>
      <div className="boot-progress"><div ref={barRef} className="boot-progress-fill" /></div>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-[pulse-dot_1s_ease-in-out_infinite]" />
        <span className="text-[10px] text-text-ghost font-[family-name:var(--font-mono)] tracking-[0.3em] uppercase">Loading</span>
      </div>
    </div>
  );
}
