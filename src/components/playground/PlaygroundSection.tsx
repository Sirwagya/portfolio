import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Sparkles, Cpu, RefreshCw, Layers } from 'lucide-react';
import { WashiTape } from '../notebook/WashiTape';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { PaperSticker, type StickerColor } from '../notebook/PaperSticker';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import { PERSONAL } from '../../data/personal';
import './PlaygroundSection.css';

gsap.registerPlugin(useGSAP);

interface PlacedSticker {
  id: number;
  text: string;
  color: StickerColor;
  x: number;
  y: number;
  rotate: number;
}

export const PlaygroundSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const padRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<number>(4);

  // Experiment 1: Interactive Sticker Stamper
  const [stickers, setStickers] = useState<PlacedSticker[]>([
    { id: 1, text: "ZERO FLUFF", color: "yellow", x: 18, y: 25, rotate: -4 },
    { id: 2, text: "AUDIT PASSED", color: "green", x: 62, y: 35, rotate: 6 },
    { id: 3, text: "60 FPS MOTIONS", color: "pink", x: 38, y: 55, rotate: -2 }
  ]);

  // Experiment 2: Interactive System Event Loop Pulse
  const [pulseStep, setPulseStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const availableStickers: { text: string; color: StickerColor }[] = [
    { text: "SHIPS FAST", color: "yellow" },
    { text: "STRICT INVARIANTS", color: "blue" },
    { text: "SUB-FRAME LATENCY", color: "orange" },
    { text: "TEAM PLAYER", color: "green" },
    { text: "ALIVE", color: "pink" }
  ];

  const handleAddSticker = (preset: { text: string; color: StickerColor }) => {
    counterRef.current += 1;
    const count = counterRef.current;
    const newX = 15 + ((count * 23) % 65);
    const newY = 20 + ((count * 17) % 55);
    const newRotate = ((count * 7) % 15) - 7;

    const newSticker: PlacedSticker = {
      id: count,
      text: preset.text,
      color: preset.color,
      x: newX,
      y: newY,
      rotate: newRotate
    };

    setStickers((prev) => [...prev.slice(-7), newSticker]);
  };

  const handleClearStickers = () => {
    setStickers([]);
  };

  const triggerEventSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setPulseStep(1);

    setTimeout(() => setPulseStep(2), 600);
    setTimeout(() => setPulseStep(3), 1200);
    setTimeout(() => setPulseStep(4), 1800);
    setTimeout(() => {
      setPulseStep(0);
      setIsSimulating(false);
    }, 2500);
  };

  return (
    <section id="playground" ref={containerRef} className="notebook-section playground-section" aria-label="Experimental Playground">
      <div className="playground-content-wrapper">

        {/* Section Header */}
        <div className="playground-header">
          <div className="playground-annotation">
            <HandwrittenNote color="orange" size="xl" rotate={-2}>
              playground
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#ea580c" width={38} height={20} className="playground-arrow" />
            <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>
              EXPERIMENTAL LAB
            </span>
          </div>

          <h2 className="playground-title font-display">
            LITTLE EXPERIMENTS.
          </h2>

          <p className="playground-subtext font-sans">
            Interactive micro-systems, physics toys, and technical instruments built to explore the edges
            between tactile physical interfaces and computer code.
          </p>
        </div>

        {/* 2-Column Experiments Grid */}
        <div className="experiments-grid">

          {/* Experiment 1: Interactive Sticker Stamper Pad */}
          <div className="experiment-card sticker-pad-card">
            <WashiTape color="yellow" top="-10px" left="24px" rotate={-2} width={70} />

            <div className="card-header font-mono">
              <div className="title-wrap">
                <Sparkles size={14} className="icon-sparkle" />
                <span>EXP 01 // INTERACTIVE STICKER CANVAS</span>
              </div>
              <button
                onClick={handleClearStickers}
                className="clear-btn font-mono"
                title="Clear stickers"
              >
                CLEAR
              </button>
            </div>

            <p className="experiment-hint font-handwriting" style={{ fontSize: '1.25rem', color: '#2563eb' }}>
              &rarr; Click any sticker below to stamp it onto the paper pad!
            </p>

            {/* Interactive Paper Pad Area */}
            <div ref={padRef} className="interactive-drop-zone">
              <div className="pad-ruled-lines" />
              {stickers.map((st) => (
                <div
                  key={st.id}
                  className="placed-sticker-wrap"
                  style={{
                    left: `${st.x}%`,
                    top: `${st.y}%`,
                    transform: `rotate(${st.rotate}deg)`
                  }}
                >
                  <PaperSticker color={st.color} rotate={st.rotate}>
                    {st.text}
                  </PaperSticker>
                </div>
              ))}
            </div>

            {/* Preset Sticker Tray */}
            <div className="sticker-tray">
              <span className="tray-label font-mono">STAMP TRAY:</span>
              <div className="tray-buttons">
                {availableStickers.map((preset) => (
                  <button
                    key={preset.text}
                    onClick={() => handleAddSticker(preset)}
                    className="tray-stamp-btn"
                  >
                    <PaperSticker color={preset.color} rotate={0}>
                      + {preset.text}
                    </PaperSticker>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experiment 2: Interactive System Event Pipeline */}
          <div className="experiment-card pipeline-sim-card">
            <WashiTape color="pink" top="-10px" right="24px" rotate={2} width={65} />

            <div className="card-header font-mono">
              <div className="title-wrap">
                <Cpu size={14} className="icon-cpu" />
                <span>EXP 02 // EVENT LOOP OUTBOX SIMULATOR</span>
              </div>
              <span className="live-status font-mono">
                {isSimulating ? 'SIMULATING' : 'IDLE'}
              </span>
            </div>

            <p className="experiment-hint font-handwriting" style={{ fontSize: '1.25rem', color: '#dc2626' }}>
              &rarr; Fire a real-time event through async worker stages:
            </p>

            {/* Interactive Architecture Circuit */}
            <div className="pipeline-circuit-box">
              <div className={`circuit-node ${pulseStep >= 1 ? 'is-pulsing' : ''}`}>
                <span className="node-num font-mono">01</span>
                <span className="node-title font-tech">INGESTION</span>
                <span className="node-desc font-mono">HTTP Post</span>
              </div>

              <div className="circuit-connector font-mono">&rarr;</div>

              <div className={`circuit-node ${pulseStep >= 2 ? 'is-pulsing' : ''}`}>
                <span className="node-num font-mono">02</span>
                <span className="node-title font-tech">RABBITMQ</span>
                <span className="node-desc font-mono">Async Relay</span>
              </div>

              <div className="circuit-connector font-mono">&rarr;</div>

              <div className={`circuit-node ${pulseStep >= 3 ? 'is-pulsing' : ''}`}>
                <span className="node-num font-mono">03</span>
                <span className="node-title font-tech">RUST CORE</span>
                <span className="node-desc font-mono">Audit Verify</span>
              </div>

              <div className="circuit-connector font-mono">&rarr;</div>

              <div className={`circuit-node ${pulseStep >= 4 ? 'is-pulsing' : ''}`}>
                <span className="node-num font-mono">04</span>
                <span className="node-title font-tech">PERSISTENCE</span>
                <span className="node-desc font-mono">Postgres WAL</span>
              </div>
            </div>

            {/* Trigger Button */}
            <div className="circuit-action-bar">
              <button
                onClick={triggerEventSimulation}
                disabled={isSimulating}
                className="btn-ink"
                style={{ fontSize: '0.82rem', padding: '0.6rem 1.1rem' }}
              >
                <RefreshCw size={13} className={isSimulating ? 'spin-anim' : ''} />
                <span>{isSimulating ? 'PROCESSING COROUTINES...' : 'FIRE ASYNC EVENT PACKET'}</span>
              </button>

              <span className="font-mono text-xs text-muted">
                Zero loss &bull; At-least-once delivery
              </span>
            </div>
          </div>

        </div>

        {/* Technical Taxonomy & Stack Matrix */}
        <div className="taxonomy-shelf">
          <div className="taxonomy-header font-mono">
            <Layers size={14} />
            <span>FULL ARCHITECTURAL CAPABILITIES BY DOMAIN</span>
          </div>

          <div className="taxonomy-grid">
            {PERSONAL.stackCategories.map((cat) => (
              <div key={cat.category} className="taxonomy-card">
                <h4 className="taxonomy-cat-title font-tech">{cat.category}</h4>
                <div className="taxonomy-skills font-mono">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
