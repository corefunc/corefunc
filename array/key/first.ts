/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|number}
 * @description
 * The arrayKeyFirst function returns the index of the first defined (non-hole) element in a JavaScript array, or null if the array is empty or contains only holes.
 * @summary
 * [2,3]	0	First defined at index 0
 * [,2,3]	1	First defined at index 1
 * [,,3]	2	First defined at index 2
 * []	null	Empty array
 * [,,]	null	Only holes
 */
export function arrayKeyFirst<T>(array: Array<T>): null | number {
  const index = array.findIndex((x) => x !== undefined);
  return index >= 0 ? index : null;
}
