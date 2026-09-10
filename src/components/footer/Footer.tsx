import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL } from '../../data/personal';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="notebook-footer" aria-label="Site Colophon">
      <div className="footer-content-wrapper font-mono">

        {/* Top Row: Brand & Status */}
        <div className="footer-main-row">
          <div className="footer-left-meta">
            <span className="footer-brand font-tech">SIRWAGYA.DEV</span>
            <span className="footer-divider">&bull;</span>
            <span className="footer-discipline">FULL STACK &times; AI</span>
            <span className="footer-divider">&bull;</span>
            <span className="footer-location">PUNE, INDIA</span>
          </div>

          <div className="footer-social-cluster">
            <a
              href={PERSONAL.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <GithubIcon size={13} />
              <span>GITHUB</span>
            </a>
            <span className="footer-divider">&bull;</span>
            <a
              href={PERSONAL.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <LinkedinIcon size={13} />
              <span>LINKEDIN</span>
            </a>
            <span className="footer-divider">&bull;</span>
            <button
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Back to top of notebook"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Colophon Notice */}
        <div className="footer-copyright-bar">
          <span>&copy; 2026 SIRWAGYA SHEKHAR. HANDMADE &bull; ALL RIGHTS RESERVED.</span>
          <span className="footer-notebook-stamp font-handwriting" style={{ fontSize: '1.2rem', color: '#2563eb' }}>
            studio notebook vol. 01
          </span>
        </div>

      </div>
    </footer>
  );
};
