const path = require('path')
const validator = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  const config = validator({
    // context: __dirname,
    entry: './src/js/entry.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
          })
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  })

  return config
}
