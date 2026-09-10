import React from 'react';

interface HandwrittenNoteProps {
  children: React.ReactNode;
  color?: 'blue' | 'red' | 'dark' | 'orange' | 'green';
  rotate?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  color = 'blue',
  rotate = -2,
  size = 'md',
  className = '',
  style = {}
}) => {
  const colorMap = {
    blue: '#2563eb',
    red: '#dc2626',
    dark: '#18181b',
    orange: '#ea580c',
    green: '#16a34a'
  };

  const sizeMap = {
    sm: '1.15rem',
    md: '1.45rem',
    lg: '1.85rem',
    xl: '2.25rem'
  };

  return (
    <span
      className={`font-handwriting ${className}`}
      style={{
        color: colorMap[color],
        fontSize: sizeMap[size],
        transform: `rotate(${rotate}deg)`,
        display: 'inline-flex',
        alignItems: 'center',
        userSelect: 'none',
        ...style
      }}
    >
      {children}
    </span>
  );
};
