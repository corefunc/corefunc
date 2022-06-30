/**
 * @category Date
 * @name dateFormat
 * @description Format date with simple template string.
 * @summary ```import { dateFormat } from "@corefunc/corefunc/date/format";```
 * @param {string=} [format="{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}"] Template string.
 * @param {Date=} [date=new Date()] Date to format.
 * @param {boolean=} [useLocalTime=true] Use timezone offset or UTC time.
 * @returns {string} Formatted date.
 * @since 0.3.23
 * @example ```dateFormat("{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}", new Date(), true) ➜ "2020-06-15T12:30:30"```
 */
export declare function dateFormat(format?: string, date?: Date, useLocalTime?: boolean): string;
