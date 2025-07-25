const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * This file configures webpack to generate a client-side bundle of your application.
 *
 * The output webpack generates with this configuration should be imported by your index.html file.
 */
module.exports = {
  mode: "production",
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
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pcss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true, // Enable CSS modules for .pcss files
                localIdentName: "[hash:base64:8]", // Minified class names
              },
            },
          },
          "postcss-loader", // Compiles PostCSS to CSS
        ],
      },
    ],
  },
  externalsType: "module",
  externals: {
    // The "@applura/client" package identifier is defined by the import map in index.html. It is not published on NPM.
    // See https://github.com/Applura/client#browser-only-import.
    "@applura/client": "@applura/client",
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ],
};
