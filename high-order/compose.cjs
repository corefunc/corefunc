"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highOrderCompose = void 0;
/**
 * @description f . g = f(g(x))
 * @param {...function} functions
 * @returns {*|(function(...[*]): *)}
 * @example compose((y) => y + 5, (x) => x * 2) // 2 * 2 + 5 => 9
 */
function highOrderCompose(...functions) {
  return functions.reduce((func, apply) => (...args) => func(apply(...args)));
}
exports.highOrderCompose = highOrderCompose;
