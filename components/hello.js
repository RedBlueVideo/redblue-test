import { define, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/element-lit-html';
import { html } from 'lit-html';
import val from '@skatejs/val';

const h = val(React.createElement);

const Hello = define(
  class extends withComponent(withLitHtml()) {
    render() {
      return html`Hello, <strong><slot>World</slot></strong>!`;
    }
  }
);

export default Hello;
