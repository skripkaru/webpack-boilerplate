const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@scripts': path.join(__dirname, 'src/scripts'),
      '@styles': path.join(__dirname, 'src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
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
    new HtmlBundlerPlugin({
      entry: 'src/pages/',
      data: 'src/data.json',
      js: {
        filename: 'scripts/[name].js'
      },
      css: {
        filename: 'styles/[name].css'
      },
      preprocessor: 'handlebars',
      preprocessorOptions: {
        partials: ['src/partials'],
        helpers: {
          arraySize: (array) => array.length
        }
      }
    }),
    new SVGSpritemapPlugin('src/assets/icons/*.svg', {
      output: {
        filename: 'assets/sprite.svg'
      },
      sprite: {
        prefix: false,
        generate: {
          title: false
        }
      }
    })
  ]
}
