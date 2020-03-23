/**
 * @param {*} value
 * @return {*}
 */
export default function jsonStringifyParse(value: any): any {
  return JSON.parse(JSON.stringify(value));
}
