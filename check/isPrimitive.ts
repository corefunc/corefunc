/**
 * @name isPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
export default function isPrimitive(value: any): boolean {
  return Object(value) !== value;
}
