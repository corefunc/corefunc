/**
 * @param {Object} object
 * @returns {number}
 */
export default function objectSize(object: Object): number {
  return Object.keys(object).length;
}
