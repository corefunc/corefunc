/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isFunctionAsync(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}
