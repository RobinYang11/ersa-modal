
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const yargs = require("yargs");
const argv = yargs.alias('env', 'enviroment').argv


module.exports = {
  // entry: './test/test.js',
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, "dist")
  // },
  mode: argv.env,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  //   port: 3000,
  //   quiet: true, //隐藏打包信息 ，配合友好提示插件
  // },
  module: {
    rules: [
      {
        test: /\.ts?$|\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.jsx?$|\.js?$/,
        loader: [
          "babel-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-robin.[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'ersa.css',
      chunkFilename: '[id].css',
    }),
  ]
}