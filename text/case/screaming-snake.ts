import { textCaseSnake } from "./snake";

/**
 * @category Text Case
 * @name textCaseScreamingSnake
 * @description Converts string into screaming snake-case.
 * @param {String} text Text to transform
 * @returns {String}
 * @since 0.3.33
 */
export function textCaseScreamingSnake(text: string): string {
  return textCaseSnake(text).toUpperCase();
}
