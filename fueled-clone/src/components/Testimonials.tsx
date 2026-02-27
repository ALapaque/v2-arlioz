import { motion } from "framer-motion";

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
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface-dark">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.company}
              className="p-10 rounded-[40px] bg-surface-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote mark */}
              <div className="text-accent/20 text-6xl font-serif leading-none mb-4">"</div>

              {/* Quote */}
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="text-[15px] font-medium text-text-primary">{t.author}</p>
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
