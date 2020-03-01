/**
 * @name arrayKeyLast
 * @param {Array} array
 * @returns {null|*}
 */
export default function arrayKeyLast(array) {
  if (array.length) {
    return array.keys()[array.length - 1];
  }
  return null;
}
