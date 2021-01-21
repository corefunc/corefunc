"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliClear = void 0;
function cliClear() {
    if ("clear" in console) {
        try {
            // eslint-disable-next-line no-console
            console.clear();
        }
        catch (err) {
            //
        }
    }
    else {
        try {
            // @ts-ignore
            process.stdout.write("\u001b[2J\u001b[0;0H");
        }
        catch (err) {
            //
        }
    }
}
exports.cliClear = cliClear;
