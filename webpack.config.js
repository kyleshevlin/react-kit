var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'react-kit'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.ejs$/,
      loader: 'ejs-loader'
    }]
  }
}
