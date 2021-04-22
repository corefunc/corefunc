import { castToString } from "../../cast/to/string";

/**
 * @category Text Case
 * @name textCaseLower
 * @description Converts string into lower-case. Converts and normalizes the string before conversion.
 * @param {String} text Text to transform
 * @returns {String} Lower-case text
 * @since 0.1.31
 */
export function textCaseLower(text: string): string {
  return castToString(text).normalize().toLowerCase();
}
