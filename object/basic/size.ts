/**
 * @param {Object} object
 * @returns {number}
 */
export default function objectBaseSize(object: object): number {
  return Object.keys(object).length;
}
