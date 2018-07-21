// inside webpack.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'index.bundle.js'
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './templates',
    port: 3000
  },  
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}  
    ]   
  }
}