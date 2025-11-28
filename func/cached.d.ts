/**
 * @name functionCached
 * @description Create a cached version of a pure function. Function arguments must be primitives.
 * @param {Function} func
 * @returns {Function}
 */
export declare function functionCached<F extends (..._args: Array<boolean | null | number | string>) => unknown>(func: F): F;
