const INDEX_OF_SECOND_ITEM_IN_ITERABLE = 1;

class Router {
  constructor(routes, onHashChange) {
    this.onHashChange = onHashChange;
    this.routes = routes;
    window.onhashchange = this.hashChanged;
    this.hashChanged();
  }

  hashChanged = () => {
    const route =
      window.location.hash.length > 0
        ? window.location.hash.substr(INDEX_OF_SECOND_ITEM_IN_ITERABLE).split('/')[0]
        : 'main';
    if (this.onHashChange) {
      this.onHashChange(this.routes.find((routeName) => routeName.name === route).controller);
    }
  };
}

export default Router;
