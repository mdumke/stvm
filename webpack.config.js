const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app/index.js',

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),

    new ExtractTextPlugin({
      filename: 'styles.[chunkhash].css'
    })
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  }
}
