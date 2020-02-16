/**
 * @description f . g = f(g(x))
 * @param {...function} fns
 * @returns {*|(function(...[*]): *)}
 * @example compose((y) => y + 5, (x) => x * 2) // 2 * 2 + 5 => 9
 */
module.exports = function highOrderCompose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
};
