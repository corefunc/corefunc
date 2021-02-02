"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySearchBinary = void 0;
function arraySearchBinary(array, target) {
    let start = 0;
    let end = array.length;
    let pivot = Math.floor((start + end) / 2);
    for (let index = 0; index < array.length; index++) {
        if (array[pivot] !== target) {
            if (target < array[pivot]) {
                end = pivot;
            }
            else {
                start = pivot;
            }
            pivot = Math.floor((start + end) / 2);
        }
        if (array[pivot] === target) {
            return index;
        }
    }
    return -1;
}
exports.arraySearchBinary = arraySearchBinary;
