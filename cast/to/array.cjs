const collectionValues = require("../../collection/values.cjs");

/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @return {Array}
 */
module.exports = function castToArray(value) {
  return collectionValues(value);
};
