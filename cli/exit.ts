/**
 * Terminate the current process with an exit code.
 * @param {boolean|number} [code=0] The exit code. If false, the function returns without exiting. If true, the exit code is 0.
 * @returns {void}
 * @example
 * ```ts
 * cliExit(0);
 * ```
 */
export function cliExit(code: boolean | number = 0): void {
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
  if (typeof process === "undefined" || typeof process.exit !== "function") {
    return;
  }
  try {
    process.exit(exitCode);
  } catch {
    // intentionally ignore exceptions
  }
}
