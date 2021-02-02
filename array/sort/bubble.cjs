"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySortBubble = void 0;
/**
 * @name arraySortBubble
 * @param {Array.<number>} array
 * @returns {Array.<number>}
 */
function arraySortBubble(array) {
  const swap = (list, alpha, beta) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
  for (let index = array.length; index > 0; index -= 1) {
    for (let subIndex = 0; subIndex < index - 1; subIndex++) {
      if (array[subIndex] > array[subIndex + 1]) {
        swap(array, subIndex, subIndex + 1);
      }
    }
  }
  return array;
}
exports.arraySortBubble = arraySortBubble;
