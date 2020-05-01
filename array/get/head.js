"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayKeyFirst = require("../key/first.js");
/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {null|*}
 */
function arrayGetHead(array, onFail) {
  if (!Array.isArray(array)) {
    return onFail;
  }
  const first = arrayKeyFirst.default(array);
  if (first === null) {
    return onFail;
  }
  return array[first];
}
exports.default = arrayGetHead;
