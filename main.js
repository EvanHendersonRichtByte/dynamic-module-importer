// Debug
var c = console.log;
var fs = require("fs");
var path = require("path");
var files = fs.readdirSync("./modules/");
var filename;
var includedFn = [];
var include = function (files, includedFn) {
    files.forEach(function (item, index) {
        filename = item.replace(/\.[^/.]+$/, "");
        if (item.endsWith(".js")) {
            includedFn[index] = filename;
            global[filename] = require(path.join(__dirname, "modules", item));
        }
    });
};
var functionList = function () { return includedFn; };
var fileList = function () { return files; };
module.exports = { include: include, functionList: functionList, fileList: fileList };
include(files, includedFn);
c(includedFn);
