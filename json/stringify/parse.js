/**
 * @param {*} value
 * @returns {*}
 */
export function jsonStringifyParse(value) {
    return JSON.parse(JSON.stringify(value));
}
