/**
 * @name objectGetKeys
 * @param {Object} object
 * @returns {Array.<string>}
 */
export default function objectGetKeys(object) {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}
