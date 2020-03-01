/**
 * @name arrayKeyLast
 * @param {Array} array
 * @returns {null|*}
 */
module.exports = function arrayKeyLast(array) {
  if (array.length) {
    return array.keys()[array.length - 1];
  }
  return null;
};
