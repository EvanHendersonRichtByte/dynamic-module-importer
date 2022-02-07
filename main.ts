// Debug
const c = console.log;

const fs = require("fs");
const path = require("path");
let filename: string;
let fileDirectory: string;
let includedFn = [];
let files: string[];
let importedFiles;

const include = (
  files: string[],
  fileDirectory = "./modules/",
  includedFn: string[]
) => {
  files = fs.readdirSync(fileDirectory);
  importedFiles = files;
  files.forEach((item, index) => {
    filename = item.replace(/\.[^/.]+$/, "");
    if (item.endsWith(".js")) {
      includedFn[index] = filename;
      global[filename] = require(path.join(__dirname, fileDirectory, item));
    }
  });
};

const functionList = () => includedFn;
const fileList = () => importedFiles;

module.exports = { include, functionList, fileList };

// include(files, "./others/", includedFn);
// c(functionList());
// c(fileList());
