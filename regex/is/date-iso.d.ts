/**
 * @category RegEx Is
 * @name regexIsDateIso
 * @description Checks if a string is an ISO-compliant date.
 * @summary ```import { regexIsDateIso } from '@corefunc/corefunc/regex/is/date-iso';```
 * @param {string} stringWithDate String to check for ISO date.
 * @returns {boolean}
 * @example regexIsDateIso("2134-12-30T12:34:56.789Z") ➜ true
 * @example regexIsDateIso("2134-12-30T12:34:56Z") ➜ true
 * @example regexIsDateIso("2134-12-30T12:34Z") ➜ true
 * @since 0.3.22
 */
export declare function regexIsDateIso(stringWithDate: string): boolean;
