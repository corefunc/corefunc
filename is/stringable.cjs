"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringable = void 0;
const is_primitive_1 = require("../check/is-primitive");
const function_1 = require("./function.cjs");
const string_1 = require("./string.cjs");
/**
 * @category Is
 * @name isStringable
 * @description Checks if a given value can be converted to string.
 * @summary ```import { isStringable } from "@corefunc/corefunc/is/stringable";```
 * @param {*} [value] Any value.
 * @param {boolean=} [isStrictCheck=false]
 * @returns {Boolean}
 * @since 0.3.54
 */
function isStringable(value, isStrictCheck = false) {
  if (typeof value === "string" || value instanceof String) {
    return true;
  }
  if (is_primitive_1.checkIsPrimitive(value)) {
    return false;
  }
  if ("toString" in value && function_1.isFunction(value.toString) && string_1.isString(value.toString())) {
    return true;
  }
  return !isStrictCheck;
}
exports.isStringable = isStringable;
