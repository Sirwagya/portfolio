import React from 'react';
import { ArrowUpRight, Calendar, Users, Bell } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import './ProjectCardCampusConnect.css';

export const ProjectCardCampusConnect: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'campus-connect')!;

  return (
    <article className="project-folder-sheet campus-sheet" aria-label="Campus Connect Case Study">
      {/* Folder Tab at Top Left */}
      <div className="folder-tab-notch tab-coral tab-notch-03">
        <span className="folder-tab-title font-mono">+ PROJECT 03 &bull; CAMPUS CONNECT</span>
      </div>

      <div className="sheet-layout-grid">
        {/* Left Column: Product Story */}
        <div className="sheet-story-left">
          <div className="sheet-meta-bullet font-mono text-dark">
            <span className="bullet-dot dot-coral" />
            <span>2025 &bull; FULL STACK / PRODUCT ENGINEERING</span>
          </div>

          <h3 className="sheet-big-title font-headline text-dark">
            Campus Connect
          </h3>

          <p className="sheet-punchy-sentence font-sans text-dark">
            Unified campus operating system connecting students, clubs, and real-time events.
          </p>

          <div className="sheet-marginalia-note">
            <HandwrittenNote color="dark" size="md" rotate={-2}>
              "one place for the whole university"
            </HandwrittenNote>
          </div>

          <div className="sheet-actions-row">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-cta-link link-dark font-tech"
            >
              <span>VIEW REPOSITORY &amp; SYSTEM</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="sheet-tech-footer font-mono border-dark">
            <span>CORE STACK: React &bull; TypeScript &bull; Node.js &bull; PostgreSQL &bull; WebSockets</span>
          </div>
        </div>

        {/* Right Column: ONE Large Taped Product Interface Composition */}
        <div className="sheet-visual-right">
          <div className="taped-visual-canvas product-app-canvas">
            {/* Washi Tapes on Corners */}
            <WashiTape color="pink" top="-10px" left="-10px" rotate={-45} width={60} />
            <WashiTape color="pink" top="-10px" right="-10px" rotate={45} width={60} />
            <WashiTape color="pink" bottom="-10px" left="-10px" rotate={45} width={60} />
            <WashiTape color="pink" bottom="-10px" right="-10px" rotate={-45} width={60} />

            {/* App Window Header */}
            <div className="app-window-bar font-mono">
              <div className="window-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <span className="app-title">CAMPUSCONNECT // PUNE UNIVERSITY</span>
              <span className="app-live-status font-mono">🟢 1,420 ONLINE</span>
            </div>

            {/* Unified Product UI Mockup */}
            <div className="product-screen-body">
              {/* Event Hero Banner Card */}
              <div className="campus-event-hero">
                <div className="event-badge font-mono">FEATURED TODAY</div>
                <h4 className="event-headline font-headline">HackPune 2026 // 36-Hr Build</h4>
                <div className="event-meta-row font-mono">
                  <span><Calendar size={12} /> MAR 14 &bull; MAIN AUDITORIUM</span>
                  <span><Users size={12} /> 340 STUDENTS REGISTERED</span>
                </div>
              </div>

              {/* Feed & Club Update */}
              <div className="campus-feed-snippet">
                <div className="feed-avatar">AI</div>
                <div className="feed-content">
                  <div className="feed-header font-mono">
                    <span className="feed-author font-bold">ROBOTICS CLUB</span>
                    <span className="feed-time">10M AGO</span>
                  </div>
                  <p className="feed-text font-sans">
                    Autonomous drone testing session starts at 4 PM in Lab 3. Open to all branches!
                  </p>
                </div>
                <Bell size={14} className="feed-bell" />
              </div>
            </div>

            <div className="canvas-footer font-handwriting">
              <span style={{ color: '#ea580c', fontSize: '1.25rem' }}>
                "real-time peer coordination &bull; sub-second notifications"
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
