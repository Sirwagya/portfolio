import React from 'react';

interface WashiTapeProps {
  color?: 'neutral' | 'yellow' | 'blue' | 'pink';
  rotate?: number;
  width?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'neutral',
  rotate = -3,
  width = '70px',
  top,
  left,
  right,
  bottom,
  className = '',
  style = {}
}) => {
  const colorClass = color === 'neutral' ? '' : `washi-tape-${color}`;

  return (
    <div
      className={`washi-tape ${colorClass} ${className}`}
      style={{
        width,
        top,
        left,
        right,
        bottom,
        transform: `rotate(${rotate}deg)`,
        ...style
      }}
      aria-hidden="true"
    />
  );
};
