import { textCaseCapitalize } from "./capitalize.js";
import { textCaseKebab } from "./kebab.js";
/**
 * @category Text Case
 * @name textCaseTrain
 * @description Converts string into train-case.
 * @param {String} text Text to transform
 * @returns {String} Train-case text
 * @since 0.1.31
 */
export function textCaseTrain(text) {
    return textCaseKebab(text).split("-").map(textCaseCapitalize).join("-");
}
//# sourceMappingURL=train.js.map