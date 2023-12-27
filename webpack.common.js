const path = require('path')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@scripts': path.join(__dirname, 'src/scripts'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@images': path.join(__dirname, 'src/assets/images')
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
        filename: 'sprite.svg'
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
