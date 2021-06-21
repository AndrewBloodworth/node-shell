const fs = require("fs");

function ls() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
    }
    console.log("ls ran");
  });
}

module.exports.ls = ls;
