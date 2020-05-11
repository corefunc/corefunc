"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction = require("../is/function.js").default;
function checkIsCallable(value) {
  if (!value) {
    return false;
  }
  if (isFunction(value)) {
    return true;
  }
  if ("toFunction" in value && isFunction(value.toFunction) && isFunction(value.toFunction())) {
    return true;
  }
  //
  return false;
}
exports.default = checkIsCallable;
