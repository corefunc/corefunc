/**
 * @param {Object} object
 * @returns {boolean}
 */
export default function objectIsEmpty(object) {
  return Object.keys(object).length === 0;
}
