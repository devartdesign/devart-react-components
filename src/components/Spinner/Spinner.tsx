import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface ISpinnerProps {
  size?: number;
  color?: string;
}

const Spinner = ({ size = 25, color = '#333333' }: ISpinnerProps) => {
  return (
    <div key="Spinner" className={css(styles.container)}>
      <div
        className={css(styles.spinner)}
        style={{ width: size, height: size, borderWidth: Math.min(Math.round(size / 6), 5), borderColor: color, borderRightColor: 'transparent' }}
      />
    </div>
  );
};

export default memo(Spinner);
