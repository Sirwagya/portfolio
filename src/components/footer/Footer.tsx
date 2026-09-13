import React from 'react';
import { PERSONAL } from '../../data/personal';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="notebook-editorial-footer" aria-label="Colophon and Navigation">
      {/* Horizon Wave Divider */}
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="footer-wave-divider" aria-hidden="true" focusable="false">
        <path d="M-10 110C420 10 1030 4 1450 70" stroke="rgba(20, 20, 22, 0.12)" strokeWidth="1.5" />
      </svg>

      <div className="footer-inner-wrapper">
        <div className="footer-main-row">

          {/* Left: Giant Display Signature */}
          <div className="footer-brand-column">
            <p className="footer-display-name font-display">SIRWAGYA SHEKHAR</p>
            <div className="footer-role-pill font-mono">
              <span className="footer-role-dot" />
              <span>Full Stack &times; AI Engineer &bull; Pune / Remote</span>
            </div>
          </div>

          {/* Right: Quick Nav & Tactile Socials */}
          <div className="footer-actions-column">
            <nav className="footer-nav-links font-mono" aria-label="Footer Quick Links">
              <a href="#about" className="footer-nav-item">About</a>
              <a href="#work" className="footer-nav-item">Case Study</a>
              <a href="#dsa" className="footer-nav-item">DSA Journey</a>
              <a href="#contact" className="footer-nav-item">Contact</a>
            </nav>

            <div className="footer-social-circles">
              <a
                href={PERSONAL.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn circle-yellow"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={PERSONAL.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn circle-pink"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${PERSONAL.links.email}`}
                className="footer-social-btn circle-green"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Craft Statement */}
        <div className="footer-bottom-bar font-mono">
          <span>&copy; 2026 Sirwagya Shekhar. All rights reserved.</span>
          <span className="footer-badge-pill">
            <span>&#10022;</span>
            <span>Crafted with code &amp; intention</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
