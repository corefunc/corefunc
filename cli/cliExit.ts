export default function cliExit(code: boolean | number = 0) {
  if (code === false) {
    return;
  }
  let exitCode = 0;
  if (code !== true) {
    exitCode = Number.parseInt(code.toString());
  }
  if (!Number.isInteger(exitCode)) {
    return;
  }
  if (exitCode < 0) {
    return;
  }
  try {
    process.exit(exitCode);
  } catch (error) {
    //
  }
}
