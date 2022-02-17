"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
/**
 * @category Date
 * @name dateFormat
 * @description Format date with simple template string.
 * @summary ```import { dateFormat } from "@corefunc/corefunc/date/format";```
 * @param {Date=} [date=new Date()] Date to format.
 * @param {string=} [format="{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}"] Template string.
 * @param {boolean=} [useLocalTime=true] Use timezone offset or UTC time.
 * @returns {string} Formatted date.
 * @since 0.3.23
 * @example ```dateFormat(new Date(), "{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}", true) ➜ "2020-06-15T12:30:30"```
 */
function dateFormat(date = new Date(), format = "{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}", useLocalTime = true) {
    let iso;
    if (useLocalTime) {
        iso = new Date(date.valueOf() - date.getTimezoneOffset() * 60000).toISOString();
    }
    else {
        iso = date.toISOString();
    }
    const { D, DD, H, HH, M, MM, YY, YYYY, m, mm, s, ss, sss, timezone } = iso.match(/^(?<YYYY>\d\d(?<YY>\d\d))-(?<MM>0?(?<M>\d+))-(?<DD>0?(?<D>\d+))T(?<HH>0?(?<H>\d+)):(?<mm>0?(?<m>\d+)):(?<sss>(?<ss>0?(?<s>\d+))\.\d+)(?<timezone>[A-Z][\dA-Z.-:]*)$/).groups;
    const record = { D, DD, H, HH, M, MM, YY, YYYY, m, mm, s, ss, sss, timezone };
    return format.replace(/{([^{]+)}/g, (_ignore, key) => ((key = record[key]) === null ? "" : key));
}
exports.dateFormat = dateFormat;
