/**
 * @category Array Basic
 * @name arrayGetRandom
 * @description Get random value from array.
 * @summary ```import { arrayGetRandom } from "@corefunc/corefunc/array/get/random";```
 * @param {Array} array Array pick from.
 * @returns {*} Array item.
 * @since 0.3.27
 * @example ```arrayGetRandom([2, 11, 37, 42]); ➜  42```
 */
export function arrayGetRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
