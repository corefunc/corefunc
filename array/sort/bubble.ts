/**
 * @name arraySortBubble
 * @param {Array.<T>} array
 * @param {function(T, T):number} [compare]
 * @returns {Array.<T>}
 */
export function arraySortBubble<T>(
  array: Array<T>,
  compare: (alpha: T, beta: T) => number = (alpha: any, beta: any) => (alpha > beta ? 1 : alpha < beta ? -1 : 0),
): Array<T> {
  const swap = (list: Array<T>, alpha: number, beta: number) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
  for (let index = array.length; index > 0; index -= 1) {
    for (let subIndex = 0; subIndex < index - 1; subIndex++) {
      if (compare(array[subIndex], array[subIndex + 1]) > 0) {
        swap(array, subIndex, subIndex + 1);
      }
    }
  }
  return array;
}
