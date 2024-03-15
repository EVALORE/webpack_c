const { jsLoader, cssLoader, scssModuleLoader, scssLoader, images, fonts } = require('./loaders');
const { htmlWebpackPlugin, miniCssExtractPlugin } = require('./plugins');
const { ProductionBuilder } = require('./webpackBuilder');

const builder = new ProductionBuilder();

const webpackConfig = builder
  .addLoader(jsLoader)
  .addLoader(cssLoader)
  .addLoader(scssModuleLoader)
  .addLoader(scssLoader)
  .addLoader(images)
  .addLoader(fonts)
  .addPlugin(htmlWebpackPlugin)
  .addPlugin(miniCssExtractPlugin)
  .build();

module.exports = webpackConfig;
