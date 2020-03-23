/**
 * @param {String} text
 * @return {String}
 */
export default function jsonParseStringify(text) {
  return JSON.stringify(JSON.parse(text));
}
