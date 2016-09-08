var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry: path.join(__dirname, './src/index.jsx'),
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: debug ?
  [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:8080/'
      },
      // plugin options
      {
        // Since extract-text-webpack-plugin is used to separate the css
        // we can toggle between true/false here to help with reloading html + css changes
        // webpack hot reloading doesn't work with extracted css/sourcemaps/sass
        reload: false
      }
    ),
    new CopyWebpackPlugin([
      {
        context: path.join(__dirname, '/src/static'),
        from:'**/*',
        to :'static'
      }
    ])
  ] : [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        context: path.join(__dirname, '/src/static'),
        from:'**/*',
        to :'static'
      }
    ])
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
