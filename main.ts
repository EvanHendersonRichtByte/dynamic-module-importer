// Debug
const c = console.log;

const fs = require("fs");
const path = require("path");
let files = fs.readdirSync("./modules/");
let filename: string;
let includedFn = [];

const include = (files: string[], includedFn: string[]) => {
  files.forEach((item, index) => {
    filename = item.replace(/\.[^/.]+$/, "");
    if (item.endsWith(".js")) {
      includedFn[index] = filename;
      global[filename] = require(path.join(__dirname, "modules", item));
    }
  });
};

const functionList = () => includedFn;
const fileList = () => files;

module.exports = { include, functionList, fileList };

include(files, includedFn);
c(includedFn);
