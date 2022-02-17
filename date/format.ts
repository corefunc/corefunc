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
export function dateFormat(
  format: string = "{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}",
  date: Date = new Date(),
  useLocalTime: boolean = true,
): string {
  let iso: string;
  if (useLocalTime) {
    iso = new Date(date.valueOf() - date.getTimezoneOffset() * 60000).toISOString();
  } else {
    iso = date.toISOString();
  }
  const { D, DD, H, HH, M, MM, YY, YYYY, m, mm, s, ss, sss, timezone } = iso.match(
    /^(?<YYYY>\d\d(?<YY>\d\d))-(?<MM>0?(?<M>\d+))-(?<DD>0?(?<D>\d+))T(?<HH>0?(?<H>\d+)):(?<mm>0?(?<m>\d+)):(?<sss>(?<ss>0?(?<s>\d+))\.\d+)(?<timezone>[A-Z][\dA-Z.-:]*)$/,
  ).groups;
  const record = { D, DD, H, HH, M, MM, YY, YYYY, m, mm, s, ss, sss, timezone };
  return format.replace(/{([^{]+)}/g, (_ignore: any, key: string) => ((key = record[key]) === null ? "" : key));
}
