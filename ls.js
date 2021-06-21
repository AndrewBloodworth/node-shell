const fs = require("fs");

function ls(prompt, flags, done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err + "\n");
    } else {
      done(files.join("\n") + "\n");
    }
  });
}

module.exports.ls = ls;
