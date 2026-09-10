import React, { useState } from 'react';
import { ArrowUpRight, Film, Video, Sparkles, CheckCircle, Terminal, Play } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { PaperSticker } from '../notebook/PaperSticker';
import './ProjectCardOnceUponMe.css';

export const ProjectCardOnceUponMe: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'onceuponme')!;
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    { time: "00:14", label: "SCENE BOUNDARY", score: "Clarity: 0.94", tool: "OpenCV SceneDetect", note: "Deterministic keyframe extraction" },
    { time: "01:02", label: "PACING THRESHOLD", score: "Dynamism: 0.88", tool: "Motion Vector Analysis", note: "Zero generative video hallucination" },
    { time: "01:45", label: "STORYBOARD ARC", score: "Emotional: 0.96", tool: "Gemini Context AI", note: "Personalized narrative script" },
    { time: "02:30", label: "AUDIO SYNC", score: "Studio Voice: 48kHz", tool: "ElevenLabs API", note: "Sub-second speech synthesis" },
    { time: "03:15", label: "REMOTION RENDER", score: "60 FPS Output", tool: "Node.js + FFmpeg", note: "Programmatic reel generation" }
  ];

  return (
    <article className="project-sheet onceuponme-sheet" aria-label="OnceUponMe Video Engine Case Study">
      {/* Decorative Washi Tape */}
      <WashiTape color="pink" top="-10px" left="32px" rotate={-3} width={85} />
      <WashiTape color="yellow" top="-8px" right="40px" rotate={2} width={70} />

      <div className="sheet-inner">
        {/* Top Header Stamp */}
        <div className="sheet-top-banner">
          <div className="sheet-badge-group">
            <PaperSticker color="pink" rotate={-2}>
              PROJECT // 02
            </PaperSticker>
            <PaperSticker color="purple" rotate={2}>
              MEDIA ENGINEERING
            </PaperSticker>
            <span className="sheet-category font-mono">{project.category}</span>
          </div>

          <div className="sheet-solo-pill font-mono">
            <Video size={13} />
            <span>CORE ARCHITECT &bull; SIRWAGYA SHEKHAR</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="sheet-title-section">
          <div className="title-with-marginalia">
            <h3 className="sheet-project-title font-display">
              ONCEUPONME VIDEO ENGINE
            </h3>
            <HandwrittenNote color="red" size="md" rotate={-2} className="title-note">
              "production storyboard sheet"
            </HandwrittenNote>
          </div>
          <p className="sheet-project-tagline font-tech" style={{ color: '#db2777' }}>
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <p className="sheet-overview-text font-sans">
          {project.overview}
        </p>

        {/* Storyboard Filmstrip / Timeline Sheet */}
        <div className="filmstrip-board">
          <div className="filmstrip-header font-mono">
            <div className="filmstrip-title">
              <Film size={14} className="film-icon" />
              <span>DETERMINISTIC VIDEO PIPELINE &amp; STORYBOARD</span>
            </div>
            <div className="filmstrip-marginalia">
              <HandwrittenNote color="blue" size="sm" rotate={1}>
                no generative video hallucinations &bull; 100% real frames
              </HandwrittenNote>
            </div>
          </div>

          {/* Filmstrip with Sprocket Holes */}
          <div className="filmstrip-track-container">
            <div className="sprocket-holes top-sprockets" aria-hidden="true">
              {[...Array(14)].map((_, i) => <span key={i} className="sprocket" />)}
            </div>

            <div className="film-frames-row" role="tablist">
              {frames.map((frame, idx) => (
                <button
                  key={frame.time}
                  role="tab"
                  aria-selected={activeFrame === idx}
                  onClick={() => setActiveFrame(idx)}
                  className={`film-frame-card ${activeFrame === idx ? 'frame-selected' : ''}`}
                >
                  <div className="frame-screen">
                    <div className="frame-play-overlay">
                      <Play size={12} fill="#ffffff" />
                    </div>
                    <span className="frame-timestamp font-mono">{frame.time}</span>
                  </div>
                  <div className="frame-meta font-mono">
                    <span className="frame-label font-tech">{frame.label}</span>
                    <span className="frame-score">{frame.score}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="sprocket-holes bottom-sprockets" aria-hidden="true">
              {[...Array(14)].map((_, i) => <span key={i} className="sprocket" />)}
            </div>
          </div>

          {/* Active Frame Storyboard Inspector */}
          <div className="frame-inspector-panel">
            <div className="inspector-top font-mono">
              <span className="inspector-stage font-bold">FRAME {frames[activeFrame]?.time} // {frames[activeFrame]?.label}</span>
              <span className="inspector-tool">{frames[activeFrame]?.tool}</span>
            </div>
            <p className="inspector-note font-handwriting" style={{ fontSize: '1.4rem', color: '#18181b' }}>
              &ldquo;{frames[activeFrame]?.note}&rdquo;
            </p>
          </div>
        </div>

        {/* Engineering Highlights & Tech Stack */}
        <div className="sheet-details-grid">
          <div className="details-col">
            <div className="col-header font-mono">
              <Terminal size={14} />
              <span>PIPELINE SPECIFICATIONS</span>
            </div>
            <ul className="sheet-bullets-list font-mono">
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} className="bullet-row">
                  <CheckCircle size={13} className="bullet-check" style={{ color: '#db2777' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="details-col">
            <div className="col-header font-mono">
              <Sparkles size={14} />
              <span>MEDIA &amp; AI STACK</span>
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
                style={{ boxShadow: '3px 3px 0px #db2777' }}
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
