'uses strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
      //filename: 'build/index.html'
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};

module.exports = config;
