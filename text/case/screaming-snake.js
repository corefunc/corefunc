"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseScreamingSnake = void 0;
const snake_1 = require("./snake");
/**
 * @name textCaseScreamingSnake
 * @description Converts string into screaming snake-case.
 * @param {String} text Text to transform
 * @returns {String}
 * @since 0.1.31
 */
function textCaseScreamingSnake(text) {
    return snake_1.textCaseSnake(text).toUpperCase();
}
exports.textCaseScreamingSnake = textCaseScreamingSnake;
