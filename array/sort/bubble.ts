/**
 * @name arraySortBubble
 * @param {Array.<number>} array
 * @returns {Array.<number>}
 */
export function arraySortBubble(array: Array<number>): Array<number> {
  const swap = (list: Array<number>, alpha: number, beta: number) =>
    ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
  for (let index = array.length; index > 0; index -= 1) {
    for (let subIndex = 0; subIndex < index - 1; subIndex++) {
      if (array[subIndex] > array[subIndex + 1]) {
        swap(array, subIndex, subIndex + 1);
      }
    }
  }
  return array;
}
