/**
 * @name arrayBasicHas
 * @description Check whether an array contains a given value starting from an optional index.
 * @param {Array} array The array to search in.
 * @param {*} value The value to search for.
 * @param {Number} [fromIndex=0] The position in the array at which to begin searching.
 * @returns {Boolean} True if the value is found, otherwise false.
 */
export function arrayBasicHas(array, value, fromIndex = 0) {
    return array.includes(value, fromIndex);
}
//# sourceMappingURL=has.js.map