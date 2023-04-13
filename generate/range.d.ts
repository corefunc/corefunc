/**
 * @category Generate
 * @name generateRange
 * @description Number.range & BigInt.range
 * @summary ```import { generateRange } from "@corefunc/corefunc/generate/range";```
 * @param {number|bigint|=0} from - Number from
 * @param {number|bigint|=undefined} to - Number to
 * @param {number|bigint|undefined|=1} step - Number step
 * @param {"number"|"bigint"|="number"} type - Number type
 * @returns {Array.<bigint|number>}
 */
export declare function generateRange(from?: number | BigInt, to?: number | BigInt, step?: number | BigInt, type?: "number" | "bigint"): any[];
