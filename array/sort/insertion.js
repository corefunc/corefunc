"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySortInsertion = void 0;
function arraySortInsertion(array) {
    array.forEach((item, index) => {
        const num = array[index];
        let subIndex;
        for (subIndex = index - 1; subIndex >= 0 && array[subIndex] > num; subIndex -= 1) {
            array[subIndex + 1] = array[subIndex];
        }
        array[subIndex + 1] = num;
    });
    return array;
}
exports.arraySortInsertion = arraySortInsertion;
