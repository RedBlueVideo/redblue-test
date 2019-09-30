import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { MyComponent } from '../src/MyComponent.js';
import '../my-component.js';

storiesOf('my-component', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(MyComponent))
  .add(
    'Alternative Title',
    () => html`
      <my-component .title=${'Something else'}></my-component>
    `,
  );
