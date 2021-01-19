"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseSafe = void 0;
const cleanup_1 = require("../basic/cleanup");
const unsafe_1 = require("./unsafe");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Boolean=} fix
 * @param {Function=} reviver
 * @return {*}
 */
function jsonParseSafe(text, defaultResult, unsafe = true, fix = true, reviver) {
    if (!text) {
        return defaultResult;
    }
    if (typeof text === "object") {
        return text;
    }
    let result = defaultResult;
    try {
        result = JSON.parse(text, reviver);
    }
    catch (exceptionOnParse) {
        if (unsafe) {
            try {
                result = unsafe_1.jsonParseUnsafe(text, new Error("JSON unsafe parse failed"));
            }
            catch (exceptionOnEval) {
                if (fix) {
                    result = jsonParseSafe(cleanup_1.jsonCleanup(text), defaultResult, true, false, reviver);
                }
            }
        }
    }
    return result;
}
exports.jsonParseSafe = jsonParseSafe;
