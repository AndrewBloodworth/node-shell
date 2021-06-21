const fs = require("fs");

function ls(displayPrompt) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
    }
    displayPrompt();
  });
}

module.exports.ls = ls;
