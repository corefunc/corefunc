/**
 * @name varGetType
 * @description Get the human-readable type name of a value, e.g., "String", "Number", "Object".
 * @param {*} value The value to inspect.
 * @returns {string} The extracted type name.
 */
export function varGetType(value) {
    return Object.prototype.toString.call(value).slice(1, -1).split(/[\s]+/u).pop() ?? "";
}
//# sourceMappingURL=type.js.map