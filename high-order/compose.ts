/**
 * @description f . g = f(g(x))
 * @param {...function} functions
 * @returns {*|(function(...[*]): *)}
 * @example compose((y) => y + 5, (x) => x * 2) // 2 * 2 + 5 => 9
 */
export function highOrderCompose(...functions: Function[]): any {
  return functions.reduce((func, apply) => (...args) => func(apply(...args)));
}
