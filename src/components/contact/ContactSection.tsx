import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL } from '../../data/personal';
import { HandwrittenNote } from '../notebook/HandwrittenNote';
import { DoodleArrow } from '../notebook/DoodleDrawn';
import './ContactSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const techStrips = [
    { name: 'Python / PyTorch', color: '#fef08a', rot: -2 },
    { name: 'TypeScript / React', color: '#bbf7d0', rot: 1.5 },
    { name: 'RabbitMQ / Queues', color: '#bae6fd', rot: -1 },
    { name: 'FastAPI / Go', color: '#fbcfe8', rot: 2 },
    { name: 'PostgreSQL / Qdrant', color: '#fed7aa', rot: -1.5 },
    { name: 'Docker / Linux', color: '#c7d2fe', rot: 1 }
  ];

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo('.contact-anim',
      { y: 24, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
        clearProps: 'all'
      }
    );
  }, { scope: containerRef });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" ref={containerRef} className="notebook-section contact-notebook-section" aria-label="Contact and Collaboration">
      <div className="contact-editorial-wrapper">

        {/* 1. Tech Stack & Engines Taped Ribbon */}
        <div className="contact-tech-ribbon contact-anim">
          <div className="contact-tech-header">
            <HandwrittenNote color="dark" size="xl" rotate={-1.5}>
              my stack &amp; engines!
            </HandwrittenNote>
            <DoodleArrow direction="right" color="#141416" width={32} height={14} className="tech-arrow" />
          </div>

          <div className="contact-tech-grid">
            {techStrips.map((item, idx) => (
              <div
                key={idx}
                className="taped-tech-strip font-mono"
                style={{
                  backgroundColor: item.color,
                  transform: `rotate(${item.rot}deg)`
                }}
              >
                <span className="tape-strip-pin" />
                <span className="tape-strip-label">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Iconic Smiley Character */}
        <div className="contact-smiley-container contact-anim" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="contact-smiley-svg">
            {/* Face Circle */}
            <circle cx="100" cy="100" r="88" fill="#fde047" stroke="#121316" strokeWidth="4" />
            {/* Cheeks Blush */}
            <circle cx="54" cy="120" r="14" fill="#f472b6" opacity="0.65" />
            <circle cx="146" cy="120" r="14" fill="#f472b6" opacity="0.65" />
            {/* Blinking Eyes */}
            <g className="contact-eyes-blink">
              <rect x="64" y="66" width="16" height="42" rx="8" fill="#121316" />
              <rect x="120" y="66" width="16" height="42" rx="8" fill="#121316" />
            </g>
            {/* Smile Path */}
            <path d="M62 130 Q100 174 138 130" fill="none" stroke="#121316" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3. Section Title & Subtitle */}
        <div className="contact-title-group contact-anim">
          <h2 className="contact-headline font-display">
            LET'S TALK
          </h2>

          <p className="contact-handwritten-lead font-handwriting">
            Got an ambitious AI pipeline, a high-throughput product to architect, or an interesting engineering problem? Send it over. I read every message.
          </p>
        </div>

        {/* 4. Giant Yellow Taped Postcard / Envelope Box */}
        <div className="contact-card-stage contact-anim">
          {/* Overlapping Pinned Sticky Note on Top Left */}
          <div className="contact-sticky-note">
            <span className="sticky-tape-top" aria-hidden="true" />
            <div className="sticky-note-inner">
              <div className="sticky-author-row">
                <img
                  src="/images/portrait.jpg"
                  alt="Sirwagya Shekhar — Full Stack &amp; AI Developer"
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="sticky-avatar"
                />
                <div>
                  <p className="sticky-author-name font-tech">Sirwagya Shekhar</p>
                  <p className="sticky-author-role font-mono">Full Stack &bull; AI Systems</p>
                </div>
              </div>

              <p className="sticky-note-body font-sans">
                Open to high-impact engineering roles, AI system architecture, and good problems.
              </p>

              <div className="sticky-reaction-row font-mono">
                <span className="sticky-reaction-pill">
                  <span>⚡</span>
                  <span>1</span>
                </span>
                <span className="sticky-status-bullet">Available Now</span>
              </div>
            </div>
          </div>

          {/* The Giant Yellow Envelope Card */}
          <a
            href={`mailto:${PERSONAL.links.email}?subject=Project%20Inquiry%20%E2%80%94%20Sirwagya.dev`}
            className="giant-yellow-card"
            aria-label="Send email inquiry to Sirwagya"
          >
            {/* Washi Tape Strips at Corners */}
            <span className="washi-corner-tape tape-left" aria-hidden="true" />
            <span className="washi-corner-tape tape-right" aria-hidden="true" />

            <p className="card-script-tagline font-handwriting">
              let's make something together
            </p>

            <span className="card-giant-contact font-display">
              CONTACT
            </span>

            <span className="card-drop-link font-mono">
              <span>drop a line</span>
              <ArrowUpRight size={18} strokeWidth={2.6} />
            </span>
          </a>
        </div>

        {/* 5. One-Click Email Copy Strip */}
        <div className="contact-email-strip contact-anim font-mono">
          <span className="email-label font-tech">DIRECT INBOX:</span>
          <a href={`mailto:${PERSONAL.links.email}`} className="email-address-link">
            {PERSONAL.links.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="email-copy-action-btn"
            aria-label="Copy email address to clipboard"
          >
            {copied ? <Check size={13} color="#16a34a" /> : <Copy size={13} />}
            <span>{copied ? 'COPIED!' : 'COPY'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
