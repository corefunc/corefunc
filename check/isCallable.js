"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsCallable = void 0;
const function_1 = require("../is/function.js");
function checkIsCallable(value) {
  if (!value) {
    return false;
  }
  if (function_1.isFunction(value)) {
    return true;
  }
  if ("toFunction" in value && function_1.isFunction(value.toFunction) && function_1.isFunction(value.toFunction())) {
    return true;
  }
  //
  return false;
}
exports.checkIsCallable = checkIsCallable;
