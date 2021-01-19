"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySortSelection(array) {
    const swap = (list, alpha, beta) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
    array.forEach((item, index) => {
        let min = index;
        for (let subIndex = index + 1; subIndex < array.length; subIndex++) {
            if (array[subIndex] < array[min]) {
                min = subIndex;
            }
        }
        swap(array, index, min);
    });
    return array;
}
exports.default = arraySortSelection;
