"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectId = void 0;
/**
 * @category Is Valid
 * @name isObjectId
 * @description Check is value ObjectId
 * @param {*} value
 * @returns {Boolean}
 * @since 0.0.94
 */
function isObjectId(value) {
    return typeof value === "string" && /^[0-9a-fA-F]{24}$/.test(value);
}
exports.isObjectId = isObjectId;
