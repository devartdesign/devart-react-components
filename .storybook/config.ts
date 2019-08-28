import { configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';

import '../src/loadIconLibrary';

addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
