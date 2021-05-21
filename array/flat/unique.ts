import { arrayGetUnique } from "../get/unique";

/**
 * @category Array Flat
 * @name arrayFlatUnique
 * @description Merge arrays. Makes flat. Makes unique.
 * @summary ```import { arrayFlatUnique } from '@corefunc/corefunc/array/flat/unique';```
 * @param {*} [arrayMergeInto] The array to which will be added.
 * @param {...*} [arraysToBeAdded] The arrays to be added.
 * @returns {Array}
 * @since 0.2.3
 */
export function arrayFlatUnique(arrayMergeInto: any, ...arraysToBeAdded: any[]): any[] {
  let arrayInto;
  if (Array.isArray(arrayMergeInto)) {
    arrayInto = arrayGetUnique(arrayMergeInto, false);
  } else if (arrayMergeInto !== undefined) {
    arrayInto = [arrayMergeInto];
  }
  if (arraysToBeAdded.length === 0) {
    return arrayGetUnique(arrayInto.flat(), true);
  }
  arraysToBeAdded.forEach((maybeArray) => {
    if (Array.isArray(maybeArray)) {
      arrayInto.push(arrayGetUnique(maybeArray, false).flat(Number.MAX_SAFE_INTEGER));
    } else {
      arrayInto.push(maybeArray);
    }
  });
  return arrayGetUnique(arrayInto.flat(Number.MAX_SAFE_INTEGER), true);
}
