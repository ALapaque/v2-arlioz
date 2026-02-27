"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const values = [
  { title: "Impact First", description: "We measure success by the real-world impact our work creates for clients and their users." },
  { title: "Craft Matters", description: "Every detail counts. We obsess over quality in strategy, design, and engineering." },
  { title: "Collaborate Openly", description: "We believe the best work happens when diverse perspectives come together." },
  { title: "Stay Curious", description: "Technology evolves constantly. We stay ahead by never stopping to learn and experiment." },
  { title: "Own the Outcome", description: "We take full responsibility for our work and go beyond the brief when needed." },
  { title: "Be Human", description: "Behind every screen is a person. We build with empathy and design for real lives." },
];

const timeline = [
  { year: "2007", event: "Founded in New York City" },
  { year: "2010", event: "Launched first major client app" },
  { year: "2013", event: "Expanded to 100+ team members" },
  { year: "2015", event: "Opened international offices" },
  { year: "2018", event: "Reached 200+ team members" },
  { year: "2020", event: "Launched AI & Innovation practice" },
  { year: "2023", event: "300+ experts worldwide" },
];

const leadership = [
  { name: "Rameet Chawla", title: "Founder & CEO", description: "Visionary leader who founded Fueled with a mission to create digital products that make an impact." },
  { name: "Ryan Matzner", title: "Co-Founder & COO", description: "Operations leader driving the strategic growth and client success across global markets." },
  { name: "Sarah Chen", title: "VP of Design", description: "Design leader with 15+ years of experience creating award-winning digital experiences." },
  { name: "Marcus Johnson", title: "VP of Engineering", description: "Engineering veteran who leads our technical teams in building scalable, reliable products." },
];

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "300+", label: "Team Members" },
    { value: "2007", label: "Year Founded" },
    { value: "500+", label: "Products Built" },
    { value: "50+", label: "Awards Won" },
    { value: "4", label: "Global Offices" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="py-24 border-t border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-purple mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </div>
              <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
            <span className="section-label block mb-4">About Us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The people behind <br /><span className="text-gradient-purple">the impact</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl">
              Founded in 2007, Fueled now has a team of 300+ experts worldwide. Learn about our values, impact, and the people that make digital experiences that matter.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
            <div className="border border-white/5 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6E5BFF]/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Our Mission</h2>
                <p className="text-white/60 text-xl leading-relaxed max-w-3xl">
                  We exist to create digital products and experiences that make a real impact. By combining sharp strategy with precision execution, we help the world&apos;s most ambitious organizations build products that matter.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <StatsSection />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Values */}
          <section className="py-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="section-label block mb-4">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Our <span className="text-gradient-purple">Values</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="pb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="section-label block mb-4">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                How we <span className="text-gradient-purple">got here</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-[#6E5BFF] text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{item.year}</span>
                      <p className="text-white/60 mt-1">{item.event}</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#6E5BFF] flex-shrink-0 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="pb-32" id="careers">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="section-label block mb-4">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Meet the <span className="text-gradient-purple">team</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#6E5BFF]/20 to-purple-900/20" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{person.name}</h3>
                    <p className="text-[#6E5BFF] text-sm font-medium mb-3">{person.title}</p>
                    <p className="text-white/40 text-sm">{person.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
