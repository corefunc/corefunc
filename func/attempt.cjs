"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcAttempt = void 0;
const values_1 = require("../collection/values.cjs");
const function_1 = require("../is/function.cjs");
/**
 * @param {Function} callable
 * @param {Array} args
 * @param {Object=} context
 * @param {Boolean=false} catchExceptions
 * @return {*}
 */
function funcAttempt(callable, args = [], context = null, catchExceptions = false) {
  if (function_1.isFunction(callable) === false) {
    return undefined;
  }
  if (catchExceptions) {
    let returnValue;
    try {
      returnValue = callable.apply(context, values_1.collectionValues(args));
    } catch (error) {
      //
    }
    return returnValue;
  }
  return callable.apply(context, values_1.collectionValues(args));
}
exports.funcAttempt = funcAttempt;
