/**
 * @param {*} value
 * @return {*}
 */
export function jsonStringifyParse(value) {
  return JSON.parse(JSON.stringify(value));
}
