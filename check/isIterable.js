"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("../is/function");
const iteratorSymbol_1 = require("../lang/iteratorSymbol");
function checkIsIterable(object) {
    return Boolean(object) && function_1.default(object[iteratorSymbol_1.default]);
}
exports.default = checkIsIterable;
