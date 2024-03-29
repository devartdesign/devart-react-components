import React, { memo } from 'react';

interface ICloseIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const CloseIcon = ({ width = 24, height = 24, className }: ICloseIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" key="CloseIcon" className={className} width={width} height={height} viewBox="0 0 24 24">
      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
    </svg>
  );
};

export default memo(CloseIcon);
