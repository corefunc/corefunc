/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isFunctionAsync(value) {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}
