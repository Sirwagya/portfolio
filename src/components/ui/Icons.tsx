import React from 'react';

export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.518 5.89 5.89 0 0 0 2.502-.276 5.86 5.86 0 0 0 1.954-1.12l3.435-3.327a1.344 1.344 0 0 0 .428-.971 1.353 1.353 0 0 0-.428-.972 1.342 1.342 0 0 0-.97-.428 1.34 1.34 0 0 0-.97.428l-3.415 3.328a3.176 3.176 0 0 1-1.077.632 3.197 3.197 0 0 1-1.354.148 3.242 3.242 0 0 1-2.613-1.928 3.244 3.244 0 0 1-.223-.62 3.01 3.01 0 0 1-.033-1.288 2.87 2.87 0 0 1 .657-1.144l3.853-4.126 5.406-5.788a1.35 1.35 0 0 0-.05-1.905 1.35 1.35 0 0 0-.961-.438zM16.48 7.375a1.35 1.35 0 0 0-1.35 1.35v6.55a1.35 1.35 0 0 0 2.7 0v-6.55a1.35 1.35 0 0 0-1.35-1.35zM9.014 13.064a1.35 1.35 0 0 0-1.35 1.35 1.35 1.35 0 0 0 1.35 1.35h6.634a1.35 1.35 0 0 0 1.35-1.35 1.35 1.35 0 0 0-1.35-1.35H9.014z" />
  </svg>
);

export const CodeChefIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.012 3c-1.63 0-3.05.933-3.774 2.296C7.545 5.105 6.793 5 6 5c-2.76 0-5 2.24-5 5 0 1.558.718 2.946 1.838 3.864C2.302 14.417 2 15.17 2 16c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3 0-.83-.302-1.583-.838-2.136C22.282 12.946 23 11.558 23 10c0-2.76-2.24-5-5-5-.793 0-1.545.105-2.238.296C15.042 3.933 13.622 3 12.012 3zm-7.012 18v1.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5V21H5z" />
  </svg>
);

export const CodeforcesIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zM12 3a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0v-15A1.5 1.5 0 0 1 12 3zm7.5 7.5A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z" />
  </svg>
);

export const CodolioIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);


