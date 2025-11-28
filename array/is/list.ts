/**
 * @category Array Is
 * @name arrayIsList
 * @description
 * Checks whether a given array is a list.
 * An array is considered a list if its keys consist of consecutive numbers from `0` to `array.length-1`.
 * This function works only on non-typed arrays.
 * This function returns `true` on empty arrays.
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
export function arrayIsList<T>(arraySupposedToBeList: Array<T>): boolean {
  if (!Array.isArray(arraySupposedToBeList)) {
    return false;
  }
  if (arraySupposedToBeList.length === 0) {
    return true;
  }
  const sparseKeys = Object.keys(arraySupposedToBeList);
  if (arraySupposedToBeList.length !== sparseKeys.length) {
    return false;
  }
  for (let index = 0; index <= arraySupposedToBeList.length; index++) {
    if (Number.parseInt(sparseKeys[index]) !== index) {
      sparseKeys.length = 0;
      return false;
    }
    delete sparseKeys[index];
  }
  return true;
}
