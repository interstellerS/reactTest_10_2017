const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "public");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(__dirname, "./app/index.js")]
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: "template.html"
    })
  ],
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          plugins: [
            "transform-runtime",
            "transform-es2015-destructuring",
            "transform-decorators-legacy"
          ],
          presets: ["es2015", "es2017", "stage-2", "stage-0", "react"]
        }
      },
      {
        test: /\.(_css|_scss)$/,
        loaders: ["style", "css", "postcss", "sass"]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          "style",
          "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
          "postcss",
          "sass"
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, "./app"),
    extensions: ["", ".js", ".jsx", ".json"]
  }
};
