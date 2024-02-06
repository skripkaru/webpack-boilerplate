const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]'
  },
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@fonts': path.join(__dirname, 'src/assets/fonts'),
      '@images': path.join(__dirname, 'src/assets/images'),
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
      entry: 'src/views/pages/',
      data: 'src/views/data/main.json',
      js: {
        filename: 'scripts/[name].js'
      },
      css: {
        filename: 'styles/[name].css'
      },
      preprocessor: 'handlebars',
      preprocessorOptions: {
        root: path.resolve(__dirname, 'src/views/'),
        views: [path.resolve(__dirname, 'src/views/partials'), path.resolve(__dirname, 'src/assets/icons')],
        partials: ['src/views/partials'],
        helpers: [path.resolve(__dirname, 'src/views/helpers')]
      }
    })
  ]
}
