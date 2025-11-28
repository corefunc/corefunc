/**
 * @param {*} value
 * @returns {*}
 */
export function jsonStringifyParse(value: any): any {
  return JSON.parse(JSON.stringify(value));
}
