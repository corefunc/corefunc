"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonJsonify = void 0;
const safe_1 = require("../parse/safe.js");
const safe_2 = require("../stringify/safe.js");
/**
 * @name jsonJsonify
 * @description Attempts to convert any value to JSON allowed value
 * @param {*} value Any value
 * @returns {*} Plain value or plain object
 * @since 0.0.87
 * @example ```jsonJsonify({ 1: "one" }) ➜ {"1":"one"}```
 */
function jsonJsonify(value) {
  return safe_1.jsonParseSafe(safe_2.jsonStringifySafe(value));
}
exports.jsonJsonify = jsonJsonify;
