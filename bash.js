const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");
const { curl } = require("./curl");
const { date } = require("./date");

// const done = () => {
// 	process.stdout.write('\nprompt > ');
// };

const done = (output = "") => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

done();
process.stdin.on("data", (data) => {
  const flags = data.toString().trim().split(" ");

  const cmd = flags.shift();
  const prompt = flags.pop();

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
  } else {
    process.stdout.write("You typed: " + cmd);
    done();
  }
});
