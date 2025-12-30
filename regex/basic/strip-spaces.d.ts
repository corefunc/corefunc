/**
 * @category RegEx Basic
 * @name regexBasicStripSpaces
 * @description Replace multiple white-spaces in string.
 * @summary ```import { regexBasicStripSpaces } from "@corefunc/corefunc/regex/basic/strip-spaces";```
 * @param {string} text String with white-spaces.
 * @returns {string} String with replaced white-spaces.
 * @since 0.3.27
 * @example Usage:
 * ```ts
 * regexBasicStripSpaces(" too\n   many     \tspaces ") // ➜ "too many spaces"
 * ```
 */
export declare function regexBasicStripSpaces(text: string): string;
