import BaseComponent from '@components/base-component';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Menu from '@components/menu/menu';

class MenuPage {
  constructor(root) {
    this.root = root;
    this.page = new BaseComponent('div', ['menu-page']);
    this.page.insertChildren(new Header().headerMenu, new Menu(), new Footer());
  }

  createPage() {
    this.root.append(this.page.getNode())
  }
}

export default MenuPage;
