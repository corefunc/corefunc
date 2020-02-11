/**
 * @description Returns a copy of the array with all falsy values removed.
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 * @param {Array} array
 * @returns {Array}
 */
export default function arrayCompact(array: any[]): any[] {
  const length = array.length;
  const result = [];
  let index = -1;
  let resIndex = 0;
  while (++index < length) {
    const value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}
