const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");

process.stdout.write("1st prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.includes("cat")) {
    const filename = cmd.split(" ")[1];
    cat(filename);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  console.log("got to line");
  setTimeout(() => {
    process.stdout.write("\n 2ndprompt > ");
  }, 0);
});
