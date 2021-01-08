/**
 * @param {String} text
 * @return {String}
 */
export function jsonParseStringify(text: string): string {
  return JSON.stringify(JSON.parse(text));
}
