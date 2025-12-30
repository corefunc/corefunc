/**
 * @name arraySortSelection
 * @description Sort an array of numbers using the selection sort algorithm (in place).
 * @param {Array.<number>} array Array of numbers to sort.
 * @returns {Array.<number>} The sorted array.
 */
export function arraySortSelection(array) {
    const swap = (list, alpha, beta) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
    array.forEach((_item, index) => {
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
