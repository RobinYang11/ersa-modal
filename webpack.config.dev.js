const htmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');
const path = require('path');
const port = 3000;


module.exports = merge(base, {
  entry: './test/test.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    quiet: true, //隐藏打包信息 ，配合友好提示插件
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`you app running on localhost:${port}`],
        notes: ["notes"]
      },
      onErrors: function (a, b) {

      },
      clearConsole: true,
    }),
    new htmlWebpackPlugin({
      title: "robinUI",
      template: "./test/index.html"
    })
  ]
});