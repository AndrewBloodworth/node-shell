const request = require("request");

function curl(url, done) {
  request(url, function (err, res, body) {
    if (err) {
      done("no such file or website");
    } else {
      done(body);
    }
  });
}

module.exports = {
  curl,
};
