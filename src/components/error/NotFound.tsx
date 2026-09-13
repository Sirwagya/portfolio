import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import './NotFound.css';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404: Page Not Found — Sirwagya Shekhar';
  }, []);

  const handleReturnHome = () => {
    window.location.href = '/';
  };

  const handleNavigateSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <section className="notfound-stage" aria-label="404 Page Not Found">
      <div className="notfound-sheet-wrapper">
        <article className="notfound-sheet-card">
          {/* Authentic Washi Tape Corner Accents */}
          <WashiTape color="yellow" top="-11px" left="22px" rotate={-3.5} width={76} />
          <WashiTape color="blue" top="-9px" right="22px" rotate={3} width={76} />

          {/* Status Tag */}
          <div className="notfound-status-tag font-mono">
            <span className="notfound-pulse-dot" aria-hidden="true" />
            <span>HTTP 404 // NOT FOUND</span>
          </div>

          {/* Stamped Giant 404 Display */}
          <h1 className="notfound-display-code font-display">404</h1>

          {/* Handwritten Annotation */}
          <div className="notfound-annotation-wrap">
            <HandwrittenNote color="orange" size="xl" rotate={-1.5}>
              oops! looks like this page fell out of the notebook...
            </HandwrittenNote>
          </div>

          <p className="notfound-lead-text font-sans">
            The requested path doesn't exist or has moved. Every production system, case study, and verified benchmark is indexed right on the main portfolio page.
          </p>

          {/* CTA & Recovery Quick Links */}
          <div className="notfound-actions">
            <button
              type="button"
              onClick={handleReturnHome}
              className="notfound-return-btn font-mono"
              aria-label="Return to portfolio home page"
            >
              <span>RETURN TO NOTEBOOK</span>
              <span className="notfound-arrow-box" aria-hidden="true">
                <ArrowUpRight size={15} strokeWidth={2.6} color="#121316" />
              </span>
            </button>

            <div className="notfound-directory-block">
              <p className="notfound-dir-label font-tech">Quick Directory Index</p>
              <nav className="notfound-dir-grid font-mono" aria-label="Quick directory recovery navigation">
                <button
                  type="button"
                  onClick={() => handleNavigateSection('about')}
                  className="notfound-dir-pill"
                  aria-label="Navigate to About Me section"
                >
                  <span className="notfound-pill-idx">01</span>
                  <span>About Me</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection('work')}
                  className="notfound-dir-pill"
                  aria-label="Navigate to Case Studies section"
                >
                  <span className="notfound-pill-idx">02</span>
                  <span>Case Studies</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection('dsa')}
                  className="notfound-dir-pill"
                  aria-label="Navigate to DSA Journey section"
                >
                  <span className="notfound-pill-idx">03</span>
                  <span>DSA Journey</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateSection('contact')}
                  className="notfound-dir-pill"
                  aria-label="Navigate to Contact section"
                >
                  <span className="notfound-pill-idx">04</span>
                  <span>Get in Touch</span>
                </button>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
