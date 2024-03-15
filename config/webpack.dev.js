const {
  jsLoader,
  cssLoader,
  scssModuleLoader,
  scssLoader,
  images,
  fonts,
  svg,
} = require('./loaders');
const {
  htmlWebpackPlugin,
  miniCssExtractPlugin,
  // copyWebpackPlugin,
  spriteLoadersPlugin,
} = require('./plugins');

const { DevelopmentBuilder } = require('./webpackBuilder');

const builder = new DevelopmentBuilder();

const webpackConfig = builder
  .addLoader(jsLoader)
  .addLoader(cssLoader)
  .addLoader(scssLoader)
  .addLoader(scssModuleLoader)
  .addLoader(images)
  .addLoader(fonts)
  .addLoader(svg)
  .addPlugin(miniCssExtractPlugin)
  .addPlugin(htmlWebpackPlugin)
  .addPlugin(spriteLoadersPlugin)
  .build();

module.exports = webpackConfig;
