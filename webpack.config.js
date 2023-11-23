const path = require('node:path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const nodeEnv = process.env.NODE_ENV ?? 'development'

module.exports = {
  mode: nodeEnv,
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {},
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.njk',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: 'css/main.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/images', to: 'images' }],
    }),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),
  ],
}
