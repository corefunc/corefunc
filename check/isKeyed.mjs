/**
 * @param {*} value
 * @return {boolean}
 */
module.exports = function checkIsKeyed(value) {
  return value instanceof Set || value instanceof Map;
};
