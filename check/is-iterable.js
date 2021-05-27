"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsIterable = void 0;
const function_1 = require("../is/function");
const iterator_symbol_1 = require("../lang/iterator-symbol");
function checkIsIterable(object) {
    return Boolean(object) && function_1.isFunction(object[iterator_symbol_1.langIteratorSymbol]);
}
exports.checkIsIterable = checkIsIterable;
