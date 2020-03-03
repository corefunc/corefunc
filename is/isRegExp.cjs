/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isRegExp(value) {
  return value instanceof RegExp;
};
