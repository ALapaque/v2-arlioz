"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    client: "Microsoft",
    title: "We Made a Community Mural with AI",
    description: "Used ChatGPT and DALL-E to transform human sentiment into digital art, creating a unique community experience.",
    tags: ["AI", "Backend", "Design", "Research", "Web"],
    gradient: "from-blue-600/20 to-purple-600/20",
    slug: "microsoft",
  },
  {
    client: "Google",
    title: "We Put Google\u2019s Most Popular Tools Inside WordPress",
    description: "Developed Site Kit plugin integrating Analytics and Search Console, reaching 5 million site owners worldwide.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-green-600/20 to-blue-600/20",
    slug: "google",
  },
  {
    client: "Apple",
    title: "We Sparked Sales Growth",
    description: "Enhanced iPhone sales among EMEA carriers through an innovative gamification approach that drove engagement.",
    tags: ["Backend", "Design", "iOS", "Research"],
    gradient: "from-gray-600/20 to-gray-400/20",
    slug: "apple",
  },
  {
    client: "The White House",
    title: "We Digitized Democracy",
    description: "Relaunched WhiteHouse.gov within an 8-week timeframe, creating a modern digital presence for the administration.",
    tags: ["Backend", "Web"],
    gradient: "from-blue-800/20 to-red-600/20",
    slug: "white-house",
  },
  {
    client: "CLEAR",
    title: "We Built the Future of Digital Identity",
    description: "Expanded from a single-use app to a comprehensive identity platform serving 33 million users.",
    tags: ["Android", "Design", "iOS"],
    gradient: "from-cyan-600/20 to-blue-600/20",
    slug: "clear",
  },
  {
    client: "New York Times",
    title: "We Unlocked Revenue",
    description: "Enabled a new affiliate revenue stream on the Wirecutter platform, opening new business opportunities.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-gray-800/20 to-gray-600/20",
    slug: "new-york-times",
  },
  {
    client: "PMC",
    title: "We Brought AI to Entertainment Magazines",
    description: "Integrated generative AI into Variety and Rolling Stone, significantly reducing website bounce rates.",
    tags: ["AI", "Backend", "Research", "Web"],
    gradient: "from-red-600/20 to-orange-600/20",
    slug: "pmc",
  },
  {
    client: "Victoria\u2019s Secret",
    title: "We Gave Brand Loyalty a Design Language",
    description: "Created a comprehensive design system for the new Rewards Program, elevating the brand experience.",
    tags: ["Branding", "Design", "iOS", "Research"],
    gradient: "from-pink-600/20 to-purple-600/20",
    slug: "victorias-secret",
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-black" id="work">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label block mb-4"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Making an impact for<br />
              <span className="text-gradient-purple">industry leaders</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/work" className="btn-secondary">
              View All Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 2) * 0.15, duration: 0.6 }}
            >
              <Link href={`/work/${study.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500">
                  <div className={`aspect-[4/3] bg-gradient-to-br ${study.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                          {study.client}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-[#6E5BFF] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                          {study.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-md">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-[11px] text-white/40 bg-white/5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#6E5BFF]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4m0 0H5m7 0v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
