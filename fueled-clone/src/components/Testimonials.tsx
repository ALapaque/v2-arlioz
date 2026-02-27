import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Fueled delivered an exceptional product that exceeded our expectations. Their attention to detail and strategic thinking set them apart from every agency we've worked with.",
    author: "Product Lead",
    role: "Senior Director",
    company: "Google",
  },
  {
    quote:
      "From concept to launch, the team showed incredible expertise and dedication. They truly understand how to build products that users love and businesses depend on.",
    author: "Engineering Lead",
    role: "VP of Engineering",
    company: "CLEAR",
  },
  {
    quote:
      "Working with Fueled was transformative for our digital presence. They brought strategic clarity and execution excellence that drove measurable results.",
    author: "Digital Director",
    role: "Head of Digital",
    company: "Victoria's Secret",
  },
  {
    quote:
      "The quality of their engineering and design work is world-class. They delivered on time, on budget, and the end result speaks for itself.",
    author: "Tech Lead",
    role: "CTO",
    company: "Crunchbase",
  },
  {
    quote:
      "Fueled helped us reimagine our entire digital experience. Their strategic approach combined with flawless execution made them an ideal partner.",
    author: "Product Director",
    role: "VP Product",
    company: "MGM Resorts",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 400;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 32 : cardWidth + 32,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header with nav arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.15em] text-[13px] text-accent mb-4 font-medium">
              Testimonials
            </p>
            <h2
              className="font-medium leading-[1.1] tracking-[-0.5px] text-text-primary"
              style={{ fontSize: "clamp(32px, 2rem + 1.5vw, 48px)" }}
            >
              What our clients say
            </h2>
          </div>

          {/* Carousel nav */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "border-border-light text-white hover:bg-white/10 cursor-pointer"
                  : "border-border text-text-dim cursor-not-allowed opacity-40"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "border-border-light text-white hover:bg-white/10 cursor-pointer"
                  : "border-border text-text-dim cursor-not-allowed opacity-40"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={`${t.company}-${index}`}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[440px] p-10 rounded-[40px] bg-surface-card border border-border hover:border-border-light transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Quote mark */}
              <div className="text-accent/20 text-6xl font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="text-[15px] font-medium text-text-primary">
                  {t.author}
                </p>
                <p className="text-text-dim text-[13px] mt-1">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
