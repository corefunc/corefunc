/**
 * @name arraySortInsertion
 * @description Sort an array of numbers using the insertion sort algorithm (in place).
 * @param {Array.<number>} array Array of numbers to sort.
 * @returns {Array.<number>} The sorted array.
 */
export function arraySortInsertion(array) {
    array.forEach((_item, index) => {
        const num = array[index];
        let subIndex;
        for (subIndex = index - 1; subIndex >= 0 && array[subIndex] > num; subIndex -= 1) {
            array[subIndex + 1] = array[subIndex];
        }
        array[subIndex + 1] = num;
    });
    return array;
}
