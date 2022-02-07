// Debug
var c = console.log;
var fs = require("fs");
var path = require("path");
var filename;
var fileDirectory;
var includedFn = [];
var files;
var importedFiles;
var include = function (files, fileDirectory, includedFn) {
    if (fileDirectory === void 0) { fileDirectory = "./modules/"; }
    files = fs.readdirSync(fileDirectory);
    importedFiles = files;
    files.forEach(function (item, index) {
        filename = item.replace(/\.[^/.]+$/, "");
        if (item.endsWith(".js")) {
            includedFn[index] = filename;
            global[filename] = require(path.join(__dirname, fileDirectory, item));
        }
    });
};
var functionList = function () { return includedFn; };
var fileList = function () { return importedFiles; };
module.exports = { include: include, functionList: functionList, fileList: fileList };
// include(files, "./others/", includedFn);
// c(functionList());
// c(fileList());
