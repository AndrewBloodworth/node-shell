function date(prompt, flags, done) {
  let newDate = new Date();
  done(newDate.toString());
}

module.exports = {
  date,
};
