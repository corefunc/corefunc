"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = void 0;
/**
 * @param {*} value
 * @return {boolean}
 */
function isSet(value) {
    return value instanceof Set;
}
exports.isSet = isSet;
