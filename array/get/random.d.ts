/**
 * @category Array Basic
 * @name arrayGetRandom
 * @description Get random value from array.
 * @summary ```import { arrayGetRandom } from "@corefunc/corefunc/array/get/random";```
 * @param {Array} array Array pick from.
 * @returns {*} Array item.
 * @since 0.3.27
 * @example Usage:
 * ```ts
 * arrayGetRandom([2, 11, 37, 42]) // ➜ 42
 * ```
 */
export declare function arrayGetRandom<T>(array: T[]): T;
