export function cliClear(): void {
  if ("clear" in console) {
    try {
      // eslint-disable-next-line no-console
      console.clear();
    } catch (err) {
      //
    }
  } else {
    try {
      // @ts-ignore
      process.stdout.write("\u001b[2J\u001b[0;0H");
    } catch (err) {
      //
    }
  }
}
