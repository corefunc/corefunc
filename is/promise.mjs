/**
 * @name isPromise
 * @description Returns true if value is an Promise.
 * @param {*} value
 * @returns {boolean}
 */
export function isPromise(value) {
  return value instanceof Promise;
}
