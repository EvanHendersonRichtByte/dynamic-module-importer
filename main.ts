// Debug
const c = console.log;

const fs = require("fs");
const files = fs.readdirSync("./modules/");
const path = require("path");
let filename: any;

files.forEach((item) => {
  filename = item.replace(/\.[^/.]+$/, "");
  if (item.endsWith(".js")) {
    global[filename] = require(path.join(__dirname, "modules", item));
  }
});

// const list = () => {}
