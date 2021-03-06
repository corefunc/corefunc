import { castToString } from "../../cast/to/string.mjs";

/**
 * @category Text Case
 * @name textCaseCapitalize
 * @description Capitalize first letter
 * @summary ```import { textCaseCapitalize } from "@corefunc/corefunc/text/case/capitalize";```
 * @param {String} [text] Text to transform
 * @returns {String} Capitalized first letter
 * @since 0.1.31
 */
export function textCaseCapitalize(text) {
  const string = castToString(text).normalize();
  return string.charAt(0).toUpperCase() + string.slice(1);
}
