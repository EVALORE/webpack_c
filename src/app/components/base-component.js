class BaseComponent {
  #node;

  constructor(tagName = 'div', classNames = [], textContent = '', parentNode = null) {
    this.#node = document.createElement(tagName);
    this.#node.classList.add(...classNames);
    this.#node.textContent = textContent;
    if (parentNode) parentNode.append(this.#node);
  }

  insertChild(child) {
    this.#node.append(child.getNode());
  }

  insertChildren(...children) {
    children.forEach((child) => {
      this.insertChild(child);
    });
  }

  setContent(content) {
    this.#node.textContent = content;
  }

  setInnerHTML(content) {
    this.#node.innerHTML = content;
  }

  setAttribute(attribute, value) {
    this.#node.setAttribute(attribute, value);
  }

  getNode() {
    return this.#node;
  }

  addListener(event, listener, options) {
    this.#node.addEventListener(event, listener, options);
  }
}

export default BaseComponent;
