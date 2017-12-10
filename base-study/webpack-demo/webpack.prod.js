const merge = require('webpack-merge')
const common = require('./webpack.comon')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',  
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true      
    })
  ]
})