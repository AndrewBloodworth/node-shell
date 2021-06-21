const commands = require("./commands");
const { done, getInputs } = require("./utilities");

done();
process.stdin.on("data", (data) => {
  const { cmd, flags, prompt } = getInputs(data);
  if (commands[cmd]) {
    commands[cmd](prompt, flags, done);
  } else {
    done("You typed: " + cmd);
  }
});
