"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsIterable = void 0;
const function_1 = require("../is/function.cjs");
const iteratorSymbol_1 = require("../lang/iteratorSymbol.cjs");
function checkIsIterable(object) {
  return Boolean(object) && function_1.isFunction(object[iteratorSymbol_1.langIteratorSymbol]);
}
exports.checkIsIterable = checkIsIterable;
