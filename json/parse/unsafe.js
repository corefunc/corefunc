"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseUnsafe = void 0;
const string_1 = require("../../cast/to/string");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @return {*}
 */
function jsonParseUnsafe(text, defaultResult) {
    let result = defaultResult;
    try {
        result = eval(`(${string_1.castToString(text)}`);
    }
    catch (exceptionOnEval) {
        //
    }
    return result;
}
exports.jsonParseUnsafe = jsonParseUnsafe;
