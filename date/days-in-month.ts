/**
 * @category Date
 * @name dateDaysInMonth
 * @description Get days in month.
 * @summary ```import { dateDaysInMonth } from "@corefunc/corefunc/date/days-in-month";```
 * @param {number} month Month.
 * @param {number} year Year.
 * @returns {number} Days in month.
 * @since 0.3.27
 * @example ```dateDaysInMonth(2, 1996); ➜  29```
 */
export function dateDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}
