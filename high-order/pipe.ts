/**
 * @description f . g = g(f(x))
 * @param {function} fn
 * @param {...function} restFns
 * @returns {(function(...[*]): *)|*}
 * @example a
 */
export function highOrderPipe(fn: Function, ...restFns: Function[]): any {
  if (restFns.length === 0) {
    return fn;
  }
  return (...args) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args));
}
