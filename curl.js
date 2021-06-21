const request = require('request');

function curl(url, displayPrompt) {

request(url, function(err, res, body) {
  if (err) {
    console.log("no such file or website");
  } else {
    console.log(body)
  }

  displayPrompt();
})

}



module.exports = {
  curl
};
