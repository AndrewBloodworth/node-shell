const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");

const displayPrompt = () => {
  process.stdout.write("\nprompt > ");
};

displayPrompt();
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd(displayPrompt);
  } else if (cmd === "ls") {
    ls(displayPrompt);
  } else if (cmd.includes("cat")) {
    const filename = cmd.split(" ")[1];
    cat(filename, displayPrompt);
  } else {
    process.stdout.write("You typed: " + cmd);
    displayPrompt();
  }
});
