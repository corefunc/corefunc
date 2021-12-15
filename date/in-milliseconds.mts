/**
 * @category Date
 * @name dateInMilliseconds
 * @description Gets the time value in milliseconds.
 * @param {Date|number|string} date If passed value is a positive integer, it returns the same value.
 * @returns {number|NaN} Number of milliseconds since the Unix Epoch or NaN if fails.
 * @since 0.3.19
 */
export function dateInMilliseconds(date: Date | number | string): number | typeof NaN {
  if (date instanceof Date) {
    return date.getTime();
  }
  if (typeof date === "string") {
    if (date.length === 0) {
      return NaN;
    }
    return new Date(date).getTime() || new Date(Number.parseInt(date)).getTime();
  }
  if (typeof date === "number") {
    if (Number.isFinite(date) && Number.isInteger(date) && date > -1) {
      return date;
    }
    return NaN;
  }
  return NaN;
}
