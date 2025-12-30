/**
 * @name arrayKeyLast
 * @param {Array} array
 * @returns {null|*}
 */
export function arrayKeyLast(array) {
    const index = array.findLastIndex((x) => x !== undefined);
    return index >= 0 ? index : null;
}
