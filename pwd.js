function pwd(displayPrompt) {
  console.log(__dirname);
  displayPrompt();
}

module.exports.pwd = pwd;
