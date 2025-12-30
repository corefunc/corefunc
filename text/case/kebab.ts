import { castToString } from "../../cast/to/string.js";

/**
 * @category Text Case
 * @name textCaseKebab
 * @description
 * Converts string into kebab-case.
 * @example "JSONAPIExample" → "jsonapi-example" (inserts hyphen before the last uppercase letter when followed by lowercase)
 * @param {String} text
 * @returns {String}
 * @see https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
export function textCaseKebab(text: string): string {
  const str = castToString(text);
  return str
    .split("")
    .map((letter, index) => {
      const isUpper = letter.toUpperCase() === letter && letter.toLowerCase() !== letter;
      if (isUpper) {
        const prevChar = str[index - 1];
        const nextChar = str[index + 1];
        const isPrevLower = prevChar && prevChar.toLowerCase() === prevChar && prevChar.toUpperCase() !== prevChar;
        const isNextLower = nextChar && nextChar.toLowerCase() === nextChar && nextChar.toUpperCase() !== nextChar;

        // Add hyphen if: previous char is lowercase OR (this is uppercase and next is lowercase, but not at start)
        if (index !== 0 && (isPrevLower || isNextLower)) {
          return `-${letter.toLowerCase()}`;
        }
        return letter.toLowerCase();
      }
      return letter;
    })
    .join("");
}
