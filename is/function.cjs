/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isFunction(value) {
  if (Object.prototype.toString.call(value) !== "[object Function]") {
    return false;
  }
  return !/^class\s/.test(Function.prototype.toString.call(value));
};
