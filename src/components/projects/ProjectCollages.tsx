import React from 'react';
import './ProjectsSection.css';

/* PROJECT 01: Nexora AI */
export const NexoraCollage: React.FC = () => (
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
export const OnceUponMeCollage: React.FC = () => (
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
export const CampusConnectCollage: React.FC = () => (
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

/* PROJECT 04: Crave Check */
export const VoltCraveCollage: React.FC = () => (
  <div className="mockup-screens-quad">
    {/* Column 1 */}
    <div className="mockup-col">
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-art-box green-tint">
          <svg className="phone-plant-svg" viewBox="0 0 60 60" fill="none">
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
      <div className="app-phone-card">
        <div className="phone-notch" />
        <div className="phone-avatar-circle">🧑‍💻</div>
        <div className="phone-title-sm font-tech font-bold text-center">Welcome, Alexander</div>
        <div className="phone-sub-xs font-mono text-center">Your home energy footprint is synced</div>
        <button className="phone-pill-btn dark-btn font-mono">Continue</button>
      </div>

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
