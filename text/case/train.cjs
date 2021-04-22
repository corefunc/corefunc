"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseTrain = void 0;
const capitalize_1 = require("./capitalize");
const kebab_1 = require("./kebab");
/**
 * @category Text Case
 * @name textCaseTrain
 * @description Converts string into train-case.
 * @param {String} text Text to transform
 * @returns {String} Train-case text
 * @since 0.1.31
 */
function textCaseTrain(text) {
  return kebab_1.textCaseKebab(text).split("-").map(capitalize_1.textCaseCapitalize).join("-");
}
exports.textCaseTrain = textCaseTrain;
