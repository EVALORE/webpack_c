/* eslint-disable max-classes-per-file */
const TSconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const paths = require('./paths');

class DefaultBuilder {
  buildMode = 'development';

  useSourcemap = false;

  #loaders = [];

  #plugins = [];

  config = {
    context: paths.src,
    mode: 'development',
    entry: `${paths.src}/index`,
    output: {},
    plugins: [],
    module: { rules: [] },
    resolve: {
      extensions: ['.js', '.ts', '.json'],
      modules: [paths.src, 'node_modules'],
      plugins: [
        new TSconfigPathsWebpackPlugin({ configFile: 'jsconfig.json', extensions: ['.js', '.ts'] }),
      ],
    },
  };

  /**
   * DefaultBuilder constructor
   * @param {'development'|'production'} buildMode
   *
   */

  constructor(buildMode) {
    this.config.mode = buildMode;
    this.buildMode = buildMode;
    this.config.devtool = this.#isProduction() ? false : 'inline-source-map';
    this.#configureOutput();
  }

  /**
   * Adds a loader to the list of loaders.
   *
   * @param {Object|Function} loaderConfig - The loader configuration
   * @return {WebpackBuilder} - Returns the current object instance.
   */
  addLoader(loaderConfig) {
    let loader;
    if (typeof loaderConfig === 'function') {
      loader = loaderConfig(this.buildMode, this.#isDevelopment());
    } else {
      loader = loaderConfig;
    }

    this.#loaders = [...this.#loaders, loader];

    return this;
  }

  addPlugin(pluginConfig) {
    let plugin;
    if (typeof pluginConfig === 'function') {
      plugin = pluginConfig(this.buildMode, this.#isDevelopment());
    } else {
      plugin = pluginConfig;
    }

    this.#plugins = [...this.#plugins, plugin];

    return this;
  }

  build() {
    const loaderConfig = [{ oneOf: this.#loaders }];

    this.config.module.rules = [...this.config.module.rules, ...loaderConfig];
    this.config.plugins = [...this.config.plugins, ...this.#plugins];

    return this.config;
  }

  #configureOutput() {
    const outputConfig = {
      path: this.#isProduction() ? paths.build : paths.build,
      filename: this.#isDevelopment() ? '[name].js' : '[name].[contenthash:8].js',
      publicPath: this.#isProduction() ? './' : 'auto',
      clean: this.#isProduction(),
    };

    this.config.output = { ...this.config.output, ...outputConfig };
  }

  #isDevelopment() {
    return this.buildMode === 'development';
  }

  #isProduction() {
    return this.buildMode === 'production';
  }
}

class DevelopmentBuilder extends DefaultBuilder {
  #host;

  constructor() {
    super('development');

    this.#host = 'local-ip';
    this.#configureWebServer();
  }

  #configureWebServer() {
    this.config.devServer = {
      open: {
        app: {
          name: 'chrome',
          arguments: ['--incognito'],
        },
      },
      static: { directory: paths.src },
      host: this.#host,
      historyApiFallback: true,
    };
  }
}

class ProductionBuilder extends DefaultBuilder {
  constructor() {
    super('production');
  }
}

module.exports = {
  DevelopmentBuilder,
  ProductionBuilder,
};
