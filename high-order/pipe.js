"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highOrderPipe = void 0;
/**
 * @description f . g = g(f(x))
 * @param {function} fn
 * @param {...function} restFns
 * @returns {(function(...[*]): *)|*}
 * @example a
 */
function highOrderPipe(fn, ...restFns) {
    if (restFns.length === 0) {
        return fn;
    }
    return (...args) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args));
}
exports.highOrderPipe = highOrderPipe;
