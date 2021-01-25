"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunctionAsync = void 0;
/**
 * @name isFunctionAsync
 * @description Is Function asynchronous
 * @param {*} value
 * @returns {boolean}
 */
function isFunctionAsync(value) {
    return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}
exports.isFunctionAsync = isFunctionAsync;
