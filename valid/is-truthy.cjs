"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTruthy = void 0;
const is_falsy_1 = require("./is-falsy.cjs");
/**
 * @category Is Valid
 * @name isTruthy
 * @description In JavaScript, there are six falsy values:
 * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
 * @summary ```import { isTruthy } from '@corefunc/corefunc/valid/is-truthy';```
 * @param {*} [value] Value to validate.
 * @returns {boolean}
 * @since 0.2.3
 */
function isTruthy(value) {
    return !is_falsy_1.isFalsy(value);
}
exports.isTruthy = isTruthy;
