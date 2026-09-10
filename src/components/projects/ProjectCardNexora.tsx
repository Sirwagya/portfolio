import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Database, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { PaperSticker } from '../notebook/PaperSticker';
import './ProjectCardNexora.css';

export const ProjectCardNexora: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'nexora-ai')!;
  const [activeStep, setActiveStep] = useState(0);

  const steps = project.pipelineSteps || [];

  return (
    <article className="project-sheet nexora-sheet" aria-label="Nexora AI Case Study">
      {/* Decorative Washi Tapes */}
      <WashiTape color="yellow" top="-10px" left="28px" rotate={-2} width={80} />
      <WashiTape color="blue" top="-8px" right="36px" rotate={3} width={70} />

      <div className="sheet-inner">
        {/* Top Header Stamp & Team Tag */}
        <div className="sheet-top-banner">
          <div className="sheet-badge-group">
            <PaperSticker color="yellow" rotate={-2}>
              PROJECT // 01
            </PaperSticker>
            <PaperSticker color="green" rotate={1}>
              FLAGSHIP ARCHITECTURE
            </PaperSticker>
            <span className="sheet-category font-mono">{project.category}</span>
          </div>

          <div className="sheet-team-pill font-mono">
            <Users size={13} className="team-icon" />
            <span>TEAM PROJECT &bull; TEAM KASUKABE</span>
          </div>
        </div>

        {/* Big Editorial Title & Tagline */}
        <div className="sheet-title-section">
          <div className="title-with-marginalia">
            <h3 className="sheet-project-title font-display">
              {project.title}
            </h3>
            <HandwrittenNote color="blue" size="md" rotate={2} className="title-note">
              "evidence &rarr; auditable intelligence"
            </HandwrittenNote>
          </div>
          <p className="sheet-project-tagline font-tech">
            {project.tagline}
          </p>
        </div>

        {/* Transparent Attribution Banner */}
        <div className="sheet-attribution-box font-mono">
          <div className="attr-row">
            <span className="attr-key">PROJECT TEAM:</span>
            <span className="attr-val">{project.attribution}</span>
          </div>
          <div className="attr-row highlight-my-role">
            <span className="attr-key">MY CONTRIBUTIONS:</span>
            <span className="attr-val">{project.myContribution}</span>
          </div>
        </div>

        {/* Overview Paragraph */}
        <p className="sheet-overview-text font-sans">
          {project.overview}
        </p>

        {/* Technical Architecture Blueprint Board */}
        <div className="sheet-blueprint-box">
          <div className="blueprint-header">
            <div className="blueprint-title">
              <Cpu size={14} className="blueprint-icon" />
              <span className="font-mono font-bold">SYSTEM PIPELINE &amp; DATA FLOW</span>
            </div>
            <div className="blueprint-annotation">
              <HandwrittenNote color="red" size="sm" rotate={-1}>
                zero hallucination in enterprise schedules
              </HandwrittenNote>
            </div>
          </div>

          {/* Step Navigator Nodes */}
          <div className="blueprint-steps-deck">
            <div className="steps-flow-nodes" role="tablist">
              {steps.map((st, idx) => (
                <button
                  key={st.step}
                  role="tab"
                  aria-selected={activeStep === idx}
                  onClick={() => setActiveStep(idx)}
                  className={`blueprint-node ${activeStep === idx ? 'node-active' : ''}`}
                >
                  <span className="node-idx font-mono">{st.step}</span>
                  <span className="node-name font-tech">{st.label}</span>
                </button>
              ))}
            </div>

            {/* Active Node Detail Card */}
            <div className="blueprint-active-panel">
              <div className="active-panel-heading">
                <span className="font-mono stage-num">STAGE {steps[activeStep]?.step}:</span>
                <span className="font-tech stage-title">{steps[activeStep]?.label}</span>
              </div>
              <p className="stage-desc font-sans">{steps[activeStep]?.desc}</p>

              {/* Technical Specifications by step */}
              <div className="stage-specs-row font-mono">
                {activeStep === 0 && (
                  <>
                    <span className="spec-badge">Supabase S3 Storage</span>
                    <span className="spec-badge">MIME: PDF, JPG, CSV, WAV</span>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <span className="spec-badge">FastAPI Asynchronous Coroutines</span>
                    <span className="spec-badge">Activity Milestone Extraction</span>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <span className="spec-badge">RapidFuzz Levenshtein Matching</span>
                    <span className="spec-badge">Sentence-Transformers Embeddings</span>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <span className="spec-badge">RabbitMQ Direct Exchange (nexora.jobs)</span>
                    <span className="spec-badge">Redis Job-State Lock</span>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <span className="spec-badge">Rust (Axum) High-Concurrency</span>
                    <span className="spec-badge">Primavera P6 XML Export</span>
                    <span className="spec-badge">SHA-256 Audit Trail</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Highlights & Tech Stack */}
        <div className="sheet-details-grid">
          {/* Column 1: Engineering Highlights */}
          <div className="details-col">
            <div className="col-header font-mono">
              <Terminal size={14} />
              <span>ENGINEERING HIGHLIGHTS</span>
            </div>
            <ul className="sheet-bullets-list font-mono">
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} className="bullet-row">
                  <CheckCircle size={13} className="bullet-check" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tech Stack & Actions */}
          <div className="details-col">
            <div className="col-header font-mono">
              <Database size={14} />
              <span>PRODUCTION STACK</span>
            </div>
            <div className="sheet-chips-wrap">
              {project.techStack.map(tech => (
                <span key={tech} className="sheet-tech-chip font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="sheet-actions-row">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
              >
                <span>GitHub Repo</span>
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink btn-ink-outline"
                >
                  <ShieldCheck size={14} />
                  <span>Live Operations Console</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
