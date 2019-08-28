import React, { memo, CSSProperties } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface IRowProps {
  className?: string;
  style?: CSSProperties;
}

const Row = ({ children, className = '', style = {} }: React.PropsWithChildren<IRowProps>) => {
  return (
    <div key="Row" className={`${css(styles.container)} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

export default memo(Row);
