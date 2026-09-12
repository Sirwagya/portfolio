import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { ALL_PROJECTS } from './projectData';
import { NexoraCollage, OnceUponMeCollage, CampusConnectCollage, VoltCraveCollage } from './ProjectCollages';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './ProjectsSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Section Header Entrance Animation
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.projects-header-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section
      id="work"
      ref={containerRef}
      className="notebook-section projects-notebook-section"
      aria-label="Selected Engineering Work"
    >
      <div className="projects-editorial-wrapper">

        {/* Section Header */}
        <div className="projects-editorial-header projects-header-anim">
          <div className="projects-handwritten-badge">
            <HandwrittenNote color="blue" size="xl" rotate={-2}>
              case studies
            </HandwrittenNote>
            <DoodleArrow
              direction="right"
              color="#2563eb"
              width={36}
              height={18}
              className="projects-arrow"
            />
          </div>

          <div className="projects-headline-row">
            <h2 className="projects-main-headline font-display">
              SELECTED WORK.
            </h2>
          </div>

          <p className="projects-sub-tagline font-sans">
            Four production systems spanning distributed AI pipelines, creative media engines, and high-throughput products.
          </p>
        </div>

        {/* Sticky Card Stack Deck */}
        <div className="sticky-sheets-stack">
          {ALL_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              id={`project-card-${proj.number}`}
              className="sticky-sheet-card"
              style={{ zIndex: (idx + 1) * 10 }}
            >
              {/* Tab Bar: only renders THIS card's tab notch at its progressive offset */}
              <div className="sticky-card-tab-bar">
                <button
                  type="button"
                  aria-label={`Scroll to ${proj.title}`}
                  onClick={() => {
                    const el = document.getElementById(`project-card-${proj.number}`);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`sticky-tab-notch tab-notch-${idx}`}
                  style={{
                    backgroundColor: proj.theme.bg,
                    color: proj.number === '01' || proj.number === '02' ? '#ffffff' : '#141416'
                  }}
                >
                  <span className="sticky-tab-star" aria-hidden="true">✦</span>
                  <span className="sticky-tab-label font-mono">PROJECT {proj.number}</span>
                </button>
              </div>

              {/* Main Physical Card Sheet */}
              <article
                className={`sticky-card-sheet sheet-theme-${proj.id}`}
                style={{
                  backgroundColor: proj.theme.bg,
                  color: proj.theme.textColor
                }}
                aria-label={`${proj.title} Case Study`}
              >
                {/* Left Column: Project Editorial Story */}
                <div className="sticky-sheet-left">
                  {/* Metadata: Date */}
                  <div
                    className="sticky-meta-eyebrow font-mono"
                    style={{ color: proj.theme.metaColor }}
                  >
                    <span
                      className="sticky-meta-bullet"
                      style={{ backgroundColor: proj.theme.textColor }}
                    />
                    <span className="sticky-date-text">{proj.date}</span>
                  </div>

                  {/* Clean Project Title */}
                  <h3 className="sticky-sheet-title font-headline">
                    {proj.title}
                  </h3>

                  {/* 1-2 line description */}
                  <p
                    className="sticky-sheet-tagline font-sans"
                    style={{ color: proj.theme.textColor }}
                  >
                    {proj.tagline}
                  </p>

                  {/* Underlined CTA Link */}
                  <div className="sticky-cta-row">
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sticky-primary-link font-mono"
                      style={{
                        color: proj.theme.textColor,
                        borderColor: proj.theme.textColor
                      }}
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={17} strokeWidth={2.4} />
                    </a>
                  </div>

                  {/* Black Cut-Corner Tags */}
                  <div className="sticky-tags-row">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="sticky-cut-tag font-mono"
                        style={{
                          backgroundColor: proj.theme.tagBg,
                          color: proj.theme.tagColor
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Framed Showcase with Washi Tape */}
                <div className="sticky-sheet-right">
                  <div
                    className="sticky-showcase-board"
                    style={{ backgroundColor: proj.theme.frameBg }}
                  >
                    {/* Washi Tape Corner Accents */}
                    <span className="sticky-washi-tape tape-corner-left" aria-hidden="true" />
                    <span className="sticky-washi-tape tape-corner-right" aria-hidden="true" />

                    {/* Authentic Quad Phone Collage */}
                    {proj.id === 'nexora-ai' && <NexoraCollage />}
                    {proj.id === 'onceuponme' && <OnceUponMeCollage />}
                    {proj.id === 'campus-connect' && <CampusConnectCollage />}
                    {proj.id === 'crave-check' && <VoltCraveCollage />}
                  </div>
                </div>
              </article>
            </div>
          ))}

          {/* Sticky Deck Runway: gives Card 04 room to stay pinned in perfect alignment before exiting */}
          <div className="sticky-deck-runway" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
};
