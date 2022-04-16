const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssEstractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssEstractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssEstractPlugin.loader,
          // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpretar @import, url()
          "sass-loader",
        ],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
    ],
  },
};
