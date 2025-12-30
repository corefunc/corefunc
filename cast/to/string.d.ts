/**
 * @category Cast To
 * @name castToString
 * @description Cast any value to string.
 * @param {*} value Value to transform
 * @returns {String} Value transformed into string
 * @example
 * ```js
 * castToString(undefined) ➜ ""
 * ```
 * ```js
 * castToString(-0) ➜ "-0"
 * ```
 */
export declare function castToString(value: unknown): string;
