const SpeedMeasurePlugin = require("speed-measure-extended-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    app: ["./app.js"],
  },
  output: "./public",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
});
