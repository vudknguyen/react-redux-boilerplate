import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // Optimize order the files that bundles in
    new webpack.DefinePlugin(GLOBALS), // Define variables that appear as variable webpack bundling
    new ExtractTextPlugin('styles.css'), // Extract css into seperate files
    new webpack.optimize.DedupePlugin(), // Eleminate duplicate packages
    new webpack.optimize.UglifyJsPlugin(), // Minify JS
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /\.eot(\?v=\d+\.‰\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },
};
