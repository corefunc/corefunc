/**
 * @description f . g = g(f(x))
 * @param {function} fn
 * @param {...function} restFns
 * @returns {(function(...[*]): *)|*}
 * @example a
 */
module.exports = function highOrderPipe(fn, ...restFns) {
  if (restFns.length === 0) {
    return fn;
  }
  return (...args) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args));
};
