/**
 * @param {*} value
 * @return {boolean}
 */
module.exports = function isWeakSet(value) {
  return value instanceof WeakSet;
};
