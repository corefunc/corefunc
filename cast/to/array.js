"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectionValues = require("../../collection/values.js").default;
/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @returns {Array}
 */
function castToArray(value) {
  return collectionValues(value);
}
exports.default = castToArray;
