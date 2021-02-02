"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsObjectPlain = void 0;
/**
 * Checks if the value is created by the `Object` constructor.
 */
function checkIsObjectPlain(value) {
    return Boolean(value) && typeof value === "object" && value.constructor === Object && !Array.isArray(value);
}
exports.checkIsObjectPlain = checkIsObjectPlain;
