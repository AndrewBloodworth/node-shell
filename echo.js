function echo(prompt, flags, done) {
  //preCommand is used to configure the output
  //By default, output has a newline character
  const preCommand = {
    output: prompt + "\n",
  };

  //Get all flag objects
  //Pass preCommand into each execute method
  getFlagFunctions(flags).forEach((flag) => flag.execute(preCommand));

  //Return the configured output
  done(preCommand.output);
}

function getFlagFunctions(flags) {
  //Return a new array of flag objects
  return flags.map((flag) => getFlag(flag));
}

function getFlag(flag) {
  //Find and return the appropriate flag object
  switch (flag) {
    case "-n":
      return {
        name: flag,
        execute(preCommand) {
          //Remove trailing newline character '\n'
          preCommand.output = preCommand.output.replace(/\r?\n|\r/, "");
        },
      };
    case "-e":
      return {
        name: flag,
        execute() {
          console.log(flag);
        },
      };
    default:
      return {
        name: "none",
        execute() {
          console.log(`${flag} is not an option`);
        },
      };
  }
}

module.exports = {
  echo,
};
