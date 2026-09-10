import React from 'react';

export type StickerColor = 'yellow' | 'green' | 'pink' | 'blue' | 'orange' | 'purple' | 'white';

interface PaperStickerProps {
  children: React.ReactNode;
  color?: StickerColor;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PaperSticker: React.FC<PaperStickerProps> = ({
  children,
  color = 'yellow',
  rotate = 0,
  className = '',
  style = {},
  onClick
}) => {
  return (
    <span
      className={`paper-sticker sticker-${color} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
