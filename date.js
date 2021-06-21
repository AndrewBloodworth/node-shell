function date(prompt, flags, done) {
  let newDate = new Date();
  done(newDate.toString() + "\n");
}

module.exports = {
  date,
};
