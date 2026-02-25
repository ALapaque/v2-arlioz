"use client";

import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      <div className="grain">
        <div className="bg-grid" />
        <SmoothScroll>
          <main className="relative z-10">
            <Navigation />
            <Hero />
            <Marquee />
            <Services />
            <div className="sep max-w-[1100px] mx-auto" />
            <About />
            <div className="sep max-w-[1100px] mx-auto" />
            <Projects />
            <div className="sep max-w-[1100px] mx-auto" />
            <Contact />
            <Footer />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
}
