import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Fueled delivered an exceptional product that exceeded our expectations. Their attention to detail and strategic thinking is unmatched.",
    author: "Sarah Chen",
    role: "VP Product, TechCorp",
    initials: "SC",
  },
  {
    quote:
      "Working with the Fueled team was transformative for our digital presence. They truly understand how to build products users love.",
    author: "Marcus Johnson",
    role: "CTO, InnovateCo",
    initials: "MJ",
  },
  {
    quote:
      "From concept to launch, the team showed incredible expertise and dedication. Our app ratings went from 3.2 to 4.8 stars.",
    author: "Emily Rodriguez",
    role: "Founder, HealthTech",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section header */}
        <p className="uppercase tracking-[0.2em] text-sm text-accent mb-4 text-center">
          TESTIMONIALS
        </p>
        <h2 className="font-medium text-center mb-16">
          What our clients say
        </h2>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="p-8 rounded-[24px] bg-surface-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <svg
                className="text-accent/30 mb-4"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.3 22.7C8.9 22.7 7.73 22.23 6.8 21.3C5.87 20.37 5.4 19.2 5.4 17.8C5.4 16.13 5.8 14.47 6.6 12.8C7.43 11.1 8.57 9.6 10 8.3L12.4 10.3C11.37 11.3 10.6 12.27 10.1 13.2C9.63 14.13 9.37 15.07 9.3 16H10.3C11.37 16 12.23 16.33 12.9 17C13.57 17.63 13.9 18.5 13.9 19.6C13.9 20.5 13.55 21.27 12.85 21.9C12.18 22.43 11.33 22.7 10.3 22.7ZM22.3 22.7C20.9 22.7 19.73 22.23 18.8 21.3C17.87 20.37 17.4 19.2 17.4 17.8C17.4 16.13 17.8 14.47 18.6 12.8C19.43 11.1 20.57 9.6 22 8.3L24.4 10.3C23.37 11.3 22.6 12.27 22.1 13.2C21.63 14.13 21.37 15.07 21.3 16H22.3C23.37 16 24.23 16.33 24.9 17C25.57 17.63 25.9 18.5 25.9 19.6C25.9 20.5 25.55 21.27 24.85 21.9C24.18 22.43 23.33 22.7 22.3 22.7Z" />
              </svg>

              {/* Quote text */}
              <p className="text-text-secondary text-base leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author area */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-medium">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Author info */}
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-text-dim text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
