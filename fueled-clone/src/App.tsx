import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <CaseStudies />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
