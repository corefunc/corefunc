"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGeneratorObject = void 0;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isGeneratorObject(value) {
    return Object.prototype.toString.call(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
