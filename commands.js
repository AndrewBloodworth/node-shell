const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");
const { curl } = require("./curl");
const { date } = require("./date");
const { echo } = require("./echo");

const commands = {
  pwd: pwd,
  ls: ls,
  cat: cat,
  curl: curl,
  date: date,
  echo: echo,
};

module.exports = commands;
