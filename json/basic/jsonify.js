"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonJsonify = void 0;
const safe_1 = require("../parse/safe.js");
const safe_2 = require("../stringify/safe.js");
/**
 * @param {*} value
 * @return {*}
 */
function jsonJsonify(value) {
  return safe_1.jsonParseSafe(safe_2.jsonStringifySafe(value));
}
exports.jsonJsonify = jsonJsonify;
