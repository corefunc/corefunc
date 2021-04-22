"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = void 0;
/**
 * @category Is
 * @name isNil
 * @description Checks if `value` is `null` or `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
function isNil(value) {
    return value === undefined || value === null;
}
exports.isNil = isNil;
