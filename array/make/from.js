"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Typecast variable to array
 * @param {*} iterable
 * @returns {Array}
 */
function arrayMakeFrom(iterable) {
  if (!iterable) {
    return [];
  }
  if (Array.isArray(iterable)) {
    return Array.from(iterable);
  }
  if (typeof iterable !== "object") {
    return [];
  }
  if (["[object global]", "[object Window]"].includes(Object.prototype.toString.call(iterable))) {
    return [];
  }
  if (iterable instanceof Map) {
    return Array.from(iterable).map(([, val]) => val);
  }
  if (iterable instanceof Set) {
    return Array.from(iterable);
  }
  return Object.values(iterable);
}
exports.default = arrayMakeFrom;
