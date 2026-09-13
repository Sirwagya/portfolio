import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WashiTape } from "../notebook/WashiTape";
import { HandwrittenNote } from "../notebook/HandwrittenNote";
import "./AboutSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".about-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="notebook-section about-notebook-section"
      aria-label="About Me"
    >
      {/* Subtle Curved Horizon Divider with 'about me!' Annotation */}
      <div className="about-curved-divider-wrap about-anim">
        <div className="about-curved-divider-annotation">
          <h2 className="about-section-heading">
            <HandwrittenNote color="dark" size="lg" rotate={-2}>
              about me!
            </HandwrittenNote>
          </h2>
        </div>
        <svg
          className="about-curved-divider-svg"
          viewBox="0 0 1000 32"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,16 Q500,30 1000,16"
            stroke="rgba(20, 20, 22, 0.18)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="about-editorial-wrapper">
        {/* 3-Column Editorial Taped Composition */}
        <div className="about-taped-composition">
          {/* Left Taped Polaroid: Portrait */}
          <div className="about-polaroid polaroid-portrait about-anim">
            <WashiTape
              color="blue"
              top="-10px"
              left="16px"
              rotate={-2}
              width={50}
            />
            <WashiTape
              color="yellow"
              top="-8px"
              right="16px"
              rotate={3}
              width={45}
            />
            <div className="polaroid-photo-frame">
              <img
                src="/images/portrait.jpg"
                alt="Sirwagya Shekhar — Full Stack &amp; AI Developer portrait"
                width="280"
                height="280"
                loading="lazy"
                decoding="async"
                className="polaroid-img"
              />
            </div>
            <div className="polaroid-caption font-mono">2026</div>
          </div>

          {/* Center Column: Conversational Note & Colorful Badges */}
          <div className="about-center-story about-anim">
            <p className="about-handwritten-note font-handwriting">
              I’m Sirwagya, a Computer Science Engineering student at{" "}
              <a
                href="https://vedam.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-inline-link"
              >
                Vedam School of Technology
              </a>{" "}
              in Pune, Maharashtra, and a full stack developer and AI builder who
              likes taking ideas that seem a little ambitious and figuring out how
              to make them actually work. Most of my time goes into building and
              shipping things, from AI systems and backend infrastructure to the
              interfaces people interact with. Along the way, I’m going deeper
              into DSA, backend architecture, system design, and AI engineering,
              with a focus on understanding not just how to build something, but
              how to build it well. I’m still figuring a lot of things out, but
              that’s part of what I enjoy: learning by building, taking on harder
              problems, and eventually working on software that can scale beyond
              the projects I’m building today.
            </p>

            {/* Scalloped / Colorful Paper Badges (2x2 Grid / Row) */}
            <div className="about-badges-grid">
              <div className="scallop-badge badge-yellow">
                <span className="badge-text font-tech">Interaction Design</span>
                <span className="badge-icon">🎛️</span>
              </div>
              <div className="scallop-badge badge-green">
                <span className="badge-text font-tech">AI Systems</span>
                <span className="badge-icon">⚡</span>
              </div>
              <div className="scallop-badge badge-pink">
                <span className="badge-text font-tech">
                  Distributed Backend
                </span>
                <span className="badge-icon">🧩</span>
              </div>
              <div className="scallop-badge badge-blue">
                <span className="badge-text font-tech">
                  Product Engineering
                </span>
                <span className="badge-icon">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Taped Polaroid: Workspace Setup */}
          <div className="about-polaroid polaroid-workspace about-anim">
            <WashiTape
              color="pink"
              top="-10px"
              left="18px"
              rotate={2}
              width={48}
            />
            <WashiTape
              color="blue"
              top="-8px"
              right="18px"
              rotate={-2}
              width={52}
            />
            <div className="polaroid-photo-frame">
              <img
                src="/images/workspace.jpg"
                alt="Sirwagya's software engineering and AI workspace setup"
                width="280"
                height="280"
                loading="lazy"
                decoding="async"
                className="polaroid-img"
              />
            </div>
            <div className="polaroid-caption font-mono">MTW'26</div>
          </div>
        </div>
      </div>
    </section>
  );
};
