/**
 * Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
function isPrimitive(value) {
  return Object(value) !== value;
}

export default isPrimitive;
