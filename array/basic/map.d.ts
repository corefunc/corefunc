/**
 * @description A specialized version of `map` for arrays without support for iteratee shorthands.
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
export declare function arrayBasicMap(array: any[], iteratee: (value?: any, index?: number, original?: any[]) => any): any[];
