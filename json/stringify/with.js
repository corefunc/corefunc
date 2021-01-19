"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonStringifyWith = void 0;
const safe_1 = require("./safe");
/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
function jsonStringifyWith(object, replacer, spaces, cycleReplacer) {
    return safe_1.jsonStringifySafe(object, replacer, spaces, cycleReplacer);
}
exports.jsonStringifyWith = jsonStringifyWith;
