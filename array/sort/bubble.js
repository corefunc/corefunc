/**
 * @name arraySortBubble
 * @param {Array.<T>} array
 * @param {function(T, T):number} [compare]
 * @returns {Array.<T>}
 */
export function arraySortBubble(array, compare = (alpha, beta) => (alpha > beta ? 1 : alpha < beta ? -1 : 0)) {
    const swap = (list, alpha, beta) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
    for (let index = array.length; index > 0; index -= 1) {
        for (let subIndex = 0; subIndex < index - 1; subIndex++) {
            if (compare(array[subIndex], array[subIndex + 1]) > 0) {
                swap(array, subIndex, subIndex + 1);
            }
        }
    }
    return array;
}
