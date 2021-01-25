"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArguments = void 0;
function isArguments(value) {
    return Object.prototype.toString.call(value) === "[object Arguments]";
}
exports.isArguments = isArguments;
