const path               = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const DefinePlugin        = require('webpack/lib/DefinePlugin');
const ProvidePlugin      = require('webpack/lib/ProvidePlugin');

const ENV  = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const metadata = {
  baseUrl: '/',
  ENV    : ENV,
  host   : HOST,
  port   : PORT
};

module.exports = {
  debug: true,
  devServer: {
    contentBase: 'app',
    historyApiFallback: true,
    host: metadata.host,
    port: metadata.port,
  },
  devtool: 'source-map',
  entry: {
    'main'  : './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  module: {
    loaders: [
      //{test: /\.css$/,   loader: 'style-loader!css-loader'},
      {test: /\.css$/,  loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/,  loader: 'style!css?-minimize', exclude: /src/},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {test: /\.html$/, loader: 'raw'},
      {test: /\.ts$/,   loaders: [
        {loader: 'ts', query: {compilerOptions: {noEmit: false}}},
        {loader: 'angular2-template'}
      ]},
      {test: /\.woff$/,  loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf$/,   loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg$/,   loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.eot$/,   loader: 'file'}

    ]
  },
  output: {
    path    : './',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}]),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.env)}}),
    new ProvidePlugin({
      jQuery: 'jquery',
      jquery: 'jquery',
      $: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether"})
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
