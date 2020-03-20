/**
 * Returns true if the values are the same value, false otherwise.
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean}
 */
module.exports = function checkIsSame(value1, value2) {
  return Object.is(value1, value2);
};
