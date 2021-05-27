"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsTraversable = void 0;
const is_iterable_1 = require("./is-iterable");
const is_object_like_1 = require("./is-object-like");
/**
 * @name checkIsTraversable
 * @description  Checks if `value` is traversable
 * @param {*} value The value to check
 * @returns {boolean}
 * @since 0.0.1
 */
function checkIsTraversable(value) {
    return Boolean(Array.isArray(value) || is_object_like_1.checkIsObjectLike(value) || is_iterable_1.checkIsIterable(value));
}
exports.checkIsTraversable = checkIsTraversable;
