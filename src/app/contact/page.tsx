"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const contactReasons = [
  { label: "Partner on a project", value: "project" },
  { label: "Attend your event", value: "event" },
  { label: "Media interviews", value: "media" },
  { label: "General inquiry", value: "general" },
];

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState("project");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

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
            className="mb-20"
          >
            <span className="section-label block mb-4">Get in Touch</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How can we <span className="text-gradient-purple">help?</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl">
              Our experts love to share our knowledge and connect with like-minded people.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8"
            >
              {/* Reason selector */}
              <div className="mb-10">
                <p className="text-white/60 text-sm mb-4">I&apos;d like to:</p>
                <div className="flex flex-wrap gap-3">
                  {contactReasons.map((reason) => (
                    <button
                      key={reason.value}
                      onClick={() => setSelectedReason(reason.value)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedReason === reason.value
                          ? "bg-[#6E5BFF] text-white"
                          : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {reason.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="https://yoursite.com"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-sm mb-2 block">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-sm mb-2 block">Tell us about your project *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#6E5BFF] transition-colors resize-none"
                    placeholder="Brief overview of your project, goals, and timeline..."
                  />
                </div>

                <button type="submit" className="btn-primary text-base px-10 py-4">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="border border-white/5 rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Our Offices</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#6E5BFF] text-sm font-medium mb-1">New York</p>
                    <p className="text-white/40 text-sm">Headquarters</p>
                  </div>
                  <div>
                    <p className="text-[#6E5BFF] text-sm font-medium mb-1">London</p>
                    <p className="text-white/40 text-sm">European Office</p>
                  </div>
                  <div>
                    <p className="text-[#6E5BFF] text-sm font-medium mb-1">Noida</p>
                    <p className="text-white/40 text-sm">Engineering Hub</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Follow Us</h3>
                <div className="space-y-3">
                  {["Twitter / X", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                    <a key={social} href="#" className="flex items-center justify-between text-white/40 hover:text-white transition-colors group">
                      <span className="text-sm">{social}</span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M4 12L12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
