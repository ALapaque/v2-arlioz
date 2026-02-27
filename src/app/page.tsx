import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import BlogPreview from "./components/BlogPreview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <Stats />
        <Services />
        <Portfolio />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
