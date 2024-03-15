const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoadersPlugin = require('svg-sprite-loader/plugin');

const paths = require('./paths');

module.exports = {
  htmlWebpackPlugin: new HtmlWebpackPlugin({ template: `${paths.src}/index.html` }),
  forkTsCheckerWebpackPlugin: new ForkTsCheckerWebpackPlugin(),
  copyWebpackPlugin: new CopyWebpackPlugin({
    patterns: [
      {
        from: paths.public,
        to: 'assets',
        globOptions: { ignore: ['*.DS_Store'] },
        noErrorOnMissing: true,
      },
    ],
  }),
  miniCssExtractPlugin(mode = 'development') {
    return new MiniCssExtractPlugin({
      filename: mode === 'development' ? '[name].css' : '[name].[contenthash:8].css',
    });
  },
  eslintWebpackPlugin: new ESLintWebpackPlugin({
    extensions: ['js', 'ts'],
    fix: true,
    lintDirtyModulesOnly: true,
  }),
  stylelintWebpackPlugin: new StylelintWebpackPlugin({ fix: true, lintDirtyModulesOnly: true }),
  spriteLoadersPlugin: new SpriteLoadersPlugin(),
};
