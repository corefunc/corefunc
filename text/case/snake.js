"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseSnake = void 0;
/**
 * @name textCaseSnake
 * @description Converts string into snake-case.
 * @param {string} text
 * @returns {string}
 * @see https://regex101.com/r/QeSm2I/1
 */
function textCaseSnake(text) {
  return text.replace(/(?:([a-z])([A-Z]))|(?:((?!^)[A-Z])([a-z]))/g, "$1_$3$2$4").toLowerCase();
}
exports.textCaseSnake = textCaseSnake;
