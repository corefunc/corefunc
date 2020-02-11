/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isFunction(value): boolean {
  return Object.prototype.toString.call(value) === "[object Function]";
}
