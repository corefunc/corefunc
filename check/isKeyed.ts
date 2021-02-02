/**
 * @param {*} value
 * @return {boolean}
 */
export function checkIsKeyed(value: any): boolean {
  return value instanceof Set || value instanceof Map;
}
