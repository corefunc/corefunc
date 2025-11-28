/**
 * @name isFunctionAsync
 * @description Is Function asynchronous
 * @param {*} value
 * @returns {boolean}
 */
export function isFunctionAsync(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}
