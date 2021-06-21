const request = require("request");

function curl(url, flags, done) {
  request(url, function (err, res, body) {
    if (err) {
      done("no such file or website\n");
    } else {
      done(body + "\n");
    }
  });
}

module.exports = {
  curl,
};
