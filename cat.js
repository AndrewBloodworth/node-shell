const fs = require("fs");

const cat = function (filename, displayPrompt) {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) {
      console.log("no such file or directory");
    } else {
      console.log(data);
      displayPrompt();
    }
  });
};

module.exports = {
  cat,
};
