import { textCaseSnake } from "./snake.mjs";

/**
 * @category Text Case
 * @name textCaseScreamingSnake
 * @description Converts string into screaming snake-case.
 * @param {String} text Text to transform
 * @returns {String}
 * @since 0.1.31
 */
export function textCaseScreamingSnake(text) {
  return textCaseSnake(text).toUpperCase();
}
