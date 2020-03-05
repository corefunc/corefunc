/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isRegExp(value: any): boolean {
  return value instanceof RegExp;
}
