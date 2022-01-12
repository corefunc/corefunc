/**
 * @category RegEx Find
 * @description Executes a search for a match between a regular expression and a specified string.
 * @param {String} text
 * @returns {Array}
 */
export function regexFindNumbers(text: string): number[] {
  return (text.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number);
}
