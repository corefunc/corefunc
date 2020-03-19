/**
 * @name isPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
module.exports = function isPrimitive(value) {
  return Object(value) !== value;
};
