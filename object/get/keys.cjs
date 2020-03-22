/**
 * @name objectGetKeys
 * @param {Object} object
 * @returns {Array.<string>}
 */
module.exports = function objectGetKeys(object) {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
};
