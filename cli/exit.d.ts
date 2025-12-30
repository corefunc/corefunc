/**
 * Terminate the current process with an exit code.
 * @param {boolean|number} [code=0] The exit code. If false, the function returns without exiting. If true, the exit code is 0.
 * @returns {void}
 * @example
 * ```ts
 * cliExit(0);
 * ```
 */
export declare function cliExit(code?: boolean | number): void;
