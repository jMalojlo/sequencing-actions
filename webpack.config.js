const HtmlWebPackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const path = require("path");

const circularDeps = new CircularDependencyPlugin({
  onStart({ compilation }) {
    console.log("start detecting webpack modules cycles");
  },
  onDetected({ module: webpackModuleRecord, paths, compilation }) {
    compilation.errors.push(new Error(paths.join(" -> ")));
  },
  onEnd({ compilation }) {
    console.log("end detecting webpack modules cycles");
  }
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "~src": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [htmlPlugin, circularDeps]
};
