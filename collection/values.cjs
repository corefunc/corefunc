"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionValues = void 0;
/**
 * @param {Array|Map|object|Set|WeakMap|WeakSet} iterable
 * @returns {Array}
 */
function collectionValues(iterable) {
  if (!iterable || Object(iterable) !== iterable) {
    return [];
  }
  if (Array.isArray(iterable)) {
    return iterable;
  }
  if (iterable instanceof Set) {
    return Array.from(iterable.values());
  }
  if (iterable instanceof Map) {
    return Array.from(iterable.values());
  }
  return Object.values(iterable);
}
exports.collectionValues = collectionValues;
