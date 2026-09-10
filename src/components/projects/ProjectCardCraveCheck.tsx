import React from 'react';
import { ArrowUpRight, Zap, CheckCircle, Terminal, Scan, AlertTriangle, ShieldCheck, HeartPulse } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { PaperSticker } from '../notebook/PaperSticker';
import './ProjectCardCraveCheck.css';

export const ProjectCardCraveCheck: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'crave-check')!;

  const steps = [
    { num: "01", name: "CAPTURE & HASH", desc: "Mobile client captures label photo; backend computes image hash for instant cache check.", status: "INSTANT CACHE HIT (<40ms)" },
    { num: "02", name: "VISION OCR", desc: "Gemini Vision reads micro-ingredients and flags chemical preservatives.", status: "ACTIVE EXTRACTION" },
    { num: "03", name: "FUZZY LOOKUP", desc: "RapidFuzz cross-references ingredients with localized nutritional databases.", status: "SUB-SECOND MATCH" },
    { num: "04", name: "STREAMING RATING", desc: "Matches allergen hazards to user medical profile and streams warnings via NDJSON.", status: "STREAMING NDJSON" }
  ];

  return (
    <article className="project-sheet crave-sheet" aria-label="Crave Check Case Study">
      {/* Decorative Washi Tape */}
      <WashiTape color="yellow" top="-10px" left="30px" rotate={-3} width={75} />
      <WashiTape color="pink" top="-8px" right="35px" rotate={2} width={70} />

      <div className="sheet-inner">
        {/* Top Header Stamp */}
        <div className="sheet-top-banner">
          <div className="sheet-badge-group">
            <PaperSticker color="orange" rotate={-2}>
              PROJECT // 04
            </PaperSticker>
            <PaperSticker color="yellow" rotate={1}>
              STREAMING FOOD AI
            </PaperSticker>
            <span className="sheet-category font-mono">{project.category}</span>
          </div>

          <div className="sheet-team-pill font-mono" style={{ backgroundColor: 'var(--sticker-orange)' }}>
            <Zap size={13} />
            <span>TEAM KASUKABE HACKATHON PROJECT</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="sheet-title-section">
          <div className="title-with-marginalia">
            <h3 className="sheet-project-title font-display">
              CRAVE CHECK
            </h3>
            <HandwrittenNote color="orange" size="md" rotate={-2} className="title-note">
              "food label &amp; mobile scanning sheet"
            </HandwrittenNote>
          </div>
          <p className="sheet-project-tagline font-tech" style={{ color: '#ea580c' }}>
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <p className="sheet-overview-text font-sans">
          {project.overview}
        </p>

        {/* Mobile Scanner & Food Label Sheet Montage */}
        <div className="crave-scanner-board">
          <div className="scanner-board-header font-mono">
            <div className="board-title">
              <Scan size={14} className="scanner-icon" />
              <span>PROGRESSIVE NDJSON STREAMING &bull; MULTI-TIER CACHING</span>
            </div>
            <HandwrittenNote color="green" size="sm" rotate={1}>
              streaming results before AI finishes
            </HandwrittenNote>
          </div>

          <div className="scanner-montage-grid">
            {/* Left: Mobile Viewfinder Frame */}
            <div className="mobile-viewfinder-card">
              <div className="viewfinder-lens">
                <div className="corner-bracket top-left" />
                <div className="corner-bracket top-right" />
                <div className="corner-bracket bottom-left" />
                <div className="corner-bracket bottom-right" />

                <div className="viewfinder-reticle">
                  <div className="scan-line-anim" />
                  <span className="font-mono label-target">SCANNING INGREDIENTS...</span>
                </div>
              </div>

              <div className="viewfinder-footer font-mono">
                <span className="dot-streaming" />
                <span>NDJSON STREAM CHUNK #3 RECEIVED</span>
              </div>
            </div>

            {/* Right: Nutrition & Allergen Risk Score Card */}
            <div className="nutrition-risk-card font-mono">
              <div className="nutrition-header">
                <HeartPulse size={14} className="heart-icon" />
                <span className="font-bold">HEALTH RATING REPORT</span>
                <span className="grade-badge">GRADE B+</span>
              </div>

              <div className="nutrition-stats-row">
                <div className="stat-pill safe">
                  <ShieldCheck size={12} />
                  <span>Gluten Free</span>
                </div>
                <div className="stat-pill safe">
                  <ShieldCheck size={12} />
                  <span>No High Fructose Corn Syrup</span>
                </div>
                <div className="stat-pill warning">
                  <AlertTriangle size={12} />
                  <span>Emulsifier (E471) Detected</span>
                </div>
              </div>

              <div className="cache-telemetry-tag">
                <span className="cache-hit font-bold">&check; CACHE HIT:</span>
                <span> MongoDB Hash Store (Response latency: 38ms)</span>
              </div>
            </div>
          </div>

          {/* Pipeline Flow Steps */}
          <div className="crave-flow-steps font-mono">
            {steps.map((st) => (
              <div key={st.num} className="crave-step-item">
                <div className="step-badge">
                  <span className="num">{st.num}</span>
                  <span className="name font-tech">{st.name}</span>
                </div>
                <p className="desc">{st.desc}</p>
                <span className="metric-tag">{st.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Highlights & Tech Stack */}
        <div className="sheet-details-grid">
          <div className="details-col">
            <div className="col-header font-mono">
              <Terminal size={14} />
              <span>PERFORMANCE ENGINEERING</span>
            </div>
            <ul className="sheet-bullets-list font-mono">
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} className="bullet-row">
                  <CheckCircle size={13} className="bullet-check" style={{ color: '#ea580c' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="details-col">
            <div className="col-header font-mono">
              <Zap size={14} />
              <span>PRODUCTION STACK</span>
            </div>
            <div className="sheet-chips-wrap">
              {project.techStack.map(tech => (
                <span key={tech} className="sheet-tech-chip font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <div className="sheet-actions-row">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
                style={{ boxShadow: '3px 3px 0px #ea580c' }}
              >
                <span>GitHub Repo</span>
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
