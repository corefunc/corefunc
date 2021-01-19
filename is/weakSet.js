"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} value
 * @return {boolean}
 */
function isWeakSet(value) {
    return value instanceof WeakSet;
}
exports.default = isWeakSet;
