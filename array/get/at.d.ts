/**
 * @name arrayGetAt
 * @description Get the value at the index of an array. Supports negative index.
 * @param {Array} array
 * @param {Number} index
 * @param {*=} onFail
 * @returns {*}
 * @example arrayGetAt(["🍌", "🍏", "🍇", "🍊"], -2) ➜ "🍇"
 * @since 0.0.96
 */
export declare function arrayGetAt<T, E>(array: Array<T>, index: number, onFail?: E): T | E;
