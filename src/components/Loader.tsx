"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation
        const exitTl = gsap.timeline({ onComplete });
        exitTl
          .to(textRef.current, {
            y: -60,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          })
          .to(
            barRef.current?.parentElement ?? null,
            { opacity: 0, duration: 0.3, ease: "power2.in" },
            "-=0.3"
          )
          .to(
            counterRef.current,
            { opacity: 0, duration: 0.2, ease: "power2.in" },
            "-=0.3"
          )
          .to(wrapperRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power4.inOut",
          });
      },
    });

    // Animate fill via CSS custom property
    const obj = { fill: 0 };
    tl.to(obj, {
      fill: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.style.setProperty("--fill", `${obj.fill}%`);
        }
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(obj.fill)}`;
        }
        setTick((t) => t + 1);
      },
    });

    // Animate bar fill
    tl.to(
      barRef.current,
      {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut",
      },
      0
    );

    // Text entrance
    tl.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      0
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className="loader-wrapper" style={{ clipPath: "inset(0 0 0% 0)" }}>
      <span
        ref={textRef}
        className="loader-text font-[family-name:var(--font-display)]"
        style={{ "--fill": "0%" } as React.CSSProperties}
      >
        ARLIOZ
      </span>
      <div className="loader-bar">
        <div ref={barRef} className="loader-bar-fill" />
      </div>
      <span
        ref={counterRef}
        className="text-[11px] text-text-dim font-[family-name:var(--font-mono)] tracking-[0.3em]"
      >
        0
      </span>
    </div>
  );
}
