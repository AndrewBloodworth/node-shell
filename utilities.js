const done = (output = "") => {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};

const getInputs = (data) => {
  const inputStringArray = data.toString().trim().split(" ");
  const cmd = inputStringArray.shift();
  const flags = [];
  if (inputStringArray.length) {
    while (inputStringArray[0][0] === "-") {
      flags.push(inputStringArray.shift());
    }
  }
  const prompt = inputStringArray.join(" ");

  return {
    cmd,
    flags,
    prompt,
  };
};

module.exports = {
  done,
  getInputs,
};
