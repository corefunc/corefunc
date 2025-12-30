/**
 * @name arrayBasicSize
 * @description Compute the number of elements in an array-like structure.
 * @param {Array} array The array to measure.
 * @returns {Number} The count of elements.
 */
export function arrayBasicSize(array) {
    if (array === null || array === undefined) {
        return 0;
    }
    if (typeof array.length === "number") {
        // Ensure a non-negative integer (>>> 0 casts to uint32)
        return array.length >>> 0;
    }
    return Object.keys(array).filter((key) => {
        const num = Number(key);
        return String(num) === key && num >= 0 && Number.isFinite(num);
    }).length;
}
