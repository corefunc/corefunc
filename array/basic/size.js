/**
 * @name arrayBasicSize
 * @description Compute the number of elements in an array-like structure.
 * @param {Array} array The array to measure.
 * @returns {Number} The count of elements.
 */
export function arrayBasicSize(array) {
    return array.reduce((size) => size + 1, 0);
}
//# sourceMappingURL=size.js.map