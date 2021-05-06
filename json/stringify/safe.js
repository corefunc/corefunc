"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonStringifySafe = void 0;
const json_1 = require("../../convert/error/json");
// eslint-disable-next-line no-unused-vars
function serializer(replacer, cycleReplacerArg = null) {
    const keys = [];
    const stack = [];
    let cycleReplacer = cycleReplacerArg;
    if (cycleReplacer === null) {
        cycleReplacer = function cr(key, value) {
            if (stack[0] === value) {
                return "[Circular ~]";
            }
            return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
        };
    }
    return function (key, value) {
        let result = value;
        if (result instanceof Error) {
            result = json_1.convertErrorToJson(result);
            delete result.stack;
        }
        else if (result instanceof Set) {
            result = Array.from(result);
        }
        else if (result instanceof Map) {
            result = Object.fromEntries(result);
        }
        if (stack.length > 0) {
            // @ts-ignore
            const thisPos = stack.indexOf(this);
            // @ts-ignore
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (stack.indexOf(result) !== -1) {
                // @ts-ignore
                result = cycleReplacer.call(this, key, result);
            }
        }
        else {
            stack.push(result);
        }
        if (replacer && Object.prototype.toString.call(replacer) === "[object Function]") {
            // @ts-ignore
            return replacer.call(this, key, result);
        }
        return result;
    };
}
/**
 * @param {*} value
 * @param {Function=} replacer
 * @param {Number|String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
function jsonStringifySafe(value, 
// eslint-disable-next-line no-unused-vars
replacer, spaces, 
// eslint-disable-next-line no-unused-vars
cycleReplacer) {
    return JSON.stringify(value, serializer(replacer, cycleReplacer), spaces);
}
exports.jsonStringifySafe = jsonStringifySafe;
