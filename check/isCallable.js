"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("../is/function");
function checkIsCallable(value) {
    if (!value) {
        return false;
    }
    if (function_1.default(value)) {
        return true;
    }
    if ("toFunction" in value && function_1.default(value.toFunction) && function_1.default(value.toFunction())) {
        return true;
    }
    //
    return false;
}
exports.default = checkIsCallable;
