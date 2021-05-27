"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayKnown = void 0;
/**
 * @name isArrayKnown
 * @param {Array} array
 * @returns {boolean}
 * @example
 * const arrayOfStrings = ["A", "B", "C"];
 * const arrayOfNumbers = [1, 2, 3];
 * isArrayKnown<number[]>(arrayOfStrings);
 * // TS2345: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.
 * // Type 'string' is not assignable to type 'number'.
 * isArrayKnown<string[]>(arrayOfStrings);
 * // OK
 * isArrayKnown<number[]>(arrayOfNumbers);
 * // OK
 * isArrayKnown<string[]>(arrayOfNumbers);
 * // TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
 * // Type 'number' is not assignable to type 'string'.
 */
function isArrayKnown(array) {
  return Array.isArray(array);
}
exports.isArrayKnown = isArrayKnown;
