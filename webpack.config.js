const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-[hash:3].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env'],
        //   },
        // },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.template.html' }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    })
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, './src/reactcjs/react.dev'),
      reactDom: path.resolve(__dirname, './src/reactcjs/react-dom.dev'),
      reactScheduler: path.resolve(__dirname, './src/reactcjs/scheduler.dev'),
    },
  },
  devServer: {
    contentBase: './dist',
    port: 9001,
  },
}
