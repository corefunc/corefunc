/**
 * @param {*} value
 * @return {boolean}
 */
export function checkIsKeyed(value) {
  return value instanceof Set || value instanceof Map;
}
