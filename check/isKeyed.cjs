/**
 * @param {*} value
 * @return {boolean}
 */
export default function checkIsKeyed(value) {
  return value instanceof Set || value instanceof Map;
}
