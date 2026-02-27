"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const allCaseStudies = [
  {
    client: "Microsoft",
    title: "We Made a Community Mural with AI",
    description: "Used ChatGPT and DALL-E to transform human sentiment into digital art.",
    tags: ["AI", "Backend", "Design", "Research", "Web"],
    gradient: "from-blue-600/20 to-purple-600/20",
    slug: "microsoft",
  },
  {
    client: "Google",
    title: "We Put Google\u2019s Most Popular Tools Inside WordPress",
    description: "Developed Site Kit plugin integrating Analytics and Search Console, reaching 5 million site owners.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-green-600/20 to-blue-600/20",
    slug: "google",
  },
  {
    client: "Apple",
    title: "We Sparked Sales Growth",
    description: "Enhanced iPhone sales among EMEA carriers through gamification.",
    tags: ["Backend", "Design", "iOS", "Research"],
    gradient: "from-gray-600/20 to-gray-400/20",
    slug: "apple",
  },
  {
    client: "The White House",
    title: "We Digitized Democracy",
    description: "Relaunched WhiteHouse.gov within an 8-week timeframe.",
    tags: ["Backend", "Web"],
    gradient: "from-blue-800/20 to-red-600/20",
    slug: "white-house",
  },
  {
    client: "CLEAR",
    title: "We Built the Future of Digital Identity",
    description: "Expanded from single-use app to identity platform serving 33 million users.",
    tags: ["Android", "Design", "iOS"],
    gradient: "from-cyan-600/20 to-blue-600/20",
    slug: "clear",
  },
  {
    client: "New York Times",
    title: "We Unlocked Revenue",
    description: "Enabled affiliate revenue stream on Wirecutter platform.",
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-gray-800/20 to-gray-600/20",
    slug: "new-york-times",
  },
  {
    client: "PMC",
    title: "We Brought AI to Entertainment Magazines",
    description: "Integrated generative AI into Variety and Rolling Stone.",
    tags: ["AI", "Backend", "Research", "Web"],
    gradient: "from-red-600/20 to-orange-600/20",
    slug: "pmc",
  },
  {
    client: "Victoria\u2019s Secret",
    title: "We Gave Brand Loyalty a Design Language",
    description: "Created design system for the new Rewards Program.",
    tags: ["Branding", "Design", "iOS", "Research"],
    gradient: "from-pink-600/20 to-purple-600/20",
    slug: "victorias-secret",
  },
  {
    client: "Goosehead",
    title: "We Designed a Seamless Insurance Experience",
    description: "Customer-centric digital transformation for insurance.",
    tags: ["Design", "Mobile", "Research", "UX"],
    gradient: "from-emerald-600/20 to-green-600/20",
    slug: "goosehead",
  },
  {
    client: "Mayo Clinic",
    title: "We Reimagined Healthcare Digital",
    description: "Transforming patient experiences through innovative digital solutions.",
    tags: ["Design", "Research", "Web", "Mobile"],
    gradient: "from-blue-600/20 to-teal-600/20",
    slug: "mayo-clinic",
  },
  {
    client: "Good Housekeeping",
    title: "We Built a New App Experience",
    description: "Showcasing unified expertise through a cohesive mobile app.",
    tags: ["Design", "iOS", "Android", "Mobile"],
    gradient: "from-red-600/20 to-pink-600/20",
    slug: "good-housekeeping",
  },
  {
    client: "One Small Step",
    title: "We Brought Diverse Perspectives Together",
    description: "Building bridges through dialog and understanding.",
    tags: ["Design", "Web", "Research"],
    gradient: "from-indigo-600/20 to-violet-600/20",
    slug: "one-small-step",
  },
];

const filterTags = ["All", "AI", "Design", "Web", "Mobile", "iOS", "Android", "Backend", "Branding", "Research"];

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-label block mb-4">Our Work</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Case <span className="text-gradient-purple">Studies</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl">
              Making an impact for industry leaders. Here are some of the products and experiences we&apos;ve built.
            </p>
          </motion.div>

          {/* Filter tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {filterTags.map((tag) => (
              <button
                key={tag}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  tag === "All"
                    ? "bg-[#6E5BFF] text-white"
                    : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
            {allCaseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link href={`/work/${study.slug}`} className="block group">
                  <div className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${study.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                          {study.client}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#6E5BFF] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                            {study.title}
                          </h3>
                          <p className="text-white/40 text-sm">{study.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#6E5BFF]">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M4 12L12 4m0 0H5m7 0v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] text-white/30 border border-white/5 rounded-full">
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
      </main>
      <Footer />
    </>
  );
}
