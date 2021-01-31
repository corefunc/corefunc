/**
 * @name arrayBasicMerge
 * @description Merge one array into another. Modifies the first array, but less memory consuming.
 * @param {Array} arrayMergeInto The array to which will be added
 * @param {Array} arrayToBeAdded The array to be added
 * @returns {Array}
 * @since 0.1.13
 */
export function arrayBasicMerge<T1, T2>(arrayMergeInto: T1[], arrayToBeAdded: T2[]): Array<T1 | T2> {
  arrayMergeInto.push.apply(arrayMergeInto, arrayToBeAdded);
  return arrayMergeInto;
}
