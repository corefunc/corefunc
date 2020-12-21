"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonJsonify = void 0;
const jsonParseSafe = require("../parse/safe.cjs");
const jsonStringifySafe = require("../stringify/safe.cjs");
/**
 * @param {*} value
 * @return {*}
 */
function jsonJsonify(value) {
  return jsonParseSafe.default(jsonStringifySafe.default(value));
}
exports.jsonJsonify = jsonJsonify;
