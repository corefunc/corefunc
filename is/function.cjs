/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isFunction(value) {
  return Object.prototype.toString.call(value) === "[object Function]";
};
