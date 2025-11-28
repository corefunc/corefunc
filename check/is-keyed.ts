/**
 * @param {*} value
 * @returns {boolean}
 */
export function checkIsKeyed(value: any): boolean {
  return value instanceof Set || value instanceof Map;
}
