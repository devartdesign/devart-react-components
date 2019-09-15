import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface IChipProps {
  label: string;
  icon: any;
  key?: string | number;
  className?: string;
  onClick: () => void;
}

const Chip = ({ onClick, label, key, icon, className }: IChipProps) => {
  const Icon = icon;
  return (
    <div role="button" key={key} className={`${css(styles.container)} ${className}`} onClick={onClick}>
      <span className={css(styles.label)}>{label}</span>
      {icon && <Icon />}
    </div>
  );
};

export default memo(Chip);
