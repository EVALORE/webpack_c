const { loader } = require('mini-css-extract-plugin');

module.exports = {
  jsLoader: {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  tsLoader: {
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: { transpileOnly: true },
    exclude: /node_modules/,
  },
  cssLoader: {
    test: /\.css$/i,
    use: [loader, 'css-loader', 'postcss-loader'],
  },
  scssModuleLoader: {
    test: /\.module\.scss$/,
    sideEffects: true,
    use: [
      loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
      'postcss-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
    exclude: /node_modules/,
  },
  scssLoader: {
    test: /\.scss$/,
    sideEffects: true,
    use: [
      loader,
      'css-loader',
      'postcss-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
    exclude: [/node_modules/, /\.module\.scss$/],
  },
  images: {
    test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
    type: 'asset/resource',
    exclude: /node_modules/,
  },
  fonts: {
    test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
    type: 'asset/inline',
    exclude: /node_modules/,
  },
  svg: {
    test: /\.svg$/i,
    loader: 'svg-sprite-loader',
    exclude: /node_modules/,
  }
};
