/**
 * @name isArguments
 * @description Determine whether a value is the built-in Arguments object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an Arguments object, otherwise false.
 */
export function isArguments(value) {
    return Object.prototype.toString.call(value) === "[object Arguments]";
}
