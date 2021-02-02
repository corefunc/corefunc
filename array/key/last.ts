/**
 * @name arrayKeyLast
 * @param {Array} array
 * @returns {null|*}
 */
export function arrayKeyLast<T>(array: T[]): null | number {
  if (array.length) {
    return array.keys()[array.length - 1];
  }
  return null;
}
