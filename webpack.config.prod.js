
const { merge } = require('webpack-merge');
const path = require('path');

const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  entry: './src/index.js',
  output: {
    filename: 'ersa-modal.js',
    path: path.resolve(__dirname, "lib")
  },
}) 