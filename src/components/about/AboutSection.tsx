import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WashiTape } from '../notebook/WashiTape';
import { PaperSticker, type StickerColor } from '../notebook/PaperSticker';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './AboutSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.about-reveal-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 25,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.2)'
    });

    gsap.from('.skill-paper-tag', {
      scrollTrigger: {
        trigger: '.about-skills-shelf',
        start: 'top 88%',
      },
      scale: 0.8,
      opacity: 0,
      y: 15,
      stagger: 0.05,
      duration: 0.4,
      ease: 'back.out(1.5)'
    });
  }, { scope: containerRef });

  const careItems = [
    "the small invisible details that make software feel great",
    "weird edge cases and strict invariant validation",
    "systems that actually work under real load",
    "interfaces that feel immediate, fluid, and alive",
    "shipping real things that people can use right now"
  ];

  const skillTags: { name: string; color: StickerColor; rotate: number }[] = [
    { name: "FULL STACK", color: "blue", rotate: -3 },
    { name: "AI SYSTEMS", color: "pink", rotate: 2 },
    { name: "DISTRIBUTED BACKEND", color: "yellow", rotate: -2 },
    { name: "PRODUCT ENGINEERING", color: "green", rotate: 4 },
    { name: "MOTION & INTERACTION", color: "orange", rotate: -4 },
    { name: "AUTOMATION & PIPELINES", color: "purple", rotate: 2 },
    { name: "RUST & AXUM", color: "white", rotate: -1 },
    { name: "FASTAPI & PYTHON", color: "yellow", rotate: 3 },
    { name: "REACT 19 & NEXT.JS", color: "blue", rotate: -3 },
    { name: "POSTGRESQL & REDIS", color: "green", rotate: 2 },
    { name: "RABBITMQ QUEUES", color: "orange", rotate: -2 },
    { name: "OPENCV & REMOTION", color: "pink", rotate: 3 }
  ];

  return (
    <section id="about" ref={containerRef} className="notebook-section about-notebook-section" aria-label="About Me">
      <div className="about-content-wrapper">

        {/* Section Header: Handwritten label + title */}
        <div className="about-header-row about-reveal-item">
          <div className="about-label-badge">
            <HandwrittenNote color="blue" size="xl" rotate={-2}>
              about me
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#2563eb" width={38} height={20} className="about-arrow" />
          </div>

          <h2 className="about-title-stamp font-display">
            WHAT'S UP?
          </h2>
        </div>

        {/* Center Editorial Layout: Conversational Note & Taped Polaroid */}
        <div className="about-notebook-grid">

          {/* Left / Center Card: Conversational Statement */}
          <div className="about-memo-card about-reveal-item">
            <WashiTape color="yellow" top="-10px" left="24px" rotate={-2} width={70} />

            <p className="about-lead-paragraph font-sans">
              I'm a full-stack + AI developer who likes building things that sit somewhere
              between <strong>strong engineering</strong> and <strong>thoughtful product design</strong>.
            </p>

            <div className="about-care-box">
              <div className="about-care-header">
                <span className="font-handwriting" style={{ fontSize: '1.4rem', color: '#ea580c' }}>
                  things i obsess over:
                </span>
              </div>
              <ul className="about-care-list font-mono">
                {careItems.map((item, idx) => (
                  <li key={idx} className="about-care-item">
                    <span className="care-marker">&rarr;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="about-foot-note font-sans">
              Currently studying computer science in Pune, India, while architecting real-world distributed
              systems and multimodal video engines.
            </p>
          </div>

          {/* Right Card: Taped Index Card with Philosophy */}
          <div className="about-side-card about-reveal-item">
            <div className="side-card-inner">
              <WashiTape color="pink" top="-10px" right="20px" rotate={3} width={65} />

              <div className="side-card-header">
                <span className="font-mono text-muted text-xs">FIELD NOTES #01</span>
                <span className="font-mono text-xs">PUNE, IN</span>
              </div>

              <div className="side-card-body font-handwriting">
                <p style={{ fontSize: '1.45rem', color: '#18181b', lineHeight: '1.3' }}>
                  "Great software isn't just about passing tests or neat PRs — it's about how the tool feels in someone's hands when they use it every day."
                </p>
              </div>

              <div className="side-card-divider" />

              <div className="side-card-points font-mono">
                <div className="point-row">
                  <span className="point-badge">MODE</span>
                  <span>BUILD &bull; SHIP &bull; REFINE</span>
                </div>
                <div className="point-row">
                  <span className="point-badge">STACK</span>
                  <span>FULL STACK &times; AI CORE</span>
                </div>
                <div className="point-row">
                  <span className="point-badge">GOAL</span>
                  <span>ZERO FLUFF &bull; REAL UTILITY</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Skill Tags Shelf: Irregular Colorful Paper Labels */}
        <div className="about-skills-shelf">
          <div className="skills-shelf-header about-reveal-item">
            <span className="font-mono text-muted" style={{ fontSize: '0.78rem', letterSpacing: '0.1em' }}>
              CAPABILITIES &amp; CORE TOOLS
            </span>
            <HandwrittenNote color="green" size="sm" rotate={2}>
              (tested in production)
            </HandwrittenNote>
          </div>

          <div className="skills-tags-cluster">
            {skillTags.map((tag) => (
              <PaperSticker
                key={tag.name}
                color={tag.color}
                rotate={tag.rotate}
                className="skill-paper-tag"
              >
                {tag.name}
              </PaperSticker>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
