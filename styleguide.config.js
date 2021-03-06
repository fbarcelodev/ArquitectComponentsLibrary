const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  title: "Architect Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "architect-components-library": path.resolve(__dirname, "src")
  }
};
