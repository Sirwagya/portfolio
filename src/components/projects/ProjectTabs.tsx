import React from 'react';
import type { ProjectData } from './projectData';
import './ProjectsSection.css';

interface ProjectTabsProps {
  projects: ProjectData[];
  activeIndex: number;
  onSelectTab: (index: number) => void;
}

export const ProjectTabs: React.FC<ProjectTabsProps> = ({
  projects,
  activeIndex,
  onSelectTab
}) => {
  return (
    <div className="project-tabs-nav-bar" role="tablist" aria-label="Project Navigation Tabs">
      <div className="project-tabs-track">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          const isLast = idx === projects.length - 1;
          const posClass = isFirst ? 'tab-pos-first' : isLast ? 'tab-pos-last' : 'tab-pos-mid';
          const activeTextColor = proj.number === '01' || proj.number === '02' ? '#ffffff' : '#141416';

          return (
            <button
              key={proj.id}
              role="tab"
              id={`tab-${proj.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${proj.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectTab(idx)}
              className={`project-tab-item ${posClass} ${isActive ? 'is-active' : 'is-inactive'}`}
              style={{
                backgroundColor: isActive ? proj.theme.tabBg : '#1c1d22',
                color: isActive ? activeTextColor : '#94a3b8',
                zIndex: isActive ? 10 : 4 - idx
              }}
            >
              <span className="project-tab-star" aria-hidden="true">✦</span>
              <span className="project-tab-label font-mono">PROJECT {proj.number}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
