/**
 * @param {*} value
 * @return {*}
 */
export default function jsonStringifyParse(value) {
  return JSON.parse(JSON.stringify(value));
}
