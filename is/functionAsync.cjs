/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isFunctionAsync(value) {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]";
};
