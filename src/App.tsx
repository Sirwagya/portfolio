import React, { useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { PlaygroundSection } from './components/playground/PlaygroundSection';
import { NowSection } from './components/now/NowSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after initial mount and font load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-desk-frame">
      {/* Subtle Paper Grain Overlay */}
      <div className="notebook-grain" aria-hidden="true" />

      {/* Main Studio Notebook Physical Sheet */}
      <div className="notebook-sheet">
        {/* Floating Paper Toolbar Navbar */}
        <Navbar />

        {/* Narrative Flow */}
        <main id="main-content">
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <PlaygroundSection />
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
