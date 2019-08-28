import React, { memo, CSSProperties } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface IColProps {
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  style?: CSSProperties;
}

const Col = ({ children, className = '', size = 12, style = {} }: React.PropsWithChildren<IColProps>) => {
  return (
    <div
      key="Col"
      className={`${css(styles.container)} ${className}`.trim()}
      style={{ maxWidth: `${(size / 12) * 100}%`, flex: `0 0 ${(size / 12) * 100}%`, ...style }}
    >
      {children}
    </div>
  );
};

export default memo(Col);
