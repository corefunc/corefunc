/**
 * @name textCaseKebab
 * @description Converts string into kebab-case.
 * @param {String} text
 * @returns {String}
 * @see https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
export function textCaseKebab(text: string): string {
  return text
    .split("")
    .map((letter, idx) => (letter.toUpperCase() === letter ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter))
    .join("");
}
