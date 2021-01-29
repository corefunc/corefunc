const charsToEscape = /[\\^$.*+?()[\]{}|]/g;
const hasCharsToEscape = RegExp(charsToEscape.source);

/**
 * @name regexMakeEscaped
 * @description Escapes `RegExp` special characters
 * @param {string} [text=''] Text to escape
 * @returns {string} Escaped text
 * @since 0.1.12
 */
export function regexMakeEscaped(text: string): string {
  return text && hasCharsToEscape.test(text) ? text.replace(charsToEscape, "\\$&") : text || "";
}
