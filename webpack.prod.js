const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false
      }),
      new CssMinimizerPlugin({
        parallel: true
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }]
            ]
          }
        }
      })
    ]
  }
})
