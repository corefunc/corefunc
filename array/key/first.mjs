/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|*}
 */
export default function arrayKeyFirst(array) {
  if (array.length) {
    return array.keys()[0];
  }
  return null;
}
