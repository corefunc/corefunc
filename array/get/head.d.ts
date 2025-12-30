/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {*}
 * @example Usage:
 * ```ts
 * arrayGetHead([,,"🍌","🍏","🍊"]) // ➜ "🍌"
 * ```
 * @template T Type of array
 * @template E Type of default value
 */
export declare function arrayGetHead<T, E>(array: T[], onFail?: E): T | E;
