"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varGetOneOfOrElse = void 0;
/**
 * @name oneOfOrElse
 * @description Get on from list or other value
 * @param {Array} list
 * @param {*} value
 * @param {*=} defaultValue
 * @since 0.0.86
 */
function varGetOneOfOrElse(list, value, defaultValue = undefined) {
    return new Set(list).has(value) ? value : defaultValue;
}
exports.varGetOneOfOrElse = varGetOneOfOrElse;
