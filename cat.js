const fs = require("fs");

const cat = function (filename) {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) {
      console.log("no such file or directory");
      //return;
      //throw err
    } else {
      console.log(data);
    }
  });
};

module.exports = {
  cat,
};
