const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js'
  },
  devServer: {
    contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('./polyfills/native-adapter'),
      includeSourcemap: false
    }),
    new HtmlWebpackPlugin({
      title: 'HN App | SkateJS'
    }),

  ],
}
