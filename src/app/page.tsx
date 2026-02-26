import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <TechStack />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
