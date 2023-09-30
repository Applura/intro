const path = require("path");

/**
 * This file configures webpack to generate a client-side bundle of your application.
 *
 * The output webpack generates with this configuration should be imported by your index.html file.
 */

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    module: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
};
