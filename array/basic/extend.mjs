import { arrayGetUnique } from "../get/unique.mjs";

/**
 * @category Array Basic
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} [alpha] First array.
 * @param {Array=} [beta] Second array.
 * @param {Boolean=} [shouldBeUnique=false] Is resulting array should have unique values.
 * @returns {Array} Resulting array.
 */
export function arrayBasicExtend(
  alpha = [],
  beta = [],
  shouldBeUnique = false,
) {
  const extendedArray = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  if (shouldBeUnique) {
    return arrayGetUnique(extendedArray);
  }
  return extendedArray;
}
