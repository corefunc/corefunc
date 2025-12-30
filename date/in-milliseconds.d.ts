/**
 * @category Date
 * @name dateInMilliseconds
 * @description Gets the time value in milliseconds.
 * @param {Date|number|string} date If passed value is a positive integer, it returns the same value.
 * @returns {number|NaN} Number of milliseconds since the Unix Epoch or NaN if fails.
 * @since 0.3.19
 */
export declare function dateInMilliseconds(date: Date | number | string): number | typeof NaN;
