"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseSnake = void 0;
/**
 * @category Text Case
 * @name textCaseSnake
 * @description Converts string into snake-case.
 * @summary ```import { regexMatch } from '@corefunc/corefunc/text/case/snake';```
 * @param {string} text
 * @returns {string}
 * @see https://regex101.com/r/QeSm2I/1
 * @since 0.3.33
 */
function textCaseSnake(text) {
  return text
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((txt) => txt.toLowerCase())
    .join("_");
}
exports.textCaseSnake = textCaseSnake;
