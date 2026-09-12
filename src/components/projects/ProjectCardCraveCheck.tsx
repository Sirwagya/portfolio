import React from 'react';
import { ArrowUpRight, Scan, ShieldCheck, Zap } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import './ProjectCardCraveCheck.css';

export const ProjectCardCraveCheck: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'crave-check')!;

  const pipeline = [
    'IMAGE', 'VISION', 'CACHE', 'ANALYSIS', 'PERSONALIZATION'
  ];

  return (
    <article className="project-folder-sheet crave-sheet" aria-label="Crave Check Case Study">
      {/* Folder Tab at Top Left */}
      <div className="folder-tab-notch tab-emerald tab-notch-04">
        <span className="folder-tab-title font-mono">+ PROJECT 04 &bull; CRAVE CHECK</span>
      </div>

      <div className="sheet-layout-grid">
        {/* Left Column: Vision Story */}
        <div className="sheet-story-left">
          <div className="sheet-meta-bullet font-mono">
            <span className="bullet-dot dot-emerald" />
            <span>2025 &bull; AI / COMPUTER VISION &bull; HIGH THROUGHPUT</span>
          </div>

          <h3 className="sheet-big-title font-headline">
            Crave Check
          </h3>

          <p className="sheet-punchy-sentence font-sans">
            Sub-second food vision analysis delivering instant nutrition and allergen intelligence.
          </p>

          <div className="sheet-marginalia-note">
            <HandwrittenNote color="green" size="md" rotate={2}>
              "sub-400ms cached inference"
            </HandwrittenNote>
          </div>

          <div className="sheet-actions-row">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-cta-link link-emerald font-tech"
            >
              <span>VIEW REPOSITORY &amp; BENCHMARKS</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="sheet-tech-footer font-mono">
            <span>CORE STACK: Python &bull; FastAPI &bull; Gemini 1.5 Flash &bull; Redis Cache &bull; Next.js</span>
          </div>
        </div>

        {/* Right Column: ONE Large Taped Mobile Food Scanner Board */}
        <div className="sheet-visual-right">
          <div className="taped-visual-canvas scanner-canvas">
            {/* Washi Tapes on Corners */}
            <WashiTape color="yellow" top="-10px" left="-10px" rotate={-45} width={60} />
            <WashiTape color="yellow" top="-10px" right="-10px" rotate={45} width={60} />
            <WashiTape color="yellow" bottom="-10px" left="-10px" rotate={45} width={60} />
            <WashiTape color="yellow" bottom="-10px" right="-10px" rotate={-45} width={60} />

            <div className="canvas-header font-mono">
              <div className="scanner-header-left">
                <Scan size={14} className="scanner-icon" />
                <span className="canvas-title">REAL-TIME MULTIMODAL INGESTION</span>
              </div>
              <span className="cache-hit-tag font-mono">
                <Zap size={11} /> 94% CACHE HIT
              </span>
            </div>

            {/* Mobile Viewfinder Representation */}
            <div className="scanner-viewfinder-board">
              <div className="viewfinder-lens-box">
                <div className="viewfinder-crosshair">
                  <span className="bracket tl" />
                  <span className="bracket tr" />
                  <span className="bracket bl" />
                  <span className="bracket br" />
                </div>

                <div className="detected-item-pill font-mono">
                  <span>DETECTED: MEDITERRANEAN QUINOA BOWL</span>
                </div>
              </div>

              {/* Nutrition & Allergen Tags */}
              <div className="detected-telemetry-row font-mono">
                <div className="macro-chip">
                  <span className="macro-label">CALORIES</span>
                  <span className="macro-val">520 KCAL</span>
                </div>
                <div className="macro-chip">
                  <span className="macro-label">PROTEIN</span>
                  <span className="macro-val">24G</span>
                </div>
                <div className="macro-chip allergen-safe">
                  <ShieldCheck size={12} />
                  <span>GLUTEN FREE</span>
                </div>
              </div>
            </div>

            {/* Pipeline Step Annotation Strip */}
            <div className="scanner-pipeline-strip font-mono">
              {pipeline.map((p, idx) => (
                <React.Fragment key={p}>
                  <span className="pipe-step">{p}</span>
                  {idx < pipeline.length - 1 && <span className="pipe-arrow">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="canvas-footer font-handwriting">
              <span style={{ color: '#86efac', fontSize: '1.25rem' }}>
                "instant macro &amp; allergen safety at point-of-sale"
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
