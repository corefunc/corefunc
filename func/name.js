"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionName = void 0;
/**
 * @name functionName
 * @description Extract function name
 * @param {Function} func
 * @return {string}
 */
function functionName(func) {
    if (func.name) {
        return func.name;
    }
    const result = /^function\s+([\w]+)\s*\(/.exec(func.toString());
    if (result) {
        return result.shift();
    }
    return "";
}
exports.functionName = functionName;
