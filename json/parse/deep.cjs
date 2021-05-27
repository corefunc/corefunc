"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseDeep = void 0;
const isTraversable_1 = require("../../check/is-traversable.cjs");
const forEach_1 = require("../../collection/for-each.cjs");
const safe_1 = require("./safe.cjs");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
function jsonParseDeep(text, defaultResult, reviver) {
  const parsed = safe_1.jsonParseSafe(text, defaultResult, true, true, reviver);
  if (isTraversable_1.checkIsTraversable(parsed)) {
    forEach_1.collectionForEach(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return Object.assign({}, parsed);
}
exports.jsonParseDeep = jsonParseDeep;
