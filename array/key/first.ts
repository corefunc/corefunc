/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|*}
 */
export function arrayKeyFirst<T>(array: T[]): null | number {
  if (array.length) {
    return array.keys()[0];
  }
  return null;
}
