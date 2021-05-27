"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsTraversable = void 0;
const isIterable_1 = require("./is-iterable.cjs");
const isObjectLike_1 = require("./is-object-like.cjs");
/**
 * @name checkIsTraversable
 * @description  Checks if `value` is traversable
 * @param {*} value The value to check
 * @returns {boolean}
 * @since 0.0.1
 */
function checkIsTraversable(value) {
  return Boolean(
    Array.isArray(value) || isObjectLike_1.checkIsObjectLike(value) || isIterable_1.checkIsIterable(value),
  );
}
exports.checkIsTraversable = checkIsTraversable;
