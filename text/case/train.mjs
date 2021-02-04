import { textCaseCapitalize } from "./capitalize.mjs";
import { textCaseKebab } from "./kebab.mjs";

/**
 * @name textCaseTrain
 * @description Converts string into train-case.
 * @param {String} text Text to transform
 * @returns {String} Train-case text
 * @since 0.1.31
 */
export function textCaseTrain(text) {
  return textCaseKebab(text).split("-").map(textCaseCapitalize).join("-");
}
