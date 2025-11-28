/**
 * @description f . g = f(g(x))
 * @param {...function} functions
 * @returns {(...args: unknown[]) => unknown}
 * @example compose((y) => y + 5, (x) => x * 2) // 2 * 2 + 5 => 9
 */
export declare function highOrderCompose(...functions: Array<(..._args: unknown[]) => unknown>): (..._args: unknown[]) => unknown;
