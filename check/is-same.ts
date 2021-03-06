/**
 * Returns true if the values are the same value, false otherwise.
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean}
 */
export function checkIsSame(value1: any, value2: any): boolean {
  return Object.is(value1, value2);
}
