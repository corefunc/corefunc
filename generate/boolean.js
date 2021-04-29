"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoolean = void 0;
/**
 * @category Generate
 * @name generateBoolean
 * @description Generate random boolean value
 * @returns {Boolean} True or false
 * @since 0.1.32
 */
function generateBoolean() {
    return Math.random() >= 0.5;
}
exports.generateBoolean = generateBoolean;
