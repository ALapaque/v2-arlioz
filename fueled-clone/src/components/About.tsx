import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CountUp – animates a number from 0 to `target` over ~2 seconds    */
/* ------------------------------------------------------------------ */
function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const numeric = parseInt(target, 10);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // ms
    const start = performance.now();

    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplay(Math.round(eased * numeric));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const stats = [
  { value: "300", suffix: "+", label: "Projects Delivered" },
  { value: "50", suffix: "+", label: "Team Members" },
  { value: "12", suffix: "+", label: "Years of Experience" },
  { value: "98", suffix: "%", label: "Client Retention" },
];

/* ------------------------------------------------------------------ */
/*  About section                                                      */
/* ------------------------------------------------------------------ */
export default function About() {
  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ---- Left column: text content ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.2em] text-sm text-accent mb-4">
              ABOUT US
            </p>

            <h2 className="font-medium mb-6">
              We turn bold ideas into digital reality
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Founded in 2011, Fueled is a mobile app design and development
              company that creates award-winning digital experiences for
              forward-thinking brands.
            </p>

            <p className="text-text-muted text-base leading-relaxed mb-8">
              Our team of strategists, designers, and engineers work closely with
              clients to understand their goals and deliver solutions that exceed
              expectations.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium"
            >
              Our Story
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* ---- Right column: stats grid ---- */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-8 rounded-[24px] bg-surface-card border border-border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl lg:text-5xl font-medium text-accent mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
