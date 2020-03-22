/**
 * @param {Object} object
 * @returns {number}
 */
module.exports = function objectBaseSize(object) {
  return Object.keys(object).length;
};
