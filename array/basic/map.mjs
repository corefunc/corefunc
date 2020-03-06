/**
 * @description A specialized version of `map` for arrays without support for iteratee shorthands.
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
export default function arrayBasicMap(array, iteratee) {
  let { length } = array;
  length = length || 0;
  let index = -1;
  const result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
