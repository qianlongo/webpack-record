const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.comon')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const publicPath = 'https://static.meituan.net/bs/xy/fe-creditcard/file/public/'

module.exports = merge(common, {
  devtool: 'source-map',  
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true      
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('prod')
      }
    }),
    new ManifestPlugin({
      publicPath
    })
  ]
})