import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectsSection.css';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  date: string;
  tagline: string;
  repoUrl: string;
  tags: string[];
  theme: {
    bg: string;
    tabBg: string;
    textColor: string;
    metaColor: string;
    tagBg: string;
    tagColor: string;
    frameBg: string;
    shoulderBg: string;
  };
}

export const ALL_PROJECTS: ProjectData[] = [
  {
    id: 'nexora-ai',
    number: '01',
    title: 'Nexora AI',
    date: 'OCT 24, 2024',
    tagline: 'Helping construction teams catch structural mistakes before they become expensive.',
    repoUrl: 'https://github.com/sirwagyashekhar',
    tags: ['COMPUTER VISION', 'SITE INTEL'],
    theme: {
      bg: '#2563eb', // Royal Blue
      tabBg: '#2563eb',
      textColor: '#ffffff',
      metaColor: '#ffffff',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a', // Soft warm lemon yellow
      shoulderBg: '#2563eb',
    }
  },
  {
    id: 'onceuponme',
    number: '02',
    title: 'OnceUponMe',
    date: 'JAN 12, 2025',
    tagline: 'Transforming real human memories into studio-grade 35mm cinematic story reels.',
    repoUrl: 'https://github.com/sirwagyashekhar',
    tags: ['60FPS VIDEO', 'ELEVENLABS'],
    theme: {
      bg: '#141416', // Solid Ink Black
      tabBg: '#18181b',
      textColor: '#ffffff',
      metaColor: '#a1a1aa',
      tagBg: '#ffffff',
      tagColor: '#141416',
      frameBg: '#fef08a',
      shoulderBg: '#141416',
    }
  },
  {
    id: 'campus-connect',
    number: '03',
    title: 'Campus Connect',
    date: 'AUG 04, 2025',
    tagline: 'Bringing campus life into one unified room with real-time peer coordination.',
    repoUrl: 'https://github.com/sirwagyashekhar',
    tags: ['REAL-TIME', 'WEBSOCKETS'],
    theme: {
      bg: '#facc15', // Golden Ochre Yellow
      tabBg: '#facc15',
      textColor: '#141416',
      metaColor: '#141416',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a',
      shoulderBg: '#facc15',
    }
  },
  {
    id: 'crave-check',
    number: '04',
    title: 'Crave Check',
    date: 'MAR 16, 2026',
    tagline: 'Helping people actually understand what is inside the food they eat every day.',
    repoUrl: 'https://github.com/sirwagyashekhar',
    tags: ['CLIMATE', 'DATA DESIGN'],
    theme: {
      bg: '#ff2d78', // Vibrant Pink / Magenta (Exact reference match)
      tabBg: '#ff2d78',
      textColor: '#141416',
      metaColor: '#141416',
      tagBg: '#141416',
      tagColor: '#ffffff',
      frameBg: '#fef08a',
      shoulderBg: '#ff2d78',
    }
  }
];

interface CleanProjectCardProps {
  project: ProjectData;
  activeTab?: number;
  onSelectTab?: (idx: number) => void;
  allProjects?: ProjectData[];
  showTabsHeader?: boolean;
}

export const CleanProjectCard: React.FC<CleanProjectCardProps> = ({
  project,
  activeTab: _activeTab = 0,
  onSelectTab,
  allProjects = ALL_PROJECTS,
  showTabsHeader = true
}) => {
  return (
    <div className="clean-folder-wrapper">
      {/* Folder Tabs — progressive: only show tabs up to this card's index */}
      {showTabsHeader && allProjects.length > 0 && (() => {
        const visibleTabs = allProjects.slice(0, _activeTab + 1);
        return (
          <div className="folder-tabs-header-bar" role="tablist" aria-label="Project Tabs">
            {visibleTabs.map((p, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === visibleTabs.length - 1;
              const posClass = isFirst ? 'tab-pos-first' : isLast ? 'tab-pos-last' : 'tab-pos-mid';
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isLast}
                  onClick={() => onSelectTab && onSelectTab(idx)}
                  className={`folder-tab-btn ${posClass} ${isLast ? 'is-active' : 'is-inactive'}`}
                  style={{
                    backgroundColor: p.theme.tabBg,
                    color: p.number === '01' || p.number === '02' ? '#ffffff' : '#141416'
                  }}
                >
                  <span className="tab-star">✦</span>
                  <span className="tab-text font-mono">PROJECT {p.number}</span>
                </button>
              );
            })}
            {/* Shoulder shelf extending to right edge */}
            <div
              className="folder-tab-shoulder"
              style={{ backgroundColor: project.theme.shoulderBg }}
              aria-hidden="true"
            />
          </div>
        );
      })()}

      {/* Main Clean Folder Sheet */}
      <article
        className={`clean-folder-sheet sheet-theme-${project.id}`}
        style={{
          backgroundColor: project.theme.bg,
          color: project.theme.textColor
        }}
        aria-label={`${project.title} Case Study`}
      >
        {/* Left Column: Clean, Minimal Story */}
        <div className="clean-sheet-left">
          {/* Metadata: Bullet + Date */}
          <div className="clean-sheet-meta font-mono" style={{ color: project.theme.metaColor }}>
            <span className="clean-bullet" style={{ backgroundColor: project.theme.textColor }} />
            <span>{project.date}</span>
          </div>

          {/* Clean Title (Geometric Sans, NOT wide) */}
          <h3 className="clean-sheet-title font-headline">
            {project.title}
          </h3>

          {/* Clean 1-2 sentence description */}
          <p className="clean-sheet-description font-sans" style={{ color: project.theme.textColor }}>
            {project.tagline}
          </p>

          {/* Underlined CTA Link */}
          <div className="clean-sheet-link-wrapper">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clean-sheet-cta-link font-mono"
              style={{ color: project.theme.textColor, borderColor: project.theme.textColor }}
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </a>
          </div>

          {/* Black Cut-Corner Tags */}
          <div className="clean-sheet-tags-row">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="clean-cut-tag font-mono"
                style={{
                  backgroundColor: project.theme.tagBg,
                  color: project.theme.tagColor
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Framed App Mockup Showcase with Washi Tape */}
        <div className="clean-sheet-right">
          <div className="clean-showcase-frame" style={{ backgroundColor: project.theme.frameBg }}>
            {/* White Translucent Washi Tape Strips at Corners */}
            <span className="clean-washi-tape tape-corner-left" aria-hidden="true" />
            <span className="clean-washi-tape tape-corner-right" aria-hidden="true" />

            {/* Inner Clean Screens Preview */}
            {project.id === 'crave-check' && <VoltCraveCollage />}
            {project.id === 'nexora-ai' && <NexoraCollage />}
            {project.id === 'onceuponme' && <OnceUponMeCollage />}
            {project.id === 'campus-connect' && <CampusConnectCollage />}
          </div>
        </div>
      </article>
    </div>
  );
};

/* ==========================================================================
   4-COLUMN CLEAN APP SCREEN COLLAGES (Exact aesthetic from user screenshot)
   Zero node graphs, zero terminal dumps, zero AI slop.
   ========================================================================== */

/* PROJECT 04: Volt / Crave Check (Direct 1:1 match to reference image) */
const VoltCraveCollage: React.FC = () => (
  <div className="mockup-screens-quad">
    {/* Column 1 */}
    <div className="mockup-col">
      {/* Screen 1: Real-Time Progress Tracking with Plant/Magnifier */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box green-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 60" fill="none">
            {/* Hand with Magnifying glass inspecting potted plant */}
            <circle cx="34" cy="22" r="11" stroke="#141416" strokeWidth="2.2" fill="#dcfce7" />
            <path d="M26 30l-8 8" stroke="#141416" strokeWidth="3" strokeLinecap="round" />
            <path d="M34 16c0 5-4 8-4 8s4-1 4-8z" fill="#22c55e" stroke="#141416" strokeWidth="1.2" />
            <path d="M37 20c0 4 3 6 3 6s-3-1-3-6z" fill="#86efac" stroke="#141416" strokeWidth="1.2" />
            <rect x="29" y="38" width="10" height="11" rx="2" fill="#fed7aa" stroke="#141416" strokeWidth="1.8" />
          </svg>
        </div>
        <div className="phone-title-sm font-tech font-bold">Real-Time Progress Tracking</div>
        <button className="phone-pill-btn green-btn font-mono">Get Started</button>
      </div>

      {/* Screen 2: Preferences Checklist */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono">
          <span className="font-bold">Preferences</span>
          <span className="status-dot">●</span>
        </div>
        <div className="phone-check-item">
          <span className="check-box checked">✓</span>
          <span className="font-sans text-xs">Smart Metre Sync</span>
        </div>
        <div className="phone-check-item">
          <span className="check-box checked">✓</span>
          <span className="font-sans text-xs">Peak Hours Off</span>
        </div>
        <div className="phone-check-item">
          <span className="check-box"></span>
          <span className="font-sans text-xs">EV Overnight Charging</span>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="mockup-col">
      {/* Screen 3: Apartment Tracker */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono">
          <span className="font-bold">Apartment 4B</span>
          <span className="text-xs">3 active</span>
        </div>
        <div className="phone-avatars-row">
          <span className="avatar-chip">TR</span>
          <span className="avatar-chip">JS</span>
          <span className="avatar-chip">MH</span>
        </div>
        <div className="phone-bar-tiny"><div className="phone-bar-fill" style={{ width: '85%' }} /></div>
      </div>

      {/* Screen 4: Large Photo Card (Bathroom inspection with tags) */}
      <div className="app-phone-card tall-card">
        <div className="phone-notch" />
        <div className="phone-camera-canvas bathroom-canvas">
          <div className="camera-viewfinder-overlay">
            <span className="vf-corner tl" />
            <span className="vf-corner tr" />
            <span className="vf-corner bl" />
            <span className="vf-corner br" />
            <div className="vf-pin font-mono">
              <span className="pin-dot">●</span>
              <span>Bathroom &bull; 0.4 kWh</span>
            </div>
          </div>
        </div>
        <div className="phone-cta-row">
          <button className="phone-sub-btn font-mono">Details</button>
          <button className="phone-sub-btn dark-sub-btn font-mono">View Room</button>
        </div>
      </div>

      {/* Screen 5: Question Card */}
      <div className="app-phone-card">
        <div className="phone-title-xs font-tech font-bold">Which chores do you enjoy?</div>
        <div className="phone-tag-grid font-mono">
          <span className="diet-pill active">DISHES</span>
          <span className="diet-pill active">LAUNDRY</span>
          <span className="diet-pill">COOKING</span>
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="mockup-col">
      {/* Screen 6: Circular Energy Progress Gauge (68%) */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-gauge-wrap">
          <svg className="phone-gauge-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6.5" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#15803d"
              strokeWidth="6.5"
              strokeDasharray="201"
              strokeDashoffset="64"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="phone-gauge-center">
            <span className="gauge-val font-headline">68%</span>
            <span className="gauge-lbl font-mono">MONTHLY GOAL</span>
          </div>
        </div>
        <div className="phone-stat-row font-mono">
          <span>142 kWh</span>
          <span className="font-bold">-22% Cost</span>
        </div>
      </div>

      {/* Screen 7: Calendar & Schedule (April 2026) */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-calendar-head font-mono">
          <span className="font-bold">APRIL 2026</span>
          <span>● ACTIVE</span>
        </div>
        <div className="phone-days-row font-mono">
          <span>S</span><span>M</span><span>T</span><span className="day-active">W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div className="phone-task-row font-mono">
          <span className="task-icon">⚡</span>
          <span>Heat Pump &bull; Eco Mode</span>
        </div>
        <div className="phone-task-row font-mono">
          <span className="task-icon">💡</span>
          <span>Smart LED Schedule</span>
        </div>
      </div>
    </div>

    {/* Column 4 */}
    <div className="mockup-col">
      {/* Screen 8: Welcome Screen with Confetti */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-avatar-circle">🧑‍💻</div>
        <div className="phone-title-sm font-tech font-bold text-center">Welcome, Alexander</div>
        <div className="phone-sub-xs font-mono text-center">Your home energy footprint is synced</div>
        <button className="phone-pill-btn dark-btn font-mono">Continue</button>
      </div>

      {/* Screen 9: Room Information 1/2 */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono">
          <span className="font-bold">Room Info 1/2</span>
          <span>STEP</span>
        </div>
        <div className="phone-macro-grid font-mono">
          <div className="macro-cell"><span>Living</span><strong>1</strong></div>
          <div className="macro-cell"><span>Bedrooms</span><strong>3</strong></div>
          <div className="macro-cell"><span>Kitchen</span><strong>1</strong></div>
          <div className="macro-cell"><span>Bath</span><strong>2</strong></div>
        </div>
        <button className="phone-pill-btn font-mono text-xs">Next</button>
      </div>

      {/* Screen 10: Personalized Chore Routines */}
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box yellow-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 40" fill="none">
            <path d="M15 32c5-16 25-16 30 0" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="30" cy="14" r="7" fill="#fde047" stroke="#ca8a04" strokeWidth="1.8" />
          </svg>
        </div>
        <div className="phone-title-xs font-tech font-bold">Personalized Routines</div>
        <button className="phone-pill-btn font-mono text-xs">View Routine</button>
      </div>
    </div>
  </div>
);

/* PROJECT 01: Nexora AI */
const NexoraCollage: React.FC = () => (
  <div className="mockup-screens-quad">
    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box blue-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 50" fill="none">
            <rect x="14" y="14" width="32" height="24" rx="2" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="30" cy="26" r="6" fill="#93c5fd" />
          </svg>
        </div>
        <div className="phone-title-sm font-tech font-bold">Autonomous Site Scan</div>
        <div className="phone-sub-xs font-mono">Point-cloud BIM matching 99.4%</div>
        <button className="phone-pill-btn blue-btn font-mono">Scan Model</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono">
          <span className="font-bold">Inspection</span>
          <span className="status-dot green">● PASS</span>
        </div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">Foundation Shear Wall</span></div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">Anchor Bolt Alignment</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Zone 04 Audit</span><span>BIM #3104</span></div>
        <div className="phone-avatars-row"><span className="avatar-chip">CE</span><span className="avatar-chip">QA</span><span className="avatar-chip">PM</span></div>
      </div>
      <div className="app-phone-card tall-card">
        <div className="phone-notch" />
        <div className="phone-camera-canvas site-canvas">
          <div className="camera-viewfinder-overlay">
            <span className="vf-corner tl" /><span className="vf-corner tr" /><span className="vf-corner bl" /><span className="vf-corner br" />
            <div className="vf-pin font-mono"><span className="pin-dot">●</span><span>Pillar C-12: Zero Defect</span></div>
          </div>
        </div>
        <div className="phone-cta-row">
          <button className="phone-sub-btn font-mono">Telemetry</button>
          <button className="phone-sub-btn dark-sub-btn font-mono">Sign Off</button>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-title-xs font-tech font-bold">Active Defect Shields</div>
        <div className="phone-tag-grid font-mono">
          <span className="diet-pill active">SLAB</span><span className="diet-pill active">REBAR</span><span className="diet-pill">CONDUIT</span>
        </div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-gauge-wrap">
          <svg className="phone-gauge-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6.5" fill="none" />
            <circle cx="40" cy="40" r="32" stroke="#2563eb" strokeWidth="6.5" strokeDasharray="201" strokeDashoffset="52" strokeLinecap="round" fill="none" />
          </svg>
          <div className="phone-gauge-center">
            <span className="gauge-val font-headline">74%</span>
            <span className="gauge-lbl font-mono">COMPLETE</span>
          </div>
        </div>
        <div className="phone-stat-row font-mono"><span>Structure: 100%</span><span className="font-bold">MEP: 74%</span></div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-calendar-head font-mono"><span className="font-bold">FLIGHT LOGS</span><span>P6 SYNC</span></div>
        <div className="phone-days-row font-mono"><span>M</span><span>T</span><span className="day-active">W</span><span>T</span><span>F</span><span>S</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">🚁</span><span>Sector North &bull; 4K LiDAR</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">📐</span><span>CAD Overlay &bull; Verified</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-avatar-circle">🏗️</div>
        <div className="phone-title-sm font-tech font-bold text-center">Chief Engineer</div>
        <div className="phone-sub-xs font-mono text-center">Safety audit fully verified</div>
        <button className="phone-pill-btn dark-btn font-mono">Inspect</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Level 03 Zones</span><span>3/4</span></div>
        <div className="phone-macro-grid font-mono">
          <div className="macro-cell"><span>Slab</span><strong>Pass</strong></div>
          <div className="macro-cell"><span>Pipes</span><strong>Done</strong></div>
          <div className="macro-cell"><span>HVAC</span><strong>Open</strong></div>
          <div className="macro-cell"><span>Power</span><strong>Pass</strong></div>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-title-xs font-tech font-bold">Sub-Centimeter Accuracy</div>
        <button className="phone-pill-btn font-mono text-xs">Run 3D Diff</button>
      </div>
    </div>
  </div>
);

/* PROJECT 02: OnceUponMe */
const OnceUponMeCollage: React.FC = () => (
  <div className="mockup-screens-quad">
    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box purple-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 50" fill="none">
            <circle cx="30" cy="25" r="14" stroke="#9333ea" strokeWidth="2" />
            <polygon points="26,18 38,25 26,32" fill="#9333ea" />
          </svg>
        </div>
        <div className="phone-title-sm font-tech font-bold">35mm Reel Engine</div>
        <div className="phone-sub-xs font-mono">60 FPS Remotion render</div>
        <button className="phone-pill-btn purple-btn font-mono">Preview Reel</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Voiceover</span><span className="status-dot purple">● AI</span></div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">ElevenLabs Warmth</span></div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">Binaural Audio Sync</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Scene Cuts</span><span>5 Scenes</span></div>
        <div className="phone-avatars-row"><span className="avatar-chip">01</span><span className="avatar-chip">02</span><span className="avatar-chip">03</span></div>
      </div>
      <div className="app-phone-card tall-card">
        <div className="phone-notch" />
        <div className="phone-camera-canvas video-canvas">
          <div className="camera-viewfinder-overlay">
            <span className="vf-corner tl" /><span className="vf-corner tr" /><span className="vf-corner bl" /><span className="vf-corner br" />
            <div className="vf-pin font-mono"><span className="pin-dot">●</span><span>00:02:44 // 4K Master</span></div>
          </div>
        </div>
        <div className="phone-cta-row">
          <button className="phone-sub-btn font-mono">Timeline</button>
          <button className="phone-sub-btn dark-sub-btn font-mono">Export</button>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-title-xs font-tech font-bold">Narrative Pace</div>
        <div className="phone-tag-grid font-mono">
          <span className="diet-pill active">NOIR</span><span className="diet-pill active">CINEMATIC</span><span className="diet-pill">POETIC</span>
        </div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-gauge-wrap">
          <svg className="phone-gauge-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6.5" fill="none" />
            <circle cx="40" cy="40" r="32" stroke="#9333ea" strokeWidth="6.5" strokeDasharray="201" strokeDashoffset="32" strokeLinecap="round" fill="none" />
          </svg>
          <div className="phone-gauge-center">
            <span className="gauge-val font-headline">84%</span>
            <span className="gauge-lbl font-mono">RENDERED</span>
          </div>
        </div>
        <div className="phone-stat-row font-mono"><span>Frames: 3,420</span><span className="font-bold">4K 60fps</span></div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-calendar-head font-mono"><span className="font-bold">STORYBOARDS</span><span>AUTO-SYNC</span></div>
        <div className="phone-days-row font-mono"><span>1</span><span className="day-active">2</span><span>3</span><span>4</span><span>5</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">🎬</span><span>Scene 02: Golden Hour</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">🎵</span><span>Strings & Piano Sync</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-avatar-circle">🎞️</div>
        <div className="phone-title-sm font-tech font-bold text-center">Reel Mastered</div>
        <div className="phone-sub-xs font-mono text-center">Ready for social distribution</div>
        <button className="phone-pill-btn dark-btn font-mono">Play Full</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Aspect Ratios</span><span>3 Sets</span></div>
        <div className="phone-macro-grid font-mono">
          <div className="macro-cell"><span>9:16</span><strong>Reel</strong></div>
          <div className="macro-cell"><span>16:9</span><strong>Cinema</strong></div>
          <div className="macro-cell"><span>1:1</span><strong>Square</strong></div>
          <div className="macro-cell"><span>2.39:1</span><strong>Scope</strong></div>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-title-xs font-tech font-bold">Personalized Memory</div>
        <button className="phone-pill-btn font-mono text-xs">Share Reel</button>
      </div>
    </div>
  </div>
);

/* PROJECT 03: Campus Connect */
const CampusConnectCollage: React.FC = () => (
  <div className="mockup-screens-quad">
    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box yellow-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 50" fill="none">
            <circle cx="20" cy="25" r="8" fill="#fde047" />
            <circle cx="40" cy="25" r="8" fill="#fde047" />
            <path d="M20 25h20" stroke="#ca8a04" strokeWidth="2" />
          </svg>
        </div>
        <div className="phone-title-sm font-tech font-bold">HackPune 2026 // 36H</div>
        <div className="phone-sub-xs font-mono">340 students registered live</div>
        <button className="phone-pill-btn yellow-btn font-mono">RSVP Now</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Verified ID</span><span className="status-dot green">● LIVE</span></div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">Pune Univ Roll #</span></div>
        <div className="phone-check-item"><span className="check-box checked">✓</span><span className="font-sans text-xs">Hackathon Badges</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Study Hubs</span><span>14 Open</span></div>
        <div className="phone-avatars-row"><span className="avatar-chip">CS</span><span className="avatar-chip">AI</span><span className="avatar-chip">DS</span></div>
      </div>
      <div className="app-phone-card tall-card">
        <div className="phone-notch" />
        <div className="phone-camera-canvas campus-canvas">
          <div className="camera-viewfinder-overlay">
            <span className="vf-corner tl" /><span className="vf-corner tr" /><span className="vf-corner bl" /><span className="vf-corner br" />
            <div className="vf-pin font-mono"><span className="pin-dot">●</span><span>Library Hall A: 28 Seats Free</span></div>
          </div>
        </div>
        <div className="phone-cta-row">
          <button className="phone-sub-btn font-mono">Map View</button>
          <button className="phone-sub-btn dark-sub-btn font-mono">Join Room</button>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-title-xs font-tech font-bold">Campus Circles</div>
        <div className="phone-tag-grid font-mono">
          <span className="diet-pill active">CODING</span><span className="diet-pill active">AI CLUB</span><span className="diet-pill">DEBATE</span>
        </div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-gauge-wrap">
          <svg className="phone-gauge-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6.5" fill="none" />
            <circle cx="40" cy="40" r="32" stroke="#ca8a04" strokeWidth="6.5" strokeDasharray="201" strokeDashoffset="44" strokeLinecap="round" fill="none" />
          </svg>
          <div className="phone-gauge-center">
            <span className="gauge-val font-headline">LVL 14</span>
            <span className="gauge-lbl font-mono">REPUTATION</span>
          </div>
        </div>
        <div className="phone-stat-row font-mono"><span>Top 5% Peer Score</span><span className="font-bold">48 Rep</span></div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-calendar-head font-mono"><span className="font-bold">EVENT SCHEDULE</span><span>MAR 2026</span></div>
        <div className="phone-days-row font-mono"><span>M</span><span>T</span><span className="day-active">W</span><span>T</span><span>F</span><span>S</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">💻</span><span>Code Sprint &bull; Main Lab</span></div>
        <div className="phone-task-row font-mono"><span className="task-icon">🚀</span><span>Project Pitch &bull; Aud. 2</span></div>
      </div>
    </div>

    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-avatar-circle">🎓</div>
        <div className="phone-title-sm font-tech font-bold text-center">Sirwagya Shekhar</div>
        <div className="phone-sub-xs font-mono text-center">Lead Campus Organizer</div>
        <button className="phone-pill-btn dark-btn font-mono">Profile</button>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-header-row font-mono"><span className="font-bold">Study Rooms</span><span>4 Active</span></div>
        <div className="phone-macro-grid font-mono">
          <div className="macro-cell"><span>Lab 01</span><strong>Full</strong></div>
          <div className="macro-cell"><span>Lab 02</span><strong>8 Open</strong></div>
          <div className="macro-cell"><span>Library</span><strong>14 Open</strong></div>
          <div className="macro-cell"><span>Auditor</span><strong>Open</strong></div>
        </div>
      </div>
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-title-xs font-tech font-bold">WebSocket Real-Time Sync</div>
        <button className="phone-pill-btn font-mono text-xs">Join Feed</button>
      </div>
    </div>
  </div>
);
