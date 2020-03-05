/**
 * Returns true if value is an Promise.
 * @param {*} value
 * @returns {boolean}
 */
export default function isPromise(value) {
  return value instanceof Promise;
}
