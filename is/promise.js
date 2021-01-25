"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = void 0;
/**
 * @name isPromise
 * @description Returns true if value is an Promise.
 * @param {*} value
 * @returns {boolean}
 */
function isPromise(value) {
    return value instanceof Promise;
}
exports.isPromise = isPromise;
