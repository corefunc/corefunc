/**
 * @category Text Case
 * @name textCaseTitle
 * @description Converts string into title-case.
 * @param {string} text
 * @returns {string}
 * @see http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
export function textCaseTitle(text: string): string {
  return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
