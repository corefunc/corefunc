import { textCaseCapitalize } from "./capitalize";
import { textCaseKebab } from "./kebab";

/**
 * @category Text Case
 * @name textCaseTrain
 * @description Converts string into train-case.
 * @param {String} text Text to transform
 * @returns {String} Train-case text
 * @since 0.1.31
 */
export function textCaseTrain(text: string): string {
  return textCaseKebab(text).split("-").map(textCaseCapitalize).join("-");
}
