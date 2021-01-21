"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
/**
 * @param {...Function} fns
 */
function compose(...fns) {
  return fns.reduce((prevFn, currFn) => (...args) => prevFn(currFn(...args)));
}
exports.compose = compose;
