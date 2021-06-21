const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");
const { curl } = require("./curl");
const { date } = require("./date");
const { echo } = require("./echo");

const done = (output = "") => {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};

done();
process.stdin.on("data", (data) => {
  const inputStringArray = data.toString().trim().split(" ");

  const cmd = inputStringArray.shift();
  const flags = [];
  if (inputStringArray.length) {
    while (inputStringArray[0][0] === "-") {
      flags.push(inputStringArray.shift());
    }
  }
  const prompt = inputStringArray.join(" ");
  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.includes("cat")) {
    cat(prompt, done);
  } else if (cmd.includes("curl")) {
    curl(prompt, done);
  } else if (cmd === "date") {
    date(prompt, flags, done);
  } else if (cmd === "echo") {
    echo(prompt, flags, done);
  } else {
    process.stdout.write("You typed: " + cmd);
    done();
  }
});
