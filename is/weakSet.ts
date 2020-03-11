/**
 * @param {*} value
 * @return {boolean}
 */
export default function isWeakSet(value: any): boolean {
  return value instanceof WeakSet;
}
