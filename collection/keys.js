"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkIsKeyed = require("../check/isKeyed.js").default;
const checkIsObjectLike = require("../check/isObjectLike.js").default;
/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
function collectionKeys(iterable) {
  if (!iterable) {
    return [];
  }
  if (Array.isArray(iterable) || checkIsKeyed(iterable)) {
    return Array.from(iterable.keys());
  }
  if (checkIsObjectLike(iterable) === false) {
    return [];
  }
  return Object.keys(iterable);
}
exports.default = collectionKeys;
