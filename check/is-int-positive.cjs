"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntPositive = void 0;
/**
 * @category Check Type
 * @name isIntPositive
 * @description Is positive integer.
 * @summary ```import { isIntPositive } from "@corefunc/corefunc/check/is-int-positive";```
 * @param {*} value - Number to check.
 * @returns {boolean} - Is positive integer.
 * @since 0.3.41
 */
function isIntPositive(value) {
  return Number.isInteger(value) && value > 0;
}
exports.isIntPositive = isIntPositive;
