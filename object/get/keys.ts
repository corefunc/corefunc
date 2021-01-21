/**
 * @name objectGetKeys
 * @param {Object} object
 * @returns {Array.<string>}
 */
export function objectGetKeys(object: object): string[] {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}
