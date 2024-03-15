import About from '@components/about/about';
import BaseComponent from '@components/base-component';
import Feature from '@components/feature/feature';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Slider from '@components/slider/slider';

class Main {
  constructor(root) {
    this.root = root;
    this.page = new BaseComponent('div', ['main-page']);
    this.page.insertChildren(new Header(),new Slider(), new About(), new Feature(), new Footer());
  }

  createPage() {
    this.root.append(this.page.getNode());
  }
}

export default Main;
