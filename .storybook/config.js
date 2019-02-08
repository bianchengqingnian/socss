import {
  addDecorator,
  configure,
} from '@storybook/html';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import '../scss/soc.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../docs', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withBackgrounds([
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Orange', value: 'orange' },
  { name: 'Red', value: 'red' },
  { name: 'Purple', value: 'purple' },
  { name: 'Black', value: 'black' },
  { name: 'White', value: 'white', default: true },
]));

configure(loadStories, module);
