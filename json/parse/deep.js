"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseDeep = void 0;
const isTraversable_1 = require("../../check/isTraversable.js");
const forEach_1 = require("../../collection/forEach.js");
const safe_1 = require("./safe.js");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
function jsonParseDeep(text, defaultResult, reviver) {
  const parsed = safe_1.jsonParseSafe(text, defaultResult, true, true, reviver);
  if (isTraversable_1.default(parsed)) {
    forEach_1.default(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return Object.assign({}, parsed);
}
exports.jsonParseDeep = jsonParseDeep;
