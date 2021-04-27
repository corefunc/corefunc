"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectFromKeysValues = void 0;
/**
 * @category Object From
 * @name objectFromKeysValues
 * @description Create object form array of keys and array of values
 * @param {Array.<String>} keys
 * @param {Array} values
 * @returns {Object}
 */
function objectFromKeysValues(keys, values) {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
exports.objectFromKeysValues = objectFromKeysValues;
