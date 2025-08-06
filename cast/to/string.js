/**
 * @category Cast To
 * @name castToString
 * @description Cast any value to string.
 * @param {*} value Value to transform
 * @returns {String} Value transformed into string
 * @example
 * ```javascript
 * castToString(undefined) ➜ ""
 * ```
 * ```javascript
 * castToString(-0) ➜ "-0"
 * ```
 */
export function castToString(value) {
  if (value === null || value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  const casted = String(value);
  if (casted === "0" && Object.is(value, -0)) {
    return "-0";
  }
  return casted;
}
