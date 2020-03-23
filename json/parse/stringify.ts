/**
 * @param {String} text
 * @return {String}
 */
export default function jsonParseStringify(text: string): string {
  return JSON.stringify(JSON.parse(text));
}
