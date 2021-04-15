import { arrayGetUnique } from "../get/unique.mjs";

/**
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} alpha
 * @param {Array=} beta
 * @param {Boolean=} [shouldBeUnique=false]
 * @returns {Array}
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
