import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import './ProjectCardNexora.css';

export const ProjectCardNexora: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'nexora-ai')!;

  const pipelineStages = [
    { num: '01', title: 'FIELD EVIDENCE', desc: 'Photos, Drone Scans, BIM logs' },
    { num: '02', title: 'AI EXTRACTION', desc: 'Multimodal Vision & OCR' },
    { num: '03', title: 'HYBRID MATCH', desc: 'Vectors (Qdrant) + Lexical Graph' },
    { num: '04', title: 'ASYNC ENGINE', desc: 'Distributed RabbitMQ Workers' },
    { num: '05', title: 'TRUST PLANE', desc: 'Deterministic Invariant Validation' },
    { num: '06', title: 'PLANNER REVIEW', desc: 'Auditable Progress Sign-off' },
  ];

  return (
    <article className="project-folder-sheet nexora-sheet" aria-label="Nexora AI Case Study">
      {/* Folder Tab at Top Left */}
      <div className="folder-tab-notch tab-blue tab-notch-01">
        <span className="folder-tab-title font-mono">+ PROJECT 01 &bull; NEXORA AI</span>
      </div>

      <div className="sheet-layout-grid">
        {/* Left Column: Huge Editorial Story */}
        <div className="sheet-story-left">
          <div className="sheet-meta-bullet font-mono">
            <span className="bullet-dot" />
            <span>2026 &bull; AI SYSTEMS / DISTRIBUTED ARCHITECTURE &bull; TEAM PROJECT</span>
          </div>

          <h3 className="sheet-big-title font-headline">
            Nexora AI
          </h3>

          <p className="sheet-punchy-sentence font-sans">
            Turning fragmented construction evidence into auditable project intelligence.
          </p>

          <div className="sheet-marginalia-note">
            <HandwrittenNote color="blue" size="md" rotate={-2}>
              "evidence &rarr; auditable intelligence"
            </HandwrittenNote>
          </div>

          <div className="sheet-actions-row">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-cta-link font-tech"
            >
              <span>VIEW REPOSITORY &amp; ARCHITECTURE</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="sheet-tech-footer font-mono">
            <span>CORE STACK: Rust (Axum) &bull; FastAPI &bull; PostgreSQL &bull; Qdrant &bull; RabbitMQ</span>
          </div>
        </div>

        {/* Right Column: ONE Large Taped Visual Board */}
        <div className="sheet-visual-right">
          <div className="taped-visual-canvas blueprint-dark-canvas">
            {/* Washi Tapes on Corners */}
            <WashiTape color="neutral" top="-10px" left="-10px" rotate={-45} width={60} />
            <WashiTape color="neutral" top="-10px" right="-10px" rotate={45} width={60} />
            <WashiTape color="neutral" bottom="-10px" left="-10px" rotate={45} width={60} />
            <WashiTape color="neutral" bottom="-10px" right="-10px" rotate={-45} width={60} />

            <div className="canvas-header font-mono">
              <span className="canvas-title">PIPELINE: EVIDENCE &rarr; INTELLIGENCE</span>
              <span className="canvas-badge">STRICT DETERMINISTIC INVARIANTS</span>
            </div>

            {/* 6 Large Clear Stages */}
            <div className="pipeline-nodes-deck">
              {pipelineStages.map((stage, idx) => (
                <div key={stage.num} className="pipeline-node-card">
                  <div className="node-num font-mono">{stage.num}</div>
                  <div className="node-text-wrap">
                    <div className="node-title font-tech">{stage.title}</div>
                    <div className="node-desc font-mono">{stage.desc}</div>
                  </div>
                  {idx < pipelineStages.length - 1 && (
                    <div className="node-flow-arrow font-mono">&rarr;</div>
                  )}
                </div>
              ))}
            </div>

            <div className="canvas-footer font-handwriting">
              <span style={{ color: '#60a5fa', fontSize: '1.25rem' }}>
                "zero hallucination in enterprise schedule tracking"
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
