/**
 * @category Array Is
 * @name arrayIsList
 * @description
 * Checks whether a given array is a list.
 * An array is considered a list if its keys consist of consecutive numbers from `0` to `array.length-1`.
 * This function works only on non-typed arrays.
 * This function returns `true` on empty arrays.
 * @summary
 * ```js
 * import { arrayIsList } from "@corefunc/corefunc/array/is/list";
 * ```
 * @param {Array} arraySupposedToBeList - The array being evaluated.
 * @returns {boolean} - Returns `true` if array is a list, `false` otherwise.
 * @since 0.3.17
 * @example
 * ```js
 * console.log(arrayIsList([])); // ➜ true
 * ```
 * @example
 * ```js
 * console.log(arrayIsList(["🍌", "🍏", "🍇", "🍊"])); // ➜ true
 * ```
 * @example
 * ```js
 * console.log(arrayIsList(new Int16Array())); // ➜ false
 * ```
 * @example
 * ```js
 * const list = ["🍌", "🍏", "🍇", "🍊"];
 * list[-1] = "🍓";
 * console.log(list); // [ '🍌', '🍏', '🍇', '🍊', '-1': '🍓' ]
 * console.log(list.length); // 4
 * console.log(Object.keys(list)); // [ '0', '1', '2', '3', '-1' ]
 * console.log(arrayIsList(list)); // false
 * ```
 */
export declare function arrayIsList<T>(arraySupposedToBeList: Array<T>): boolean;
