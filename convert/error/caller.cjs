"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorToCaller = void 0;
/**
 * @category Convert Error
 * @name errorToCaller
 * @description Converts Error type to caller name.
 * @summary ```import { errorToCaller } from "@corefunc/corefunc/convert/error/caller";```
 * @param {Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError} error
 * @returns {string} - Function, class and method name. Or 'Module._compile' and 'ModuleJob.run' if root.
 * @since 0.3.44
 */
function errorToCaller(error) {
    let [lead, tail] = error.stack.split("\n");
    tail = tail.trim();
    if (tail.startsWith('at Object.<anonymous>')) {
        return lead.trim().split(' ')[1];
    }
    else {
        return tail.split(' ')[1];
    }
}
exports.errorToCaller = errorToCaller;
