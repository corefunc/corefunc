/**
 * @category Object Set
 * @name objectSetDeep
 * @description Set object values.
 * @summary ```import { objectSetDeep } from "@corefunc/corefunc/object/set/deep";```
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 * @since 0.3.56
 */
export declare function objectSetDeep<Target extends Record<string, any>, Source extends Record<string, any>>(target: Target, source: Source): Target & Source;
