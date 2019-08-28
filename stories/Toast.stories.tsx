import React from 'react';

import { storiesOf } from '@storybook/react';

import Toast, { ToastType } from '../src/components/Toast/Toast';

storiesOf('Toast', module)
  .add(
    'info',
    () => <Toast title="info" description="info toast" type={ToastType.INFO} onClose={() => {/** */ }} />
  )
  .add(
    'success',
    () => <Toast title="success" description="success toast" type={ToastType.SUCCESS} onClose={() => {/** */ }} />
  )
  .add(
    'warn',
    () => <Toast title="warn" description="warn toast" type={ToastType.WARN} onClose={() => {/** */ }} />
  )
  .add(
    'danger',
    () => <Toast title="danger" description="danger toast" type={ToastType.ERROR} onClose={() => {/** */ }} />
  );
