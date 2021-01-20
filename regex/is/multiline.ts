/**
 * @name regexIsMultiline
 * @description Checks if a line has line breaks
 * @param {String} text Text to check for line breaks
 * @returns {Boolean}
 * @example regexIsMultiline("📕📗\n📘📖") ➜ true
 * @since 0.0.98
 */
export function regexIsMultiline(text: string): boolean {
  if (typeof text !== "string") {
    return false;
  }
  return /\r?\n|\r/g.test(text);
}
