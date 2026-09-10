import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Terminal } from 'lucide-react';
import { WashiTape } from '../notebook/WashiTape';
import { PaperSticker } from '../notebook/PaperSticker';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow, DoodleUnderline, DoodleStar } from '../notebook/DoodleDrawn';
import './Hero.css';

gsap.registerPlugin(useGSAP);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.hero-animate-in', { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.25 } });

    tl.from('.hero-intro-note', {
      opacity: 0,
      y: -8,
      duration: 0.18
    })
    .from('.hero-name-card', {
      opacity: 0,
      y: 10,
      duration: 0.22
    }, '-=0.08')
    .from('.hero-sticker-cluster .paper-sticker', {
      opacity: 0,
      scale: 0.85,
      stagger: 0.02,
      duration: 0.18
    }, '-=0.1')
    .from(['.hero-main-statement', '.hero-secondary-tagline', '.hero-sub-copy', '.hero-cta-box', '.hero-side-polaroid'], {
      opacity: 0,
      y: 12,
      stagger: 0.04,
      duration: 0.22,
      clearProps: 'all'
    }, '-=0.1');
  }, { scope: containerRef });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="notebook-section hero-notebook-section" aria-label="Introduction">
      <div className="hero-content-wrapper">

        {/* Top Annotation: "my name is" + handwritten arrow */}
        <div className="hero-intro-note hero-animate-in">
          <HandwrittenNote color="blue" size="lg" rotate={-3}>
            my name is
          </HandwrittenNote>
          <DoodleArrow direction="curved-down" color="#2563eb" width={38} height={38} className="intro-arrow" />
        </div>

        {/* The Central Name Wordmark Object (Irregular Outlined Box) */}
        <div className="hero-name-card hero-animate-in">
          <WashiTape color="yellow" top="-10px" left="24px" rotate={-2} width={75} />
          <WashiTape color="blue" top="-8px" right="30px" rotate={3} width={65} />

          <div className="hero-name-inner">
            <h1 className="hero-wordmark font-display">
              SIRWAGYA
              <span className="hero-wordmark-sub font-handwriting">shekhar</span>
            </h1>
          </div>

          {/* Surrounding Paper Stickers pinned around the name box */}
          <div className="hero-sticker-cluster" aria-label="Attributes">
            <PaperSticker color="green" rotate={-5} className="hero-sticker sticker-pos-1">
              MADE THINGS
            </PaperSticker>
            <PaperSticker color="yellow" rotate={4} className="hero-sticker sticker-pos-2">
              SWEAT THE DETAILS
            </PaperSticker>
            <PaperSticker color="orange" rotate={-3} className="hero-sticker sticker-pos-3">
              BUILDING IN PUBLIC
            </PaperSticker>
            <PaperSticker color="blue" rotate={6} className="hero-sticker sticker-pos-4">
              FULL STACK
            </PaperSticker>
            <PaperSticker color="pink" rotate={-4} className="hero-sticker sticker-pos-5">
              AI + SYSTEMS
            </PaperSticker>
            <PaperSticker color="yellow" rotate={5} className="hero-sticker sticker-pos-6">
              SHIPS FAST
            </PaperSticker>
          </div>
        </div>

        {/* Bottom Editorial Grid: Main Headline & Taped Polaroid Sheet */}
        <div className="hero-grid-layout">
          {/* Left Column: Big Statement & CTA */}
          <div className="hero-editorial-left">
            <div className="hero-main-statement hero-animate-in">
              <h2 className="statement-heading font-display">
                I BUILD SOFTWARE
                <span className="statement-highlight-row">
                  <span className="statement-alive">THAT FEELS ALIVE.</span>
                  <DoodleStar color="#ca8a04" size={24} className="star-decoration" />
                </span>
              </h2>
              <DoodleUnderline color="#ea580c" className="statement-underline" />
            </div>

            <div className="hero-secondary-tagline font-tech hero-animate-in">
              FULL STACK &times; AI &times; PRODUCT
            </div>

            <p className="hero-sub-copy font-sans hero-animate-in">
              I build intelligent products end-to-end — from AI systems and backend infrastructure
              to polished interfaces and interactive experiences.
            </p>

            {/* Action Row */}
            <div className="hero-cta-box hero-animate-in">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-ink hero-cta-btn"
                aria-label="Initiate contact"
              >
                <span>LET'S BUILD</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="btn-ink btn-ink-outline"
                aria-label="Inspect 4 featured case studies"
              >
                <span>CASE STUDIES (4) &darr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Taped Notebook Polaroid / Telemetry Memo */}
          <div className="hero-side-polaroid hero-animate-in">
            <div className="polaroid-frame">
              <WashiTape color="pink" top="-12px" left="50%" rotate={-1} width={80} style={{ transform: 'translateX(-50%) rotate(-1deg)' }} />

              <div className="polaroid-header">
                <span className="polaroid-pin-label font-mono">WORKSPACE DISPATCH</span>
                <span className="polaroid-status-dot" aria-label="Online status" />
              </div>

              <div className="polaroid-body">
                <div className="polaroid-monogram-art">
                  <div className="monogram-stamp font-display">
                    S<span className="monogram-dot">.</span>
                  </div>
                  <div className="monogram-meta">
                    <span className="font-tech font-bold text-dark">SIRWAGYA SHEKHAR</span>
                    <span className="font-mono text-muted">PUNE, INDIA</span>
                    <span className="font-mono text-faint">18.52&deg; N, 73.85&deg; E</span>
                  </div>
                </div>

                <div className="polaroid-divider" />

                <div className="polaroid-checklist font-mono">
                  <div className="checklist-row">
                    <span className="check-mark font-handwriting">&check;</span>
                    <span>AI Video & Multimodal Engines</span>
                  </div>
                  <div className="checklist-row">
                    <span className="check-mark font-handwriting">&check;</span>
                    <span>High-throughput Rust & FastAPI APIs</span>
                  </div>
                  <div className="checklist-row">
                    <span className="check-mark font-handwriting">&check;</span>
                    <span>Hardware-smooth React UI & Motion</span>
                  </div>
                  <div className="checklist-row">
                    <span className="check-mark font-handwriting">&check;</span>
                    <span>Deterministic Audits & Invariants</span>
                  </div>
                </div>

                <div className="polaroid-footer">
                  <Terminal size={13} className="polaroid-terminal-icon" />
                  <span className="font-mono font-bold">STATUS: AVAILABLE</span>
                </div>
              </div>

              {/* Hand-written marginalia note on bottom corner */}
              <div className="polaroid-marginalia">
                <HandwrittenNote color="red" size="sm" rotate={4}>
                  "turn chaos into software"
                </HandwrittenNote>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
