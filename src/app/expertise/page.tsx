"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const expertiseAreas = [
  {
    id: "digital-strategy",
    number: "01",
    title: "Digital Strategy",
    subtitle: "Vision that drives results",
    description: "We help organizations define their digital vision, prioritize investments, and build roadmaps that deliver measurable business outcomes. Our strategic approach combines market insights, user research, and competitive analysis to chart a clear path forward.",
    capabilities: ["Product Strategy & Roadmapping", "Market Research & Analysis", "User Research & Insights", "Digital Transformation", "Data & Analytics Strategy", "Innovation Workshops"],
    color: "#6E5BFF",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    subtitle: "Experiences people love",
    description: "We craft intuitive, beautiful digital experiences that connect brands with their audiences. From initial concept to final pixel, our design process is rooted in user empathy and driven by measurable outcomes.",
    capabilities: ["UX/UI Design", "Brand Identity & Systems", "Design Systems & Libraries", "Prototyping & Testing", "Motion & Interaction Design", "Accessibility Design"],
    color: "#FF5B8E",
  },
  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    subtitle: "Built to scale",
    description: "We build robust, scalable digital products using modern technology stacks. Our engineering team brings deep expertise across mobile, web, and cloud platforms to deliver solutions that perform at scale.",
    capabilities: ["Native iOS & Android", "React & React Native", "WordPress & CMS", "Cloud Infrastructure & DevOps", "API Design & Integration", "Quality Assurance"],
    color: "#5BFFB5",
  },
  {
    id: "growth",
    number: "04",
    title: "Growth",
    subtitle: "Sustainable momentum",
    description: "We help digital products find and retain their audience through data-driven optimization, experimentation, and strategic marketing. Our growth practice turns insights into action.",
    capabilities: ["SEO & App Store Optimization", "Conversion Rate Optimization", "Marketing Automation", "Analytics & Reporting", "A/B Testing & Experimentation", "Content Strategy"],
    color: "#FFB85B",
  },
  {
    id: "ai",
    number: "05",
    title: "AI & Innovation",
    subtitle: "The future, built today",
    description: "We integrate artificial intelligence and emerging technologies to create smarter, more efficient digital experiences. From generative AI to machine learning, we help organizations harness the power of AI responsibly.",
    capabilities: ["Generative AI Integration", "Machine Learning Solutions", "Natural Language Processing", "Computer Vision", "AI Strategy & Consulting", "Responsible AI Practices"],
    color: "#5BD4FF",
  },
];

export default function ExpertisePage() {
  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
            <span className="section-label block mb-4">Our Capabilities</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Our Digital Expertise <br /><span className="text-gradient-purple">& Capabilities</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl">
              Crafted by people, accelerated by AI, and built on tools that scale. Digital strategy, design, engineering, and growth services delivering elevated experiences.
            </p>
          </motion.div>

          {/* Expertise Sections */}
          <div className="space-y-32 pb-32">
            {expertiseAreas.map((area, index) => (
              <motion.section
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <span className="text-sm font-mono font-medium mb-4 block" style={{ color: area.color }}>
                      {area.number}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      {area.title}
                    </h2>
                    <p className="text-white/40 text-lg mb-6">{area.subtitle}</p>
                    <p className="text-white/60 text-base leading-relaxed mb-8">{area.description}</p>
                    <Link href="/contact" className="btn-primary">
                      Start a Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>

                  <div className="border border-white/5 rounded-2xl p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">Capabilities</h3>
                    <ul className="space-y-4">
                      {area.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: area.color }} />
                          <span className="text-base">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < expertiseAreas.length - 1 && (
                  <div className="h-px bg-white/5 mt-32" />
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
