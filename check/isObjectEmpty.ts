/**
 * @param {Object} object
 * @returns {boolean}
 */
export default function isObjectEmpty(object: Object): boolean {
  return Object.keys(object).length === 0;
}
