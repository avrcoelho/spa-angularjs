const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" })
    // new CopyPlugin([
    //   {
    //     from: path.resolve(__dirname, "src", "app", "views"),
    //     to: path.resolve(__dirname, "dist", "views")
    //   },
    //   { from: "other", to: "public" }
    // ])
  ]
};
