// webpack.config.js

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "bundle.js"
  }
};
