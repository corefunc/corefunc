"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexIsDateIso = void 0;
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
function regexIsDateIso(stringWithDate) {
    return /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(stringWithDate);
}
exports.regexIsDateIso = regexIsDateIso;
