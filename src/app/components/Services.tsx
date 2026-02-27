"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Digital Strategy",
    description: "We define product vision, market positioning, and roadmaps that align business goals with user needs. Data-driven decisions that set the foundation for success.",
    tags: ["Product Strategy", "Market Research", "Roadmapping", "Analytics"],
    href: "/expertise#digital-strategy",
    color: "#6E5BFF",
  },
  {
    number: "02",
    title: "Design",
    description: "We craft intuitive, beautiful experiences across every touchpoint. From brand identity to interaction design, we make products people love to use.",
    tags: ["UX/UI Design", "Branding", "Design Systems", "Prototyping"],
    href: "/expertise#design",
    color: "#FF5B8E",
  },
  {
    number: "03",
    title: "Engineering",
    description: "We build scalable, performant digital products using modern technology stacks. From native mobile to complex web platforms, engineering excellence is our standard.",
    tags: ["Mobile Apps", "Web Development", "Cloud & DevOps", "API Design"],
    href: "/expertise#engineering",
    color: "#5BFFB5",
  },
  {
    number: "04",
    title: "Growth",
    description: "We help products find and retain their audience. Through optimization, experimentation, and data analysis, we accelerate sustainable growth.",
    tags: ["SEO & ASO", "CRO", "Analytics", "Marketing Automation"],
    href: "/expertise#growth",
    color: "#FFB85B",
  },
  {
    number: "05",
    title: "AI & Innovation",
    description: "We integrate artificial intelligence and emerging technologies to create smarter, more efficient digital experiences that stay ahead of the curve.",
    tags: ["Machine Learning", "Generative AI", "NLP", "Computer Vision"],
    href: "/expertise#ai",
    color: "#5BD4FF",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-black" id="expertise">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label block mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafted by people,<br />
              <span className="text-gradient-purple">accelerated by AI</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-md text-lg"
          >
            Digital strategy, design, engineering, and growth services delivering elevated experiences built on tools that scale.
          </motion.p>
        </div>

        <div className="space-y-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative border border-white/5 rounded-2xl p-8 lg:p-10 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.02]">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                    <span className="text-sm font-mono font-medium opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ color: service.color }}>
                      {service.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight flex-shrink-0 lg:w-64 group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-base leading-relaxed flex-1 group-hover:text-white/60 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#6E5BFF] group-hover:border-[#6E5BFF] transition-all duration-300">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                          <path d="M4 9h10m0 0L10 5m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 lg:ml-20">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs text-white/30 border border-white/5 rounded-full group-hover:border-white/10 group-hover:text-white/50 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
