"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      <div className="grain">
        <Scene3D />
        <SmoothScroll>
          <main className="relative z-10">
            <Navigation />
            <Hero />
            <TechMarquee />
            <div className="divider max-w-[1400px] mx-auto" />
            <About />
            <div className="divider max-w-[1400px] mx-auto" />
            <Services />
            <div className="divider max-w-[1400px] mx-auto" />
            <Portfolio />
            <div className="divider max-w-[1400px] mx-auto" />
            <Team />
            <div className="divider max-w-[1400px] mx-auto" />
            <Contact />
            <Footer />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
}
