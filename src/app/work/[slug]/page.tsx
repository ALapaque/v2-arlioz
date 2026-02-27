"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const caseStudyData: Record<string, { client: string; title: string; description: string; challenge: string; solution: string; results: string[]; tags: string[]; gradient: string }> = {
  microsoft: {
    client: "Microsoft",
    title: "We Made a Community Mural with AI",
    description: "Used ChatGPT and DALL-E to transform human sentiment into digital art, creating a unique community experience that bridged technology and human expression.",
    challenge: "Microsoft wanted to create a meaningful community engagement experience that demonstrated the creative potential of AI tools while making participants feel genuinely connected to the outcome.",
    solution: "We designed an interactive experience where community members shared their thoughts and feelings, which were then transformed into a collaborative digital mural using ChatGPT for narrative synthesis and DALL-E for visual generation.",
    results: ["Thousands of community participants", "Showcased at major Microsoft events", "Demonstrated practical AI creativity", "Generated significant media coverage"],
    tags: ["AI", "Backend", "Design", "Research", "Web"],
    gradient: "from-blue-600/30 to-purple-600/30",
  },
  google: {
    client: "Google",
    title: "We Put Google\u2019s Most Popular Tools Inside WordPress",
    description: "Developed the Site Kit plugin that integrates Google Analytics, Search Console, AdSense, and other tools directly into WordPress, reaching millions of site owners.",
    challenge: "WordPress site owners needed an easier way to access and understand their Google tools data without switching between multiple platforms and dealing with complex configurations.",
    solution: "We built Site Kit by Google, an official WordPress plugin that brings insights from Google Search Console, Analytics, AdSense, and PageSpeed Insights directly into the WordPress dashboard.",
    results: ["5+ million active installations", "Official Google WordPress plugin", "Simplified analytics for millions", "Continuous feature expansion"],
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-green-600/30 to-blue-600/30",
  },
  apple: {
    client: "Apple",
    title: "We Sparked Sales Growth",
    description: "Enhanced iPhone sales among EMEA carriers through an innovative gamification approach that drove engagement and competitive spirit.",
    challenge: "Apple needed to increase iPhone sales performance among EMEA carrier sales representatives in a way that was engaging, measurable, and sustainable.",
    solution: "We designed and built a gamified sales platform that turned carrier sales targets into engaging challenges, fostering healthy competition and rewarding top performers.",
    results: ["Significant sales increase across EMEA", "High engagement rates among carriers", "Measurable ROI for Apple", "Expanded to multiple product lines"],
    tags: ["Backend", "Design", "iOS", "Research"],
    gradient: "from-gray-600/30 to-gray-400/30",
  },
  "white-house": {
    client: "The White House",
    title: "We Digitized Democracy",
    description: "Relaunched WhiteHouse.gov within an ambitious 8-week timeframe, creating a modern, accessible digital presence for the administration.",
    challenge: "The incoming administration needed a completely new WhiteHouse.gov that reflected their vision and priorities, built and launched in just 8 weeks.",
    solution: "Our team executed a rapid design and development sprint, creating a modern, accessible, and performant website that served as the digital front door to the administration.",
    results: ["Launched on Inauguration Day", "8-week development sprint", "Fully accessible (WCAG compliant)", "Millions of visitors on day one"],
    tags: ["Backend", "Web"],
    gradient: "from-blue-800/30 to-red-600/30",
  },
  clear: {
    client: "CLEAR",
    title: "We Built the Future of Digital Identity",
    description: "Expanded CLEAR from a single-use airport app to a comprehensive identity platform serving 33 million users across multiple verticals.",
    challenge: "CLEAR needed to evolve from an airport-focused identity verification service into a versatile identity platform that could serve users across healthcare, sports venues, and more.",
    solution: "We redesigned and rebuilt the CLEAR app from the ground up, creating a flexible identity platform architecture that could adapt to new use cases while maintaining security and ease of use.",
    results: ["33+ million registered users", "Expanded beyond airports", "Seamless multi-vertical identity", "Industry-leading user experience"],
    tags: ["Android", "Design", "iOS"],
    gradient: "from-cyan-600/30 to-blue-600/30",
  },
  "new-york-times": {
    client: "New York Times",
    title: "We Unlocked Revenue",
    description: "Enabled a new affiliate revenue stream on the Wirecutter platform, opening significant new business opportunities for the Times.",
    challenge: "The New York Times' Wirecutter needed to build a robust affiliate commerce infrastructure that could scale while maintaining editorial integrity and user trust.",
    solution: "We engineered a sophisticated affiliate commerce system that seamlessly integrated product recommendations with purchasing pathways, maximizing conversion while preserving the editorial experience.",
    results: ["New revenue stream established", "Seamless editorial integration", "High conversion rates", "Scalable commerce infrastructure"],
    tags: ["Backend", "Branding", "Design", "Research", "Web"],
    gradient: "from-gray-800/30 to-gray-600/30",
  },
  pmc: {
    client: "PMC (Variety & Rolling Stone)",
    title: "We Brought AI to Entertainment Magazines",
    description: "Integrated generative AI into Variety and Rolling Stone digital platforms, reducing bounce rates and improving content discovery.",
    challenge: "Penske Media Corporation wanted to leverage AI to improve user engagement across their flagship entertainment publications without compromising editorial quality.",
    solution: "We integrated generative AI-powered features that enhanced content discovery, personalized recommendations, and created interactive experiences that kept readers engaged longer.",
    results: ["Reduced bounce rates significantly", "Improved content discovery", "Enhanced reader engagement", "AI-powered personalization"],
    tags: ["AI", "Backend", "Research", "Web"],
    gradient: "from-red-600/30 to-orange-600/30",
  },
  "victorias-secret": {
    client: "Victoria\u2019s Secret",
    title: "We Gave Brand Loyalty a Design Language",
    description: "Created a comprehensive design system for Victoria's Secret's new Rewards Program, elevating the digital brand experience.",
    challenge: "Victoria's Secret was launching a new loyalty program and needed a cohesive design system that could scale across platforms while maintaining their brand's premium feel.",
    solution: "We crafted a complete design language for the Rewards Program, including component libraries, interaction patterns, and brand guidelines that ensured consistency across all touchpoints.",
    results: ["Complete design system delivered", "Consistent cross-platform experience", "Elevated brand perception", "Scalable component library"],
    tags: ["Branding", "Design", "iOS", "Research"],
    gradient: "from-pink-600/30 to-purple-600/30",
  },
  goosehead: {
    client: "Goosehead Insurance",
    title: "We Designed a Seamless Insurance Experience",
    description: "Customer-centric digital transformation that simplified the insurance buying experience.",
    challenge: "Goosehead needed a modern digital experience that simplified the complex insurance purchasing process for customers.",
    solution: "We designed and built an intuitive digital platform that guides customers through insurance selection with clarity and confidence.",
    results: ["Simplified insurance purchasing", "Improved customer satisfaction", "Increased digital conversion", "Streamlined agent workflows"],
    tags: ["Design", "Mobile", "Research", "UX"],
    gradient: "from-emerald-600/30 to-green-600/30",
  },
  "mayo-clinic": {
    client: "Mayo Clinic",
    title: "We Reimagined Healthcare Digital",
    description: "Transforming patient experiences through innovative digital solutions at one of the world's leading medical institutions.",
    challenge: "Mayo Clinic needed to modernize their digital patient experience while maintaining the trust and reliability their institution is known for.",
    solution: "We partnered with Mayo Clinic to design and develop digital solutions that improved patient engagement, access to information, and overall healthcare experience.",
    results: ["Improved patient engagement", "Modernized digital presence", "Enhanced information access", "Maintained trust standards"],
    tags: ["Design", "Research", "Web", "Mobile"],
    gradient: "from-blue-600/30 to-teal-600/30",
  },
  "good-housekeeping": {
    client: "Good Housekeeping",
    title: "We Built a New App Experience",
    description: "Showcasing unified expertise through a cohesive mobile app experience.",
    challenge: "Good Housekeeping needed a modern mobile app that brought their trusted content and expertise to mobile audiences.",
    solution: "We designed and developed a new mobile app that unified Good Housekeeping's diverse content offerings into a seamless, engaging experience.",
    results: ["New mobile app launched", "Unified content experience", "Strong user engagement", "Positive app store reviews"],
    tags: ["Design", "iOS", "Android", "Mobile"],
    gradient: "from-red-600/30 to-pink-600/30",
  },
  "one-small-step": {
    client: "One Small Step",
    title: "We Brought Diverse Perspectives Together",
    description: "Building bridges through meaningful dialog and mutual understanding.",
    challenge: "One Small Step needed a digital platform to facilitate meaningful conversations between people with different perspectives.",
    solution: "We built an engaging platform that encourages empathetic dialogue and creates connections between diverse viewpoints.",
    results: ["Facilitated thousands of conversations", "Bridged diverse perspectives", "Increased civic engagement", "National media recognition"],
    tags: ["Design", "Web", "Research"],
    gradient: "from-indigo-600/30 to-violet-600/30",
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudyData[slug];

  if (!study) {
    return (
      <>
        <Navigation />
        <main className="bg-black min-h-screen pt-40 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/work" className="btn-primary">Back to Work</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen">
        {/* Hero */}
        <section className={`relative pt-40 pb-20 bg-gradient-to-br ${study.gradient}`}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/work" className="text-white/50 text-sm hover:text-white transition-colors mb-6 inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Work
              </Link>
              <span className="section-label block mb-4 mt-4">{study.client}</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {study.title}
              </h1>
              <p className="text-white/60 text-xl max-w-2xl mb-8">{study.description}</p>
              <div className="flex flex-wrap gap-3">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 text-sm text-white/60 border border-white/10 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>The Challenge</h2>
              <p className="text-white/60 text-lg leading-relaxed">{study.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>The Solution</h2>
              <p className="text-white/60 text-lg leading-relaxed">{study.solution}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>The Results</h2>
              <ul className="space-y-4">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#6E5BFF] mt-2 flex-shrink-0" />
                    <span className="text-white/60 text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="border-t border-white/5 pt-12 text-center">
              <p className="text-white/40 mb-6">Ready to make an impact?</p>
              <Link href="/contact" className="btn-primary">Start Your Project</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
