import React from 'react';
import { Radio } from 'lucide-react';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './NowSection.css';

export const NowSection: React.FC = () => {
  return (
    <section className="notebook-section now-notebook-section" aria-label="Currently Active Work and Research">
      <div className="now-content-wrapper">

        {/* Section Header */}
        <div className="now-header-block">
          <div className="now-annotation-row">
            <HandwrittenNote color="red" size="xl" rotate={-2}>
              currently
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#dc2626" width={38} height={20} className="now-arrow" />
            <div className="now-status-chip font-mono">
              <Radio size={12} className="pulse-dot-icon" />
              <span>LIVE LOG &bull; PUNE, INDIA</span>
            </div>
          </div>

          <h2 className="now-heading font-display">
            BUILDING &bull; LEARNING &bull; SHIPPING.
          </h2>

          <p className="now-lead font-sans">
            A real-time snapshot of active codebases, architectural study, and engineering goals.
          </p>
        </div>

        {/* 3 Physical Post-It / Sticky Notes */}
        <div className="sticky-notes-row">

          {/* Sticky 1: BUILDING (Yellow) */}
          <div className="sticky-note note-yellow">
            <WashiTape color="yellow" top="-8px" left="24px" rotate={-3} width={55} />
            <div className="note-pin-header font-mono">
              <span className="note-tag font-bold">FOCUS 01 // BUILDING</span>
              <span className="note-date">SEP 2026</span>
            </div>
            <h3 className="note-title font-tech">
              NEXORA AI &amp; MEDIA ENGINES
            </h3>
            <p className="note-body font-sans">
              Iterating on construction evidence normalization, multi-modal ingestion, and
              the responsive planner operations console with Team Kasukabe.
            </p>
            <div className="note-footer font-mono">
              <span>STATUS: PRODUCTION DEPLOY</span>
            </div>
          </div>

          {/* Sticky 2: LEARNING (Blue) */}
          <div className="sticky-note note-blue">
            <WashiTape color="blue" top="-8px" right="24px" rotate={2} width={55} />
            <div className="note-pin-header font-mono">
              <span className="note-tag font-bold">FOCUS 02 // LEARNING</span>
              <span className="note-date">ONGOING</span>
            </div>
            <h3 className="note-title font-tech">
              DISTRIBUTED SYSTEMS &amp; RUST
            </h3>
            <p className="note-body font-sans">
              Deepening knowledge in concurrent event outboxes, transactional messaging with RabbitMQ,
              Tokio async patterns, and database indexing strategies.
            </p>
            <div className="note-footer font-mono">
              <span>STATUS: DEEP DIVE ARCHITECTURE</span>
            </div>
          </div>

          {/* Sticky 3: LOOKING FOR (Orange) */}
          <div className="sticky-note note-orange">
            <WashiTape color="pink" top="-8px" left="50%" rotate={-1} width={60} style={{ transform: 'translateX(-50%) rotate(-1deg)' }} />
            <div className="note-pin-header font-mono">
              <span className="note-tag font-bold">FOCUS 03 // LOOKING FOR</span>
              <span className="note-date">ACTIVE</span>
            </div>
            <h3 className="note-title font-tech">
              INTERESTING ENGINEERING PROBLEMS
            </h3>
            <p className="note-body font-sans">
              High-impact product teams, ambitious full-stack roles, and AI engineering opportunities
              where end-to-end craft and systems reliability truly matter.
            </p>
            <div className="note-footer font-mono">
              <span>STATUS: OPEN TO DISCUSSIONS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
