/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isFunction(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Function]";
}
