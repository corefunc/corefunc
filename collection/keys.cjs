"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionKeys = void 0;
const isKeyed_1 = require("../check/is-keyed.cjs");
const isObjectLike_1 = require("../check/is-object-like.cjs");
/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
function collectionKeys(iterable) {
  if (!iterable) {
    return [];
  }
  if (Array.isArray(iterable) || isKeyed_1.checkIsKeyed(iterable)) {
    return Array.from(iterable.keys());
  }
  if (isObjectLike_1.checkIsObjectLike(iterable) === false) {
    return [];
  }
  return Object.keys(iterable);
}
exports.collectionKeys = collectionKeys;
