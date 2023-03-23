/**
 * @category RegEx Match
 * @name regexMatch
 * @description Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {RegExp | [string, string] | string} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
export declare function regexMatch(string: string, pattern: RegExp | [string, string] | string, onFail?: boolean): boolean;
