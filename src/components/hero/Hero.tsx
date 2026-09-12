import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './Hero.css';

gsap.registerPlugin(useGSAP);

export interface HeroProps {
  isReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isReady = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Accessibility: instant static display for users preferring reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(
        '.hero-name-intro, .hero-framed-nameplate, .hero-wordmark-mask, .hero-shekhar-handwritten, .pill-made-things, .pill-sweat-details, .pill-left, .pill-status-available, .pill-right, .headline-line-1, .headline-line-2, .hero-avatar-badge, .inline-hero-badge, .hero-arrow-decor, .hero-contact-cta',
        { opacity: 1, y: 0, x: 0, scale: 1, clipPath: 'none', clearProps: 'all' }
      );
      return;
    }

    // Step 1: Initial state setup — stable layout dimensions, no reflow
    gsap.set('.hero-name-intro', { opacity: 0, y: -6 });
    gsap.set('.hero-framed-nameplate', { opacity: 0, scale: 0.95 });
    gsap.set('.hero-wordmark-mask', { clipPath: 'inset(100% 0% 0% 0%)', y: 8, opacity: 0 });
    gsap.set('.hero-shekhar-handwritten', { opacity: 0, scale: 0.65, rotation: -12 });
    gsap.set(['.pill-made-things', '.pill-sweat-details'], { opacity: 0, scale: 0.82, y: -5 });
    gsap.set(['.pill-left', '.pill-status-available', '.pill-right'], { opacity: 0, y: 6, scale: 0.94 });
    gsap.set('.headline-line-1', { opacity: 0, y: 10 });
    gsap.set('.headline-line-2', { opacity: 0, y: 10 });
    gsap.set('.hero-avatar-badge', { opacity: 0, scale: 0.75 });
    gsap.set('.inline-hero-badge', { opacity: 0, scale: 0 });
    gsap.set('.hero-arrow-decor', { opacity: 0, scale: 0.7 });
    gsap.set('.hero-contact-cta', { opacity: 0, y: 8, scale: 0.96 });

    const tl = gsap.timeline({
      paused: !isReady,
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        gsap.set(
          '.hero-name-intro, .hero-framed-nameplate, .hero-wordmark-mask, .hero-shekhar-handwritten, .pill-made-things, .pill-sweat-details, .pill-left, .pill-status-available, .pill-right, .headline-line-1, .headline-line-2, .hero-avatar-badge, .inline-hero-badge, .hero-arrow-decor, .hero-contact-cta',
          { clearProps: 'opacity,visibility,clipPath' }
        );
      }
    });
    tlRef.current = tl;

    // STEP 1: "my name is" subtle fade/slide in
    tl.to('.hero-name-intro', {
      opacity: 1,
      y: 0,
      duration: 0.22
    }, 0.02);

    // STEP 2: SIRWAGYA wordmark frame & masked text reveal
    tl.to('.hero-framed-nameplate', {
      opacity: 1,
      scale: 1,
      duration: 0.26,
      ease: 'back.out(1.5)'
    }, 0.08);

    tl.to('.hero-wordmark-mask', {
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      duration: 0.28,
      ease: 'power3.out'
    }, 0.1);

    // STEP 3: Handwritten "shekhar" appears
    tl.to('.hero-shekhar-handwritten', {
      opacity: 1,
      scale: 1,
      rotation: -5,
      duration: 0.22,
      ease: 'back.out(1.8)'
    }, 0.22);

    // STEP 4: Upper labels appear with slight stagger
    tl.to(['.pill-made-things', '.pill-sweat-details'], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: 'back.out(1.5)'
    }, 0.3);

    // STEP 5: Lower metadata labels appear in row
    tl.to(['.pill-left', '.pill-status-available', '.pill-right'], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.2,
      stagger: 0.05,
      ease: 'back.out(1.4)'
    }, 0.38);

    // STEP 6: Main headline reveals line by line
    tl.to('.headline-line-1', {
      opacity: 1,
      y: 0,
      duration: 0.24,
      ease: 'power2.out'
    }, 0.5);

    tl.to('.headline-line-2', {
      opacity: 1,
      y: 0,
      duration: 0.24,
      ease: 'power3.out'
    }, 0.62);

    // STEP 7: Framing portraits appear
    tl.to('.hero-avatar-badge', {
      opacity: 1,
      scale: 1,
      duration: 0.26,
      stagger: 0.06,
      ease: 'back.out(1.5)'
    }, 0.72);

    // STEP 8: Decorative symbols and arrows
    tl.to('.inline-hero-badge', {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      stagger: 0.05,
      ease: 'back.out(2)'
    }, 0.78);

    tl.to('.hero-arrow-decor', {
      opacity: 1,
      scale: 1,
      duration: 0.18,
      stagger: 0.04
    }, 0.82);

    // STEP 9: CTA appears last
    tl.to('.hero-contact-cta', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.26,
      ease: 'back.out(1.5)',
      clearProps: 'transform,opacity'
    }, 0.9);

  }, { scope: containerRef, dependencies: [isReady] });

  // Play timeline when isReady becomes true
  useEffect(() => {
    if (isReady && tlRef.current && tlRef.current.paused()) {
      tlRef.current.play();
    }
  }, [isReady]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="notebook-section hero-notebook-section" aria-label="Introduction">
      {/* Central Unified Hero Composition Container */}
      <div className="hero-composition">

        {/* 1. Name Intro: "my name is" */}
        <div className="hero-name-intro">
          <span className="font-handwriting my-name-is-text">my name is</span>
          <svg className="my-name-underline" width="68" height="8" viewBox="0 0 64 8" fill="none">
            <path d="M2 3C18 1.5 46 2 62 3.5" stroke="#121316" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6.5C22 5 44 5.5 58 6.5" stroke="#121316" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* 2. Wordmark Block: Upper Stickers + Orange Framed Box + shekhar */}
        <div className="hero-wordmark-block">
          {/* Upper Stickers hugging the top corners */}
          <div className="pill-sticker pill-made-things">
            <span>MADE THINGS</span>
          </div>

          <div className="pill-sticker pill-sweat-details">
            <span>SWEAT THE DETAILS</span>
          </div>

          {/* Main Orange Framed Box */}
          <div className="hero-framed-nameplate">
            <div className="hero-wordmark-mask">
              <div className="hero-wordmark font-pixel" aria-label="Sirwagya">
                SIRWAGYA
              </div>
            </div>
            <span className="hero-shekhar-handwritten font-handwriting">
              shekhar
            </span>
          </div>
        </div>

        {/* 3. Metadata Row: Product Engineer + OPEN TO NEW WORK + Pune/Remote */}
        <div className="hero-metadata-row">
          <div className="pill-with-arrow pill-left">
            <div className="pill-sticker pill-role">
              <span>Product Engineer</span>
            </div>
            <DoodleArrow direction="up-right" color="#ea580c" width={22} height={22} className="arrow-to-box-left hero-arrow-decor" />
          </div>

          <div className="pill-sticker pill-status-available">
            <span className="status-blue-dot" />
            <span>OPEN TO NEW WORK AND GOOD PROBLEMS</span>
          </div>

          <div className="pill-with-arrow pill-right">
            <div className="pill-sticker pill-location">
              <span>Pune / Remote</span>
            </div>
            <DoodleArrow direction="up-right" color="#0369a1" width={22} height={22} className="arrow-to-box-right hero-arrow-decor" />
          </div>
        </div>

        {/* 4. Headline Block: Flanking Portraits + 2 Compact Lines */}
        <div className="hero-headline-block">
          {/* Left Circular Photo Badge — Frames line 1 of headline */}
          <div className="hero-avatar-badge avatar-left" title="Sirwagya Shekhar">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Sirwagya Shekhar, Full Stack & AI Developer"
              width="58"
              height="58"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Right Circular Photo Badge — Frames line 2 of headline */}
          <div className="hero-avatar-badge avatar-right" title="Studio Workspace">
            <img
              src="/images/workspace.jpg"
              alt="Engineering workstation with multi-monitor developer setup"
              width="58"
              height="58"
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="hero-statement-h1 font-headline">
            <span className="headline-line headline-line-1">
              I build software that{' '}
              <span className="inline-hero-badge badge-target">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#15803d" />
                </svg>
              </span>
            </span>
            <br />
            <span className="headline-line headline-line-2">
              feels alive.{' '}
              <span className="inline-hero-badge badge-flower">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#f472b6" stroke="#9d174d" strokeWidth="1.5">
                  <path d="M12 2C13.5 5 16 6 19 6C16 7.5 15 10 15 12C15 14 16 16.5 19 18C16 18 13.5 19 12 22C10.5 19 8 18 5 18C8 16.5 9 14 9 12C9 10 8 7.5 5 6C8 6 10.5 5 12 2Z" />
                  <circle cx="12" cy="12" r="3" fill="#fde047" stroke="#854d0e" strokeWidth="1" />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        {/* 5. CTA Button */}
        <div className="hero-contact-cta">
          <button
            onClick={() => scrollToSection('contact')}
            className="hero-contact-dark-btn"
            aria-label="Contact Sirwagya"
          >
            <span className="btn-square-accent" />
            <span>CONTACT ME</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
