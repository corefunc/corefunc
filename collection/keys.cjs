const checkIsKeyed = require("../check/isKeyed.cjs");
const checkIsObjectLike = require("../check/isObjectLike.cjs");

/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
module.exports = function collectionKeys(iterable) {
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
};
