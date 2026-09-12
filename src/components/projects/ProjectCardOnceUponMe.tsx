import React from 'react';
import { ArrowUpRight, Film, Clapperboard } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import './ProjectCardOnceUponMe.css';

export const ProjectCardOnceUponMe: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'onceuponme')!;

  const pipelineSteps = [
    { label: 'UNDERSTAND', desc: 'Emotion & Face Clustering' },
    { label: 'SELECT', desc: 'Smart Curation & Framing' },
    { label: 'SCRIPT', desc: 'Narrative Arc & Voice' },
    { label: 'NARRATE', desc: 'ElevenLabs Voice Synthesis' },
    { label: 'RENDER', desc: 'Remotion React 60 FPS' }
  ];

  return (
    <article className="project-folder-sheet onceuponme-sheet" aria-label="OnceUponMe Video Engine Case Study">
      {/* Folder Tab at Top Left */}
      <div className="folder-tab-notch tab-yellow tab-notch-02">
        <span className="folder-tab-title font-mono">+ PROJECT 02 &bull; ONCEUPONME</span>
      </div>

      <div className="sheet-layout-grid">
        {/* Left Column: Storyboard Production Story */}
        <div className="sheet-story-left">
          <div className="sheet-meta-bullet font-mono text-dark">
            <span className="bullet-dot dot-orange" />
            <span>2026 &bull; MULTIMODAL VIDEO ENGINE &bull; CREATIVE AI</span>
          </div>

          <h3 className="sheet-big-title font-headline text-dark">
            OnceUponMe
          </h3>

          <p className="sheet-punchy-sentence font-sans text-dark">
            Autonomous multimodal video engine turning personal memories into cinematic short films.
          </p>

          <div className="sheet-marginalia-note">
            <HandwrittenNote color="red" size="md" rotate={2}>
              "memories &rarr; 1080p narrative film"
            </HandwrittenNote>
          </div>

          <div className="sheet-actions-row">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-cta-link link-dark font-tech"
            >
              <span>VIEW PIPELINE &amp; ENGINE</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="sheet-tech-footer font-mono border-dark">
            <span>CORE STACK: Python &bull; FastAPI &bull; OpenAI &bull; OpenCV &bull; Remotion &bull; FFmpeg</span>
          </div>
        </div>

        {/* Right Column: ONE Large Taped Cinematic Storyboard Board */}
        <div className="sheet-visual-right">
          <div className="taped-visual-canvas film-storyboard-canvas">
            {/* Washi Tapes on Corners */}
            <WashiTape color="blue" top="-10px" left="-10px" rotate={-45} width={60} />
            <WashiTape color="blue" top="-10px" right="-10px" rotate={45} width={60} />
            <WashiTape color="blue" bottom="-10px" left="-10px" rotate={45} width={60} />
            <WashiTape color="blue" bottom="-10px" right="-10px" rotate={-45} width={60} />

            <div className="canvas-header font-mono">
              <div className="film-header-left">
                <Clapperboard size={14} className="film-icon" />
                <span className="canvas-title text-light">STORYBOARD // SCENE RECONSTRUCTION</span>
              </div>
              <span className="film-fps-tag font-mono">1080P &bull; 60 FPS</span>
            </div>

            {/* 35mm Film Strip Frame Representation */}
            <div className="film-sprocket-frame">
              <div className="sprocket-holes-row">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>

              <div className="cinematic-preview-box">
                <div className="preview-overlay-info font-mono">
                  <Film size={18} />
                  <span>AUTONOMOUS NARRATIVE COMPOSITION</span>
                </div>
                <div className="preview-timecode font-mono">
                  00:02:44:18 // SCENE 04
                </div>
              </div>

              <div className="sprocket-holes-row">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>

            {/* 5-Stage Storyboard Timeline */}
            <div className="storyboard-timeline-bar">
              {pipelineSteps.map((step, idx) => (
                <div key={step.label} className="timeline-stage-chip">
                  <span className="stage-num font-mono">0{idx + 1}</span>
                  <span className="stage-name font-tech">{step.label}</span>
                </div>
              ))}
            </div>

            <div className="canvas-footer font-handwriting">
              <span style={{ color: '#fed7aa', fontSize: '1.25rem' }}>
                "audio-driven multi-track beat sync &bull; sub-frame alignment"
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
