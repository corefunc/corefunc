import { castToString } from "../../cast/to/string.mjs";

/**
 * @name textCaseLower
 * @description Converts string into lower-case. Converts and normalizes the string before conversion.
 * @param {String} text Text to transform
 * @returns {String} Lower-case text
 * @since 0.1.31
 */
export function textCaseLower(text) {
  return castToString(text).normalize().toLowerCase();
}
