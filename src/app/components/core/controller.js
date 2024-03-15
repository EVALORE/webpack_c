import Main from '@components/pages/main-page';
import MenuPage from '@components/pages/menu-page';
import Router from './router';
import BaseComponent from '../base-component';

class Controller extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.appRoot = new BaseComponent('div', ['page']);
    this.router = new Router(
      [
        {
          name: 'main',
          controller: new Main(this.appRoot.getNode()),
        },
      ],
      this.render.bind(this),
    );
    this.insertChild(this.appRoot);
  }

  render(page) {
    this.appRoot.getNode().innerHTML = '';
    page.createPage();
  }

  getAppRoot() {
    return this.appRoot.getNode();
  }
}

export default Controller;
