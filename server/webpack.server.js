const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",

  // Tell webpack the root file of the server app
  entry: "./src/index.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // tell webpack not to bundle any libraries that are included in the node_modules folder.
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
