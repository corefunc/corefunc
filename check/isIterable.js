"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction = require("../is/function.js").default;
const iteratorSymbol = require("../lang/iteratorSymbol.js").default;
function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
}
exports.default = checkIsIterable;
