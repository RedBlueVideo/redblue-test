import {
  storiesOf,
  html,
  withKnobs,
  // withClassPropertiesKnobs,
} from '@open-wc/demoing-storybook';
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

// import RedBlueVideo from '../src/redblue-video.js';
import '../redblue-video.js';
import youtubeEmbed from '../examples/youtube-embed.hvml';

storiesOf( 'redblue-video', module )
  .addDecorator( withKnobs )
  // .add( 'Documentation', () => withClassPropertiesKnobs( RedBlueVideo ) )
  .add( 'with no light DOM', () => html`
    <redblue-video aspect-ratio="16:9"></redblue-video>
  ` )
  .add( 'with a light DOM', () => html`
    <redblue-video aspect-ratio="16:9">${unsafeHTML( youtubeEmbed )}</redblue-video>
  ` );
