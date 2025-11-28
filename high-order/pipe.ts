/**
 * @description f . g = g(f(x))
 * @param {function} fn
 * @param {...function} restFns
 * @returns {(function(...[*]): *)|*}
 * @example a
 */
export function highOrderPipe<A extends unknown[], R>(
  fn: (...args: A) => R,
  ...restFns: Array<(arg: unknown) => unknown>
): (...args: A) => unknown {
  if (restFns.length === 0) {
    return fn;
  }
  return (...args: A) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args) as unknown);
}
