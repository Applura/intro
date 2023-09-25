const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/render.js',
  output: {
    filename: 'render.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [ {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    }],
  },
  experiments: {
    outputModule: true,
  },
};