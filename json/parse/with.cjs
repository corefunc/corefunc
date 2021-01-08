"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseWith = void 0;
const safe_1 = require("./safe.cjs");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @return {*}
 */
function jsonParseWith(text, defaultResult, unsafe = true, reviver) {
  return safe_1.jsonParseSafe(text, defaultResult, unsafe, false, reviver);
}
exports.jsonParseWith = jsonParseWith;
