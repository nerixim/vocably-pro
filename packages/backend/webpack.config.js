const path = require('path');
const getModules = require('./webpack/getModules.js');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { getEnvironmentVariables } = require('@vocably/webpack');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: getModules('./src/lambdas'),
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [
    new DefinePlugin(getEnvironmentVariables().stringified),
    new CopyPlugin({
      patterns: [{ from: 'google-key.json', to: 'google-key.json' }],
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
};
