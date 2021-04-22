"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNil = void 0;
/**
 * @category Is
 * @name isNotNil
 * @description Checks if `value` is not `null` or not `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
function isNotNil(value) {
    return value !== undefined && value !== null;
}
exports.isNotNil = isNotNil;
