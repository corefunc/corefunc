/**
 * @description f . g = g(f(x))
 * @param {function} fn
 * @param {...function} restFns
 * @returns {(function(...[*]): *)|*}
 * @example a
 */
export declare function highOrderPipe<A extends unknown[], R>(fn: (...args: A) => R, ...restFns: Array<(arg: unknown) => unknown>): (...args: A) => unknown;
