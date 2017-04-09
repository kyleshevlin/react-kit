const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const config = {
    // context: __dirname,
    entry: './src/js/entry.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
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
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
          })
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap!postcss-loader?sourceMap'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }

  return config
}
