function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right, compare) {
    const pivot = items[Math.floor((right + left) / 2)];
    let indexLeft = left;
    let indexRight = right;
    while (indexLeft <= indexRight) {
        while (compare(items[indexLeft], pivot) < 0) {
            indexLeft++;
        }
        while (compare(items[indexRight], pivot) > 0) {
            indexRight--;
        }
        if (indexLeft <= indexRight) {
            swap(items, indexLeft, indexRight);
            indexLeft++;
            indexRight--;
        }
    }
    return indexLeft;
}
/**
 * @name arraySortQuick
 * @description Sort an array using the quick sort algorithm (in place).
 * @param {Array.<T>} items Array of items to sort.
 * @param {number} [left=0] Left index boundary.
 * @param {number} [right=items.length - 1] Right index boundary.
 * @param {function(T, T):number} [compare]
 * @returns {Array.<T>} The sorted array.
 */
export function arraySortQuick(items, left = 0, right = items.length - 1, compare = (alpha, beta) => (alpha > beta ? 1 : alpha < beta ? -1 : 0)) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right, compare);
        if (left < index - 1) {
            arraySortQuick(items, left, index - 1, compare);
        }
        if (index < right) {
            arraySortQuick(items, index, right, compare);
        }
    }
    return items;
}
