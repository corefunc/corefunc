/**
 * @name arraySortQuick
 * @description Sort an array using the quick sort algorithm (in place).
 * @param {Array.<T>} items Array of items to sort.
 * @param {number} [left=0] Left index boundary.
 * @param {number} [right=items.length - 1] Right index boundary.
 * @param {function(T, T):number} [compare]
 * @returns {Array.<T>} The sorted array.
 */
export declare function arraySortQuick<T>(items: T[], left?: number, right?: number, compare?: (alpha: T, beta: T) => number): T[];
