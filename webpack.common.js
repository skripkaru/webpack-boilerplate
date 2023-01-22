const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'))

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./js/main.js', './scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Images: path.resolve(__dirname, 'src/assets/images/'),
      Icons: path.resolve(__dirname, 'src/assets/icons/'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: '[id].[hash].css'
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, `src/pages/${page}`),
          filename: page.replace(/\.pug/, '.html'),
          inject: true,
          minify: false
        })
    ),
    new SVGSpritemapPlugin('./src/assets/icons/*.svg', {
      output: {
        filename: 'sprite.svg'
      },
      sprite: {
        prefix: false,
        generate: {
          title: false
        }
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.pug$/i,
        include: path.resolve(__dirname, 'src'),
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      }
    ]
  }
}
