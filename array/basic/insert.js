/**
 * @name arrayBasicInsert
 * @description Insert an item into a new array at the specified index without mutating the original array.
 * @param {Array} array The source array.
 * @param {Number} index The position at which to insert the item.
 * @param {*} item The item to insert.
 * @returns {Array} A new array with the item inserted.
 */
export function arrayBasicInsert(array, index, item) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}
