import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL } from '../../data/personal';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);

      const sections = ['hero', 'about', 'work', 'dsa', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 260 && rect.bottom >= 260;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`notebook-navbar-container ${scrolled ? 'is-sticky' : ''}`}>
        <nav className="notebook-toolbar" aria-label="Main Navigation">
          {/* Left: Monogram Mark + Nav Links */}
          <div className="toolbar-left-group">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="toolbar-brand-dot"
              aria-label="Sirwagya Shekhar"
            >
              <span className="brand-dot-inner">S</span>
            </a>

            <div className="toolbar-nav-links">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className={`toolbar-link ${activeSection === 'hero' ? 'active-home-pill' : ''}`}
                aria-label="Navigate to Home section"
              >
                <span className="toolbar-star" aria-hidden="true">★</span> HOME
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className={`toolbar-link ${activeSection === 'about' ? 'active' : ''}`}
                aria-label="Navigate to About section"
              >
                ABOUT
              </a>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
                className={`toolbar-link ${activeSection === 'work' ? 'active' : ''}`}
                aria-label="Navigate to Selected Work section"
              >
                CASE STUDY
              </a>
              <a
                href="#dsa"
                onClick={(e) => { e.preventDefault(); scrollToSection('dsa'); }}
                className={`toolbar-link ${activeSection === 'dsa' ? 'active' : ''}`}
                aria-label="Navigate to DSA Journey section"
              >
                DSA JOURNEY
              </a>
            </div>
          </div>

          {/* Right: Circular Social Icons + Contact Pill */}
          <div className="toolbar-right-actions">
            <div className="toolbar-social-icons">
              <a
                href={PERSONAL.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="toolbar-circle-icon-btn"
                aria-label="Sirwagya's GitHub Profile"
              >
                <GithubIcon size={12} />
              </a>
              <a
                href={PERSONAL.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="toolbar-circle-icon-btn"
                aria-label="Sirwagya's LinkedIn Profile"
              >
                <LinkedinIcon size={12} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="toolbar-contact-pill"
              aria-label="Navigate to Contact section"
            >
              <span className="heart-icon" aria-hidden="true">♥</span>
              <span>CONTACT</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (Notebook Post-It Sheet) */}
      <div className={`mobile-notebook-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-sheet">
          <div className="mobile-drawer-header">
            <span className="font-handwriting" style={{ fontSize: '1.4rem', color: '#2563eb' }}>
              index &amp; navigation
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-close-btn"
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mobile-drawer-nav">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="mobile-nav-row"
              aria-label="Home section"
            >
              <span className="mobile-row-idx font-mono">01</span>
              <span className="mobile-row-title font-tech">HOME</span>
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="mobile-nav-row"
              aria-label="About Me section"
            >
              <span className="mobile-row-idx font-mono">02</span>
              <span className="mobile-row-title font-tech">ABOUT ME</span>
            </a>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
              className="mobile-nav-row"
              aria-label="Case Studies section"
            >
              <span className="mobile-row-idx font-mono">03</span>
              <span className="mobile-row-title font-tech">CASE STUDIES (4)</span>
            </a>
            <a
              href="#dsa"
              onClick={(e) => { e.preventDefault(); scrollToSection('dsa'); }}
              className="mobile-nav-row"
              aria-label="DSA Journey section"
            >
              <span className="mobile-row-idx font-mono">04</span>
              <span className="mobile-row-title font-tech">DSA JOURNEY</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="mobile-nav-row"
              aria-label="Contact section"
            >
              <span className="mobile-row-idx font-mono">05</span>
              <span className="mobile-row-title font-tech">SAY HI / CONTACT</span>
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <span className="mobile-location-tag font-mono">📍 PUNE, INDIA // FULL STACK + AI</span>
            <div className="mobile-social-row">
              <a href={PERSONAL.links.github} target="_blank" rel="noopener noreferrer" className="mobile-social-pill" aria-label="Sirwagya's GitHub Profile">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={PERSONAL.links.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-social-pill" aria-label="Sirwagya's LinkedIn Profile">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
