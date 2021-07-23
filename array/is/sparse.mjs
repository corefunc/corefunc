/**
 * @category Array Is
 * @name arrayIsSparse
 * @description Check is array sparse.
 * @param {Array} [array]
 * @returns {boolean}
 * @since 0.3.5
 */
export function arrayIsSparse(array) {
  return array.length > Object.keys(array).length;
}
