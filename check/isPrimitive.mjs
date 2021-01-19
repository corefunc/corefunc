/**
 * @name checkIsPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
export function checkIsPrimitive(value) {
  return Object(value) !== value;
}
