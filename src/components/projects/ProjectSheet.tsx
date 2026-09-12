import { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectData } from './projectData';
import { NexoraCollage, OnceUponMeCollage, CampusConnectCollage, VoltCraveCollage } from './ProjectCollages';
import './ProjectsSection.css';

interface ProjectSheetProps {
  project: ProjectData;
}

export const ProjectSheet = forwardRef<HTMLDivElement, ProjectSheetProps>(
  ({ project }, ref) => {
    return (
      <article
        ref={ref}
        id={`panel-${project.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${project.id}`}
        className={`active-project-sheet sheet-theme-${project.id}`}
        style={{
          backgroundColor: project.theme.bg,
          color: project.theme.textColor
        }}
      >
        {/* Left Column: Project Editorial Story */}
        <div className="sheet-story-col">
          {/* 1. Date & Category */}
          <div
            className="sheet-meta-eyebrow font-mono"
            style={{ color: project.theme.metaColor }}
          >
            <span
              className="sheet-meta-bullet"
              style={{ backgroundColor: project.theme.textColor }}
            />
            <span className="sheet-date-text">{project.date}</span>
            <span className="sheet-meta-divider">&bull;</span>
            <span className="sheet-category-text">{project.category}</span>
          </div>

          {/* 2. PROJECT NUMBER */}
          <div
            className="sheet-number-badge font-mono"
            style={{ color: project.theme.textColor }}
          >
            PROJECT {project.number}
          </div>

          {/* 3. HUGE PROJECT TITLE */}
          <h3 className="sheet-headline-title font-headline">
            {project.title}
          </h3>

          {/* 4. One-line description */}
          <p
            className="sheet-tagline-text font-sans"
            style={{ color: project.theme.textColor }}
          >
            {project.tagline}
          </p>

          {/* 5. Underlined CTA link */}
          <div className="sheet-cta-row">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-primary-link font-mono"
              style={{
                color: project.theme.textColor,
                borderColor: project.theme.textColor
              }}
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </a>
          </div>

          {/* 6. Black Cut-Corner Tags */}
          <div className="sheet-tags-container">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="sheet-corner-tag font-mono"
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

        {/* Right Column: Framed Showcase Canvas */}
        <div className="sheet-visual-col">
          <div
            className="sheet-showcase-board"
            style={{ backgroundColor: project.theme.frameBg }}
          >
            {/* Corner Washi Tape Strips */}
            <span className="board-washi-tape tape-corner-tl" aria-hidden="true" />
            <span className="board-washi-tape tape-corner-tr" aria-hidden="true" />

            {/* Active Project Quad Collage */}
            {project.id === 'nexora-ai' && <NexoraCollage />}
            {project.id === 'onceuponme' && <OnceUponMeCollage />}
            {project.id === 'campus-connect' && <CampusConnectCollage />}
            {project.id === 'crave-check' && <VoltCraveCollage />}
          </div>
        </div>
      </article>
    );
  }
);

ProjectSheet.displayName = 'ProjectSheet';
