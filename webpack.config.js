const path = require('node:path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV ?? 'development',
  entry: './src/scripts/index.js',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: 'css/main.css',
    }),
  ],
}
