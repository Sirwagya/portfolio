import React from 'react';
import { Radio } from 'lucide-react';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './NowSection.css';

export const NowSection: React.FC = () => {
  return (
    <section id="currently" className="notebook-section now-notebook-section" aria-label="Currently Active Work and Research">
      <div className="now-editorial-wrapper">

        {/* Section Header */}
        <div className="now-editorial-header">
          <div className="now-handwritten-badge">
            <HandwrittenNote color="red" size="xl" rotate={-2}>
              currently
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#dc2626" width={36} height={18} className="now-arrow" />
            <div className="now-status-pill font-mono">
              <Radio size={11} className="pulse-dot-icon" />
              <span>PUNE, INDIA</span>
            </div>
          </div>

          <h2 className="now-main-headline font-display">
            BUILDING &bull; LEARNING &bull; EXPLORING.
          </h2>
        </div>

        {/* 3 Physical Post-It Notes with Lots of Breathing Room */}
        <div className="now-sticky-notes-trio">

          {/* Note 1: BUILDING */}
          <div className="physical-postit postit-yellow">
            <WashiTape color="yellow" top="-8px" left="24px" rotate={-2} width={50} />
            <div className="postit-header font-mono">
              <span className="postit-tag font-bold">01 // BUILDING</span>
            </div>
            <h3 className="postit-title font-headline">
              NEXORA AI &amp; MULTIMODAL MEDIA
            </h3>
            <p className="postit-body font-sans">
              Scaling construction evidence ingestion and hardware-accelerated Remotion render pipelines with Team Kasukabe.
            </p>
          </div>

          {/* Note 2: LEARNING */}
          <div className="physical-postit postit-blue">
            <WashiTape color="blue" top="-8px" right="24px" rotate={2} width={50} />
            <div className="postit-header font-mono">
              <span className="postit-tag font-bold">02 // LEARNING</span>
            </div>
            <h3 className="postit-title font-headline">
              RUST CONCURRENCY &amp; KERNEL BYPASS
            </h3>
            <p className="postit-body font-sans">
              Reading tokio internals, io_uring, and zero-allocation network parsing for low-latency systems.
            </p>
          </div>

          {/* Note 3: EXPLORING */}
          <div className="physical-postit postit-pink">
            <WashiTape color="pink" top="-8px" left="50%" rotate={-1} width={50} style={{ transform: 'translateX(-50%)' }} />
            <div className="postit-header font-mono">
              <span className="postit-tag font-bold">03 // EXPLORING</span>
            </div>
            <h3 className="postit-title font-headline">
              PHYSICAL INTERFACES &amp; SOUND
            </h3>
            <p className="postit-body font-sans">
              Prototyping tactile web audio feedback, mechanical switches, and playful kinetic typography.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
