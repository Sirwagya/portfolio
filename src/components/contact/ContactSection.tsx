import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { PERSONAL } from '../../data/personal';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow, DoodleUnderline } from '../notebook/DoodleDrawn';
import { WashiTape } from '../notebook/WashiTape';
import './ContactSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.contact-reveal-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" ref={containerRef} className="notebook-section contact-notebook-section" aria-label="Contact and Collaboration">
      <div className="contact-content-wrapper">

        {/* Top Annotation: "say hi" + handwritten arrow */}
        <div className="contact-annotation-header contact-reveal-item">
          <HandwrittenNote color="blue" size="xl" rotate={-3}>
            say hi
          </HandwrittenNote>
          <DoodleArrow direction="curved-down" color="#2563eb" width={42} height={42} className="contact-arrow" />
        </div>

        {/* Giant Headline */}
        <div className="contact-headline-box contact-reveal-item">
          <h2 className="contact-giant-headline font-display">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="interesting-highlight">
              INTERESTING.
            </span>
          </h2>
          <DoodleUnderline color="#ea580c" className="contact-underline" width="380px" />
        </div>

        {/* Supporting Copy */}
        <p className="contact-supporting-copy font-sans contact-reveal-item">
          Have an interesting product, engineering problem, or idea?
          <br className="line-break-desktop" />
          Let's talk.
        </p>

        {/* Huge Tactile CTA Button & Direct Email Card */}
        <div className="contact-actions-grid contact-reveal-item">

          {/* Left: Huge "GET IN TOUCH →" Button */}
          <div className="cta-launcher-col">
            <a
              href={`mailto:${PERSONAL.links.email}?subject=Collaboration%20Inquiry%20via%20sirwagya.dev`}
              className="btn-ink get-in-touch-btn"
              aria-label="Send email to Sirwagya"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight size={22} strokeWidth={2.8} />
            </a>

            <div className="copy-email-chip">
              <span className="font-mono text-muted">{PERSONAL.links.email}</span>
              <button
                onClick={handleCopyEmail}
                className="copy-btn font-mono"
                aria-label="Copy email address"
              >
                {copied ? <Check size={13} className="check-icon" /> : <Copy size={13} />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Right: Taped Business Card with Direct Verified Socials */}
          <div className="business-card-col">
            <div className="taped-business-card">
              <WashiTape color="yellow" top="-10px" right="28px" rotate={2} width={70} />

              <div className="card-header-bar font-mono">
                <span className="font-bold">SIRWAGYA SHEKHAR</span>
                <span className="text-muted">PUNE, IN</span>
              </div>

              <div className="card-social-links">
                <a
                  href={PERSONAL.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row-link font-tech"
                >
                  <div className="link-left">
                    <GithubIcon size={16} />
                    <span>GITHUB</span>
                  </div>
                  <span className="font-mono handle-tag">@Sirwagya &rarr;</span>
                </a>

                <a
                  href={PERSONAL.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row-link font-tech"
                >
                  <div className="link-left">
                    <LinkedinIcon size={16} />
                    <span>LINKEDIN</span>
                  </div>
                  <span className="font-mono handle-tag">in/sirwxgya &rarr;</span>
                </a>
              </div>

              <div className="card-footer-note font-handwriting">
                "building fast &bull; sweating the details"
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
