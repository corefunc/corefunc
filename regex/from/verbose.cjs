"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexFromVerbose = void 0;
/**
 * @name regexFromVerbose
 * @param {TemplateStringsArray} input
 * @returns {RegExp}
 * @example
 * new RegExp(
 *   regexFromVerbose`
 *     (?<!\\) \s             // Ignore whitespace, but not
 *                            // when escaped with backslash.
 *   | [/][/] .*              // Single-line comment.
 *   | [/][*] [\s\S]* [*][/]  // Multi-line comment.
 *                            // Note: /[\s\S]/ is same as /./s
 *                            // with dot-all flag (s).
 * `,
 *   "g",
 * );
 * const regExp = regexFromVerbose`
 *   (0 | [1-9] [0-9]*)   // Integer part with no leading zeroes
 *   \.                   // Dot
 *   [0-9]*               // Fractional part (optional)
 *   ([eE] [+-]? [0-9]+)? // Exponent part (optional)
 * `;
 */
function regexFromVerbose(input) {
  if (input.raw.length !== 1) {
    throw Error("regexFromVerbose: interpolation is not supported");
  }
  return new RegExp(input.raw[0].replace(/(?<!\\)\s|[/][/].*|[/][*][\s\S]*[*][/]/g, ""));
}
exports.regexFromVerbose = regexFromVerbose;
