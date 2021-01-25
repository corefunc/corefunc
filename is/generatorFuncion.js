"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGeneratorFunction = void 0;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isGeneratorFunction(value) {
    return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}
exports.isGeneratorFunction = isGeneratorFunction;
