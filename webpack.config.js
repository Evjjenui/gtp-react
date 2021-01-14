const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, './src'),
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


module.exports = {
  entry: {
    script: './src/js/_script.js'
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    // Generating HTML
    // new HtmlWebpackPlugin(),

    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new HtmlWebpackPugPlugin(),


    new MiniCssExtractPlugin({ filename: 'style.css' }), // Generating CSS
    new CopyWebpackPlugin([
      { from: './src/img', to: 'img' }, // Copy images
      // Copy fonts
      // { from: 'src/fonts', to: 'fonts' },
    ]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
  },

  module: {
    rules: [
      // HTML
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          // Extract to external CSS file
          { loader: MiniCssExtractPlugin.loader },

          // Regular CSS
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: true,
              url: false
            }
          },

          // PostCSS with plugins
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-nested'),
                  require('postcss-simple-vars'),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  })
                ],
                ident: 'postcss',
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },

  // Development server
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 4000,
    writeToDisk: true
  },

  mode: process.env.NODE_ENV || 'development'
}
