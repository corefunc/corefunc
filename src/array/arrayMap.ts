/**
 * @description A specialized version of `map` for arrays without support for iteratee shorthands.
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
export default function arrayMap(array: any[], iteratee: (value?: any, index?: number, original?: any[]) => {}): any[] {
  const length = array === null ? 0 : array.length;
  let index = -1;
  const result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
