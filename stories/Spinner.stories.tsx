import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs'

import Spinner from '../src/components/Spinner';

storiesOf('Spinner', module)
  .add(
    'with size and color',
    () => <Spinner size={number('Size', 15)} color={text('Color', '#999999') as any} />
  )
  .add(
    'without size and color',
    () => <Spinner />
  );
