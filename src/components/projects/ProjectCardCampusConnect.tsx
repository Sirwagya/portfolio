import React from 'react';
import { ArrowUpRight, Users, CheckCircle, Terminal, Radio, Trophy, Award, MessageSquare } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { PaperSticker } from '../notebook/PaperSticker';
import './ProjectCardCampusConnect.css';

export const ProjectCardCampusConnect: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'campus-connect')!;

  return (
    <article className="project-sheet campus-sheet" aria-label="Campus Connect Case Study">
      {/* Decorative Washi Tape */}
      <WashiTape color="blue" top="-10px" left="28px" rotate={-2} width={75} />
      <WashiTape color="yellow" top="-8px" right="35px" rotate={3} width={70} />

      <div className="sheet-inner">
        {/* Top Header Stamp */}
        <div className="sheet-top-banner">
          <div className="sheet-badge-group">
            <PaperSticker color="blue" rotate={-2}>
              PROJECT // 03
            </PaperSticker>
            <PaperSticker color="green" rotate={1}>
              CAMPUS OPERATING SYSTEM
            </PaperSticker>
            <span className="sheet-category font-mono">{project.category}</span>
          </div>

          <div className="sheet-team-pill font-mono" style={{ backgroundColor: 'var(--sticker-blue)' }}>
            <Users size={13} />
            <span>TEAM HACKATHON PROJECT</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="sheet-title-section">
          <div className="title-with-marginalia">
            <h3 className="sheet-project-title font-display">
              CAMPUS CONNECT
            </h3>
            <HandwrittenNote color="blue" size="md" rotate={2} className="title-note">
              "photographed product design board"
            </HandwrittenNote>
          </div>
          <p className="sheet-project-tagline font-tech" style={{ color: '#0284c7' }}>
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <p className="sheet-overview-text font-sans">
          {project.overview}
        </p>

        {/* Product Board UI Montage (Taped Product Cards) */}
        <div className="campus-product-board">
          <div className="board-header font-mono">
            <div className="board-title">
              <Radio size={14} className="live-pulse-icon" />
              <span>SUPABASE REALTIME WEBSOCKET SUBSCRIPTIONS ACTIVE</span>
            </div>
            <HandwrittenNote color="dark" size="sm" rotate={-1}>
              replacing 20+ scattered WhatsApp groups
            </HandwrittenNote>
          </div>

          {/* Overlapping Product Mock Cards */}
          <div className="product-cards-montage">
            {/* Card 1: Verified Student Reputation Profile */}
            <div className="taped-mock-card card-reputation">
              <WashiTape color="yellow" top="-8px" left="16px" rotate={-3} width={55} />
              <div className="mock-card-header font-mono">
                <Trophy size={13} className="trophy-icon" />
                <span>STUDENT REPUTATION &bull; XP</span>
              </div>
              <div className="student-profile-peek">
                <div className="avatar-chip font-display">S</div>
                <div className="profile-text font-mono">
                  <span className="name font-bold">@sirwagya</span>
                  <span className="xp-tag font-mono">LEVEL 14 &bull; 4,820 XP</span>
                </div>
              </div>
              <div className="rating-metrics font-mono">
                <div className="metric-badge">GitHub: 340+ commits</div>
                <div className="metric-badge">LeetCode: 1840 ELO</div>
                <div className="metric-badge">Hackathons: 3 podiums</div>
              </div>
            </div>

            {/* Card 2: Campus Hackathon Team Matching */}
            <div className="taped-mock-card card-matchmaking">
              <WashiTape color="pink" top="-8px" right="20px" rotate={2} width={50} />
              <div className="mock-card-header font-mono">
                <Award size={13} className="award-icon" />
                <span>HACKATHON SQUAD MATCH</span>
              </div>
              <p className="match-title font-tech">INNOVATION CUP 2026</p>
              <div className="match-slots font-mono">
                <span className="slot-pill slot-filled">&check; Rust Core (Found)</span>
                <span className="slot-pill slot-filled">&check; React Frontend (Found)</span>
                <span className="slot-pill slot-open">+ UI Designer (1 Open)</span>
              </div>
              <div className="match-status font-mono">
                <span className="dot-active" /> 4 students applied
              </div>
            </div>

            {/* Card 3: Realtime Broadcast Feed */}
            <div className="taped-mock-card card-feed">
              <WashiTape color="blue" top="-8px" left="50%" rotate={1} width={60} style={{ transform: 'translateX(-50%) rotate(1deg)' }} />
              <div className="mock-card-header font-mono">
                <MessageSquare size={13} className="msg-icon" />
                <span>CAMPUS FEED &bull; LIVE</span>
              </div>
              <div className="live-post font-mono">
                <span className="post-author font-bold">Campus Robotics Club:</span>
                <span className="post-content"> Autonomous rover telemetry test live at Lab 4B!</span>
              </div>
              <div className="post-timestamp font-mono">2 mins ago via Supabase WebSocket</div>
            </div>
          </div>
        </div>

        {/* Engineering Highlights & Tech Stack */}
        <div className="sheet-details-grid">
          <div className="details-col">
            <div className="col-header font-mono">
              <Terminal size={14} />
              <span>FULL STACK ARCHITECTURE</span>
            </div>
            <ul className="sheet-bullets-list font-mono">
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} className="bullet-row">
                  <CheckCircle size={13} className="bullet-check" style={{ color: '#0284c7' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="details-col">
            <div className="col-header font-mono">
              <Users size={14} />
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
                style={{ boxShadow: '3px 3px 0px #0284c7' }}
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
