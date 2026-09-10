import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCardNexora } from './ProjectCardNexora';
import { ProjectCardOnceUponMe } from './ProjectCardOnceUponMe';
import { ProjectCardCampusConnect } from './ProjectCardCampusConnect';
import { ProjectCardCraveCheck } from './ProjectCardCraveCheck';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './ProjectsSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0); // 0, 1, 2, 3
  const [viewMode, setViewMode] = useState<'focused' | 'all'>('focused');

  const projectsMeta = [
    { id: 'nexora', num: '01', title: 'NEXORA AI', category: 'AI & Rust Architecture', color: 'yellow' },
    { id: 'onceuponme', num: '02', title: 'ONCEUPONME', category: 'Media & Video Engine', color: 'pink' },
    { id: 'campus', num: '03', title: 'CAMPUS CONNECT', category: 'Full Stack Campus OS', color: 'blue' },
    { id: 'crave', num: '04', title: 'CRAVE CHECK', category: 'Vision & Fast Caching', color: 'orange' }
  ];

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.projects-header-item', {
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

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (viewMode === 'all') {
      const elementId = `project-${projectsMeta[index].id}`;
      const el = document.getElementById(elementId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="work" ref={containerRef} className="notebook-section projects-notebook-section" aria-label="Featured Engineering Projects">
      <div className="projects-content-wrapper">

        {/* Section Header: Handwritten label + Large Title */}
        <div className="projects-header-block projects-header-item">
          <div className="projects-annotation-row">
            <HandwrittenNote color="blue" size="xl" rotate={-2}>
              case studies
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#2563eb" width={38} height={20} className="projects-arrow" />
            <span className="projects-count-badge font-mono">4 PRODUCTION SYSTEMS</span>
          </div>

          <h2 className="projects-main-heading font-display">
            SELECTED WORK.
          </h2>

          <p className="projects-subtext font-sans">
            Detailed engineering case studies: architecture blueprints, data pipelines,
            system invariants, and verified repositories.
          </p>
        </div>

        {/* Project Navigation Tabs (Physical Tab Switcher) */}
        <div className="project-tabs-toolbar projects-header-item">
          <div className="tabs-button-cluster" role="tablist" aria-label="Case Study Tabs">
            {projectsMeta.map((p, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(idx)}
                  className={`project-tab-btn tab-color-${p.color} ${isActive ? 'is-active' : ''}`}
                >
                  <span className="tab-num font-mono">{p.num}</span>
                  <span className="tab-title font-tech">{p.title}</span>
                </button>
              );
            })}
          </div>

          <div className="view-toggle-wrap">
            <button
              onClick={() => setViewMode(viewMode === 'focused' ? 'all' : 'focused')}
              className="view-toggle-btn font-mono"
            >
              {viewMode === 'focused' ? 'SHOW ALL 4' : 'FOCUS TAB VIEW'}
            </button>
          </div>
        </div>

        {/* Project Sheets Showcase */}
        <div className="projects-sheets-deck">
          {viewMode === 'focused' ? (
            <div className="focused-project-wrapper">
              {activeTab === 0 && <ProjectCardNexora />}
              {activeTab === 1 && <ProjectCardOnceUponMe />}
              {activeTab === 2 && <ProjectCardCampusConnect />}
              {activeTab === 3 && <ProjectCardCraveCheck />}

              {/* Quick Next/Prev Project Switcher */}
              <div className="project-sheet-pagination">
                <button
                  disabled={activeTab === 0}
                  onClick={() => setActiveTab(activeTab - 1)}
                  className="pagination-btn font-tech"
                >
                  &larr; PREVIOUS CASE
                </button>
                <span className="pagination-count font-mono">
                  {activeTab + 1} OF 4
                </span>
                <button
                  disabled={activeTab === 3}
                  onClick={() => setActiveTab(activeTab + 1)}
                  className="pagination-btn font-tech"
                >
                  NEXT CASE &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div className="all-stacked-projects">
              <div id="project-nexora" className="stacked-sheet-item">
                <ProjectCardNexora />
              </div>
              <div id="project-onceuponme" className="stacked-sheet-item">
                <ProjectCardOnceUponMe />
              </div>
              <div id="project-campus" className="stacked-sheet-item">
                <ProjectCardCampusConnect />
              </div>
              <div id="project-crave" className="stacked-sheet-item">
                <ProjectCardCraveCheck />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
