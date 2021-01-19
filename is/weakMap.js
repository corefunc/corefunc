"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} value
 * @return {boolean}
 */
function isWeakMap(value) {
    return value instanceof WeakMap;
}
exports.default = isWeakMap;
