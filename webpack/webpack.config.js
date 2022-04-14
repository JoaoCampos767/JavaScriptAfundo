const webpack = require("webpack");
const MiniCssEstractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  plugins: [
    new MiniCssEstractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssEstractPlugin.loader,
          // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpretar @import, url()
        ],
      },
    ],
  },
};
