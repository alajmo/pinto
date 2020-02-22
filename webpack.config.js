const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isDev = ENV === 'start';

const config = {
  performance: {
    hints: false,
  },

  mode: 'development',

  devtool: isDev ? 'source-map' : 'source-map',

  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/, /(templates)/],
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
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
        test: /\.(html.txt)$/,
        exclude: [/(node_modules)/],
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },

      {
        test: /\.(example.*)$/,
        exclude: [/(node_modules)/],
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false,
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      hash: false,
      filename: 'index.html',
      env: ENV,
    }),

    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
  ],

  devServer: {
    contentBase: 'dist/',
    disableHostCheck: true,
    historyApiFallback: true,
    compress: false,
    clientLogLevel: 'info',
    port: 5000,
    inline: true,
    filename: 'bundle.js',
    publicPath: '/',
    watchOptions: {
      aggregateTimeout: 0,
      poll: 500,
    },
    stats: { colors: true },
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};

module.exports = config;
