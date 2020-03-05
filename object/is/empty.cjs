/**
 * @param {Object} object
 * @returns {boolean}
 */
module.exports = function objectIsEmpty(object) {
  return Object.keys(object).length === 0;
};
