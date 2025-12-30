/**
 * @category RegEx Basic
 * @name regexReplace
 * @description Replace all occurrences of the search string with the replacement string
 * @param {String} haystack
 * @param {Array|String} needle
 * @param {Array|String} replaceWith
 * @returns {String}
 * @example regexReplace('target', 'search', 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], ['replace 1', 'replace 2']);
 */
export declare function regexReplace(haystack: string, needle: string, replaceWith: RegExp | RegExp[] | string | string[]): string;
