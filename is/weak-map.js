"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeakMap = void 0;
/**
 * @param {*} value
 * @return {boolean}
 */
function isWeakMap(value) {
    return value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
