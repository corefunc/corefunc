/**
 * Returns true if value is an Promise.
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isPromise(value) {
  return value instanceof Promise;
};
