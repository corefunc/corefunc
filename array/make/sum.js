"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayMakeSum(array) {
    return array.filter((value) => Number.isFinite(value)).reduce((accumulator, value) => accumulator + value);
}
exports.default = arrayMakeSum;
