import { castToString } from "../../cast/to/string";

/**
 * @name textCaseCapitalize
 * @description Capitalize first letter
 * @param {String} text Text to transform
 * @returns {String} Capitalized first letter
 * @since 0.1.31
 */
export function textCaseCapitalize(text: string): string {
  const string = castToString(text).normalize();
  return string.charAt(0).toUpperCase() + string.slice(1);
}
