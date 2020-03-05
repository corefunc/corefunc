/**
 * Returns true if the values are the same value, false otherwise.
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean}
 */
export default function isSame(value1, value2): boolean {
  return Object.is(value1, value2);
}
