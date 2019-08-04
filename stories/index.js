// @jsx h

import React from 'react';
import { storiesOf } from '@storybook/react';
import val from '@skatejs/val';
import Hello from '../components/web-component.js';

const h = val(React.createElement);

customElements.define('x-hello', Hello);

storiesOf('Hello', module)
  .add('with no name', () => <Hello />)
  .add('with a name', () => <Hello>Daddy</Hello>);
