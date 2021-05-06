import React, { memo } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export enum ToastType {
  SUCCESS = 'success',
  WARN = 'warning',
  ERROR = 'danger',
  INFO = 'info'
}

export interface IToastProps {
  title: string;
  description: string;
  type: ToastType;
  onClose: () => void;
}

const Toast = ({ title, description, type, onClose }: IToastProps) => {
  return (
    <div key="Toast" className={css(styles.container, styles[type])}>
      <div className={css(styles.header)}>
        <strong>{title}</strong>
        <button data-testid="close-toast-btn" className={css(styles.button)} onClick={onClose}>
          <small>x</small>
        </button>
      </div>
      <div className={css(styles.body)}>{description}</div>
    </div>
  );
};

export default memo(Toast);
