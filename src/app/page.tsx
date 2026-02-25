import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain">
      <Navigation />
      <Hero />
      <TechMarquee />
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
  );
}
