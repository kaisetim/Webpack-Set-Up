const path = require("path");

module.exports = {
  entry: "./packages/front/src/index.jsx",
  output: { filename: "app.js", path: path.resolve(__dirname, "./.dist") },
  mode: "none"
};
