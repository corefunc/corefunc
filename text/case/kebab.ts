import { castToString } from "../../cast/to/string";

/**
 * @category Text Case
 * @name textCaseKebab
 * @description Converts string into kebab-case.
 * @param {String} text
 * @returns {String}
 * @see https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
export function textCaseKebab(text: string): string {
  return castToString(text)
    .split("")
    .map((letter, index) => {
      if (letter.toUpperCase() === letter) {
        return `${index !== 0 ? "-" : ""}${letter.toLowerCase()}`;
      } else {
        return letter;
      }
    })
    .join("");
}
