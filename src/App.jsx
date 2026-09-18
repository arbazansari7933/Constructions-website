import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import About from "./components/About";
import Legacy from "./components/Legacy";
import Services from "./components/Services";
import FoundationToFinish from "./components/FoundationToFinish";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";

function App() {
  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <TrustStats />
      <About />
      <Legacy />
      <Services />
      <FoundationToFinish />
      <Projects />
      <WhyChooseUs />
      <Process />
      <Locations />
      <Testimonials />
      <Contact />
      <QuickContact />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
