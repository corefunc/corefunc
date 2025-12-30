/**
 * @name arrayGetUnique
 * @param {Array} array
 * @param {boolean=} sort
 * @returns {Array}
 * @example
 * arrayGetUnique([NaN, NaN, 0, -0, +0, "\u0065\u0301", "\u00e9"]) -> [ NaN, 0, 'é', -0 ]
 */
export declare function arrayGetUnique(array: any[], sort?: boolean): any[];
