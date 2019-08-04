export default class Hello extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `Hello, <strong><slot>World</slot></strong>!`;
  }
}
