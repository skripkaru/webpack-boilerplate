const fs = require('fs')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'))

module.exports = {
  entry: ['./src/scripts/main.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js',
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/i,
        loader: 'handlebars-loader',
        options: {
          inlineRequires: /\/assets\/(:?images|audio|video)\//gi,
          partialDirs: [path.resolve(__dirname, 'src/partials')]
        }
      },
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
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    ...pages.map((page) => {
      const pageName = path.parse(page).name
      return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `src/pages/${pageName}.hbs`),
        filename: `${pageName}.html`,
        inject: 'body',
        minify: false,
        templateParameters: require(`./src/data.json`)
      })
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new SVGSpritemapPlugin('src/assets/icons/*.svg', {
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
      patterns: [path.resolve(__dirname, 'src/assets/favicon.svg')]
    })
  ]
}
