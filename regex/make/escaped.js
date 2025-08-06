const charsToEscape = /[\\^$.*+?()[\]{}|]/g;
const hasCharsToEscape = RegExp(charsToEscape.source);

/**
 * @category RegEx Make
 * @name regexMakeEscaped
 * @description Escapes `RegExp` special characters
 * @param {string} [text=''] Text to escape
 * @returns {string} Escaped text
 * @since 0.1.12
 */
export function regexMakeEscaped(text) {
  return text && hasCharsToEscape.test(text) ? text.replace(charsToEscape, "\\$&") : text || "";
}
