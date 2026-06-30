import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-surface focus:px-5 focus:py-2.5 focus:font-display focus:font-700 focus:text-ink focus:shadow-clay-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <Security />
        <Showcase />
        <Testimonials />
        <Pricing />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
