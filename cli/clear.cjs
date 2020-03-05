module.exports = function cliClear() {
  if ("clear" in console) {
    try {
      // eslint-disable-next-line no-console
      console.clear();
    } catch (err) {
      //
    }
  } else {
    try {
      process.stdout.write("\u001b[2J\u001b[0;0H");
    } catch (err) {
      //
    }
  }
};
