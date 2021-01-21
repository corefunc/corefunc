"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliExit = void 0;
/**
 * @param {boolean|number} code
 */
function cliExit(code = 0) {
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
        // @ts-ignore
        process.exit(exitCode);
    }
    catch (error) {
        //
    }
}
exports.cliExit = cliExit;
