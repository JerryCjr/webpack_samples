const path = require("path");
const rimraf = require("rimraf");
const Config = require("webpack-chain");
const config = new Config();

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

// * remove dist
rimraf.sync("./dist");

// * webpack config
config
  // 入口
  .entry("src/index")
  .add(resolve("src/index.js"))
  .end()
  // 模式
  // .mode(process.env.NODE_ENV)
  .set("mode", process.env.NODE_ENV)
  // 出口
  .output.path(resolve("dist"))
  .filename("[name].bundle.js");

config.resolve.alias // resolve
  .set("@", resolve("common"));

module.exports = config.toConfig();
