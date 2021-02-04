import { castToString } from "../../cast/to/string";

/**
 * @name textCaseUpper
 * @description Converts string into upper-case. Converts and normalizes the string before conversion.
 * @param {String} text Text to transform
 * @returns {String} Uppercase text
 * @since 0.1.31
 */
export function textCaseUpper(text: string): string {
  return castToString(text).normalize().toUpperCase();
}
