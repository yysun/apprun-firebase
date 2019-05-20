const path = require('path');
const public = '../public';
module.exports = {
  entry: {
    'app': './src/main.tsx',
  },
  output: {
    path: path.resolve(__dirname, public),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, public),
    open: true,
  },
  devtool: 'source-map'
}