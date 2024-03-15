import Controller from './components/core/controller';

class App {
  #element;

  #parent;

  constructor(element, parent) {
    this.#element = element;
    this.#parent = parent;
  }

  start() {
    this.#parent.appendChild(this.#element);
  }
}

export default new App(new Controller().getNode(), document.body).start();
