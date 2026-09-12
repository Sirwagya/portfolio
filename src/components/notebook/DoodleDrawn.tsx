import React from 'react';

// Hand-drawn sketchy arrow pointing in various directions
export const DoodleArrow: React.FC<{
  direction?: 'down' | 'right' | 'up-right' | 'up-left' | 'curved-down' | 'loop';
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ direction = 'down', color = '#2563eb', className = '', width = 48, height = 48 }) => {
  if (direction === 'curved-down') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 10C24 8 48 16 46 36C45 44 38 48 30 49M30 49L37 42M30 49L38 54"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'right') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M6 16C18 14 38 15 52 14M52 14L42 7M52 14L43 22"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'up-right') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M8 34C13 22 21 13 32 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 7L32 6L29 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'up-left') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M32 34C27 22 19 13 8 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 7L8 6L11 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default down arrow
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 6C15 20 14 38 14 52M14 52L7 42M14 52L22 43"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Hand-drawn sketchy underline
export const DoodleUnderline: React.FC<{
  color?: string;
  className?: string;
  width?: string | number;
}> = ({ color = '#ea580c', className = '', width = '100%' }) => {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width }}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 11C45 4 120 13 197 7C140 12 70 14 12 13"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Hand-drawn little star/sparkle
export const DoodleStar: React.FC<{
  color?: string;
  size?: number;
  className?: string;
}> = ({ color = '#ca8a04', size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L13.8 8.5L20 10L14.5 13.5L16 20L11.5 15.5L6 19L8.2 13L2.5 10.5L9 8.8L12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
};
