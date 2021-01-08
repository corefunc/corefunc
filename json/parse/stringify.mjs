/**
 * @param {String} text
 * @return {String}
 */
export function jsonParseStringify(text) {
  return JSON.stringify(JSON.parse(text));
}
