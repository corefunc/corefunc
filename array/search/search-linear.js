"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySearchLinear = void 0;
function arraySearchLinear(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }
    return -1;
}
exports.arraySearchLinear = arraySearchLinear;
