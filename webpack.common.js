const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src'),
      '@fonts': path.join(__dirname, 'src/fonts'),
      '@images': path.join(__dirname, 'src/images'),
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
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: 'src/pages/',
      data: 'src/data/global.json',
      js: {
        filename: 'scripts/[name].js'
      },
      css: {
        filename: 'styles/[name].css'
      },
      preprocessor: 'handlebars',
      preprocessorOptions: {
        root: path.resolve(__dirname, 'src/pages/'),
        views: [path.resolve(__dirname, 'src/partials')],
        partials: ['src/partials'],
        helpers: {
          arraySize: (array) => array.length
        }
      }
    })
  ]
}
