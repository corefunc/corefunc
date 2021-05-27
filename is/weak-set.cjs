"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeakSet = void 0;
/**
 * @param {*} value
 * @return {boolean}
 */
function isWeakSet(value) {
  return value instanceof WeakSet;
}
exports.isWeakSet = isWeakSet;
