class CustomElement extends HTMLElement {
  // constructor() {
  //   super();
  // }

  connectedCallback() {
    console.log( 'Connected!' );
  }
}