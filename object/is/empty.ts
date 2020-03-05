/**
 * @param {Object} object
 * @returns {boolean}
 */
export default function objectIsEmpty(object: Object): boolean {
  return Object.keys(object).length === 0;
}
