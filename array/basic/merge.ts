/**
 * @name arrayBasicMerge
 * @description Merge one array into another. Modifies the first array, but less memory consuming.
 * @param {Array} arrayMergeInto The array to which will be added
 * @param {Array} arrayToBeAdded The array to be added
 * @returns {Array}
 * @since 0.1.13
 */
export function arrayBasicMerge<T>(arrayMergeInto: Array<T>, arrayToBeAdded: Array<T>): Array<T> {
  // eslint-disable-next-line prefer-spread
  arrayMergeInto.push.apply(arrayMergeInto, arrayToBeAdded);
  return arrayMergeInto;
}
