import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { DsaSection } from './components/dsa/DsaSection';
import { NowSection } from './components/now/NowSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { IntroSplash } from './components/splash/IntroSplash';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  useEffect(() => {
    // If reduced-motion is requested, complete immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsSplashComplete(true);
    }

    // Refresh ScrollTrigger after initial mount and font load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setIsSplashComplete(true);
    ScrollTrigger.refresh();
  };

  return (
    <div className="page-desk-frame">
      {/* Interactive Intro Welcome Preloader with Smooth GSAP Reveal */}
      <IntroSplash onComplete={handleSplashComplete} />

      {/* Subtle Paper Grain Overlay */}
      <div className="notebook-grain" aria-hidden="true" />

      {/* Main Studio Notebook Physical Sheet */}
      <div className="notebook-sheet">
        {/* Floating Paper Toolbar Navbar */}
        <Navbar />

        {/* Narrative Flow */}
        <main id="main-content">
          <Hero isReady={isSplashComplete} />
          <AboutSection />
          <ProjectsSection />
          <DsaSection />
          <NowSection />
          <ContactSection />
        </main>

        {/* Understated Notebook Colophon Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
