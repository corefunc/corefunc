"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayIsList = void 0;
/**
 * @category Array Is
 * @name arrayIsList
 * @description
 * ```markdown
 * Checks whether a given array is a list.
 * An array is considered a list if its keys consist of consecutive numbers from `0` to `array.length-1`.
 * This function works only on non-typed arrays.
 * This function returns `true` on empty arrays.
 * ```
 * @summary
 * ```javascript
 * import { arrayIsList } from "@corefunc/corefunc/array/is/list";
 * ```
 * @param {Array} arraySupposedToBeList - The array being evaluated.
 * @returns {boolean} - Returns `true` if array is a list, `false` otherwise.
 * @since 0.3.17
 * @example
 * ```javascript
 * console.log(arrayIsList([])); // ➜ true
 * ```
 * @example
 * ```javascript
 * console.log(arrayIsList(["🍌", "🍏", "🍇", "🍊"])); // ➜ true
 * ```
 * @example
 * ```javascript
 * console.log(arrayIsList(new Int16Array())); // ➜ false
 * ```
 * @example
 * ```javascript
 * const list = ["🍌", "🍏", "🍇", "🍊"];
 * list[-1] = "🍓";
 * console.log(list); // [ '🍌', '🍏', '🍇', '🍊', '-1': '🍓' ]
 * console.log(list.length); // 4
 * console.log(Object.keys(list)); // [ '0', '1', '2', '3', '-1' ]
 * console.log(arrayIsList(list)); // false
 * ```
 */
function arrayIsList(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length === 0) {
        return true;
    }
    const sparseKeys = Object.keys(array);
    if (array.length !== sparseKeys.length) {
        return false;
    }
    for (let index = 0; index <= array.length; index++) {
        if (Number.parseInt(sparseKeys[index]) !== index) {
            sparseKeys.length = 0;
            return false;
        }
        delete sparseKeys[index];
    }
    return true;
}
exports.arrayIsList = arrayIsList;
