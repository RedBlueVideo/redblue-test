export default class Component extends HTMLElement {
  static get is() {
    return 'component'
  }

  constructor() {
    console.log('It works!');
  }
};