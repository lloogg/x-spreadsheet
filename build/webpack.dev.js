const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  ...common,
  mode: 'development',
  plugins: [
    //  you should know that the HtmlWebpackPlugin by default will generate its own index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'x-spreadsheet',
      chunks: ['demo'],
    }),
  ],
  output: {
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    static: '../dist',
    host: '0.0.0.0',
  },
};
