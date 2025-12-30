/**
 * @param {*} value
 * @returns {boolean}
 */
export function checkIsKeyed(value) {
    return value instanceof Set || value instanceof Map;
}
