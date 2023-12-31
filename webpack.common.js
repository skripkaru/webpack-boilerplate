const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@scripts': path.join(__dirname, 'src/assets/scripts'),
      '@styles': path.join(__dirname, 'src/assets/styles')
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
      entry: 'src/views/pages/',
      data: 'src/data/global.json',
      js: {
        filename: 'assets/scripts/[name].js'
      },
      css: {
        filename: 'assets/styles/[name].css'
      },
      preprocessor: 'handlebars',
      preprocessorOptions: {
        root: path.resolve(__dirname, 'src/views/pages/'),
        views: [path.resolve(__dirname, 'src/views/partials')],
        partials: ['src/views/partials'],
        helpers: {
          arraySize: (array) => array.length
        }
      }
    })
  ]
}
