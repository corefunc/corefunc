/**
 * @category Object Get
 * @name objectGetKeys
 * @param {Object} object
 * @returns {Array.<String>}
 */
export function objectGetKeys(object) {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}
