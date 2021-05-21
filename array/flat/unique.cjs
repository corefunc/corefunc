"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayFlatUnique = void 0;
const unique_1 = require("../get/unique.cjs");
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
function arrayFlatUnique(arrayMergeInto, ...arraysToBeAdded) {
  let arrayInto;
  if (Array.isArray(arrayMergeInto)) {
    arrayInto = unique_1.arrayGetUnique(arrayMergeInto, false);
  }
  else if (arrayMergeInto !== undefined) {
    arrayInto = [arrayMergeInto];
  }
  if (arraysToBeAdded.length === 0) {
    return unique_1.arrayGetUnique(arrayInto.flat(), true);
  }
  arraysToBeAdded.forEach((maybeArray) => {
    if (Array.isArray(maybeArray)) {
      arrayInto.push(unique_1.arrayGetUnique(maybeArray, false).flat(Number.MAX_SAFE_INTEGER));
    }
    else {
      arrayInto.push(maybeArray);
    }
  });
  return unique_1.arrayGetUnique(arrayInto.flat(Number.MAX_SAFE_INTEGER), true);
}
exports.arrayFlatUnique = arrayFlatUnique;
