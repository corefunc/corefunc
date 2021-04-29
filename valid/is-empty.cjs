"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isPrimitive_1 = require("../check/isPrimitive.cjs");
const string_1 = require("../is/string.cjs");
/**
 * @category Is Valid
 * @name isEmpty
 * @description Checks wherever object is empty
 * @summary ```import { isEmpty } from "@corefunc/corefunc/valid/is-empty";```
 * @param {*} [value] Any value.
 * @returns {Boolean}
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (isPrimitive_1.checkIsPrimitive(value)) {
    if (string_1.isString(value)) {
      return Boolean(value.length);
    }
    return Boolean(value);
  }
  if (Array.isArray(value)) {
    return Boolean(value.length);
  }
  if (value instanceof Set) {
    return Boolean(value.size);
  }
  if (value instanceof Map) {
    return Boolean(value.size);
  }
  return Boolean(Object.keys(value).length);
}
exports.isEmpty = isEmpty;
