import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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

      const sections = ['hero', 'about', 'work', 'playground', 'contact'];
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`notebook-navbar-container ${scrolled ? 'is-sticky' : ''}`}>
        <nav className="notebook-toolbar" aria-label="Main Navigation">
          {/* Left: Circular Monogram + Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="toolbar-brand"
            aria-label="Sirwagya Shekhar Home"
          >
            <span className="brand-avatar-circle" aria-hidden="true">S</span>
            <span className="brand-logo-text font-tech">SIRWAGYA<span className="brand-tld">.DEV</span></span>
          </a>

          {/* Center Links (Physical Toolbar style) */}
          <div className="toolbar-nav-links">
            <button
              onClick={() => scrollToSection('hero')}
              className={`toolbar-link ${activeSection === 'hero' ? 'active' : ''}`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`toolbar-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className={`toolbar-link ${activeSection === 'work' ? 'active' : ''}`}
            >
              CASE STUDIES
            </button>
            <button
              onClick={() => scrollToSection('playground')}
              className={`toolbar-link ${activeSection === 'playground' ? 'active' : ''}`}
            >
              <Sparkles size={12} className="toolbar-sparkle" />
              PLAYGROUND
            </button>
          </div>

          {/* Right: Social icons + Contact Button */}
          <div className="toolbar-right-actions">
            <div className="toolbar-social-icons">
              <a
                href={PERSONAL.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="toolbar-icon-btn"
                aria-label="Sirwagya's GitHub Profile"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={PERSONAL.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="toolbar-icon-btn"
                aria-label="Sirwagya's LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="toolbar-contact-btn"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (Notebook Post-It Sheet) */}
      <div className={`mobile-notebook-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-sheet">
          <div className="mobile-drawer-header">
            <span className="font-handwriting" style={{ fontSize: '1.4rem', color: '#2563eb' }}>
              index & navigation
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
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-row">
              <span className="mobile-row-idx font-mono">01</span>
              <span className="mobile-row-title font-tech">HOME</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-row">
              <span className="mobile-row-idx font-mono">02</span>
              <span className="mobile-row-title font-tech">ABOUT ME</span>
            </button>
            <button onClick={() => scrollToSection('work')} className="mobile-nav-row">
              <span className="mobile-row-idx font-mono">03</span>
              <span className="mobile-row-title font-tech">CASE STUDIES (4)</span>
            </button>
            <button onClick={() => scrollToSection('playground')} className="mobile-nav-row">
              <span className="mobile-row-idx font-mono">04</span>
              <span className="mobile-row-title font-tech">PLAYGROUND</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-row">
              <span className="mobile-row-idx font-mono">05</span>
              <span className="mobile-row-title font-tech">SAY HI / CONTACT</span>
            </button>
          </div>

          <div className="mobile-drawer-footer">
            <span className="mobile-location-tag font-mono">📍 PUNE, INDIA // FULL STACK + AI</span>
            <div className="mobile-social-row">
              <a href={PERSONAL.links.github} target="_blank" rel="noopener noreferrer" className="mobile-social-pill">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={PERSONAL.links.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-social-pill">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
