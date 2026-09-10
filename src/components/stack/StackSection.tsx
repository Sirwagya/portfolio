import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL } from '../../data/personal';
import { Binary, Box, Cpu, Server, Sparkles } from 'lucide-react';
import './StackSection.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const StackSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.stack-category-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Binary size={16} className="accent-icon" />;
      case 1: return <Server size={16} className="accent-icon" />;
      case 2: return <Box size={16} className="accent-icon" />;
      case 3: return <Sparkles size={16} className="accent-icon" />;
      default: return <Cpu size={16} className="accent-icon" />;
    }
  };

  return (
    <section id="stack" ref={containerRef} className="section stack-section" aria-label="Capabilities and Architecture Matrix">
      <div className="container">
        
        {/* Header */}
        <div className="stack-header-block">
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>03 // ARCHITECTURAL CAPABILITIES</span>
          </div>

          <h2 className="stack-title">
            TECHNICAL INSTRUMENTS &amp;<br />
            <span className="text-highlight">SYSTEM TAXONOMY.</span>
          </h2>

          <p className="stack-lead">
            Curated across years of intense engineering: languages, concurrent backend architectures, 
            low-latency data structures, and production AI runtimes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="stack-categories-grid">
          {PERSONAL.stackCategories.map((cat, idx) => (
            <div key={cat.category} className="stack-category-card double-bezel">
              <div className="double-bezel-inner stack-inner">
                <div className="stack-card-header">
                  {getCategoryIcon(idx)}
                  <h3 className="stack-cat-title">{cat.category}</h3>
                </div>

                <div className="stack-skills-flow">
                  {cat.skills.map(skill => (
                    <div key={skill} className="stack-skill-item">
                      <span className="skill-dot" />
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Principles Manifesto Bar */}
        <div className="stack-principles-card double-bezel">
          <div className="double-bezel-inner principles-inner">
            <div className="principle-col">
              <span className="principle-num">RULE // 01</span>
              <h5 className="principle-title">Predictable Latency</h5>
              <p className="principle-text">
                Multi-tier caching, async outbox relays, and streaming responses over blocking monologues.
              </p>
            </div>
            <div className="principle-col">
              <span className="principle-num">RULE // 02</span>
              <h5 className="principle-title">Zero Hallucination Media</h5>
              <p className="principle-text">
                Deterministic frame slicing, visual scoring algorithms, and explicit video assembly.
              </p>
            </div>
            <div className="principle-col">
              <span className="principle-num">RULE // 03</span>
              <h5 className="principle-title">Auditable State</h5>
              <p className="principle-text">
                Immutable event histories, SHA-256 chained hashes, and strict invariant validation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
