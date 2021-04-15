import { arrayGetUnique } from "../get/unique";

/**
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} alpha
 * @param {Array=} beta
 * @param {Boolean=} [shouldBeUnique=false]
 * @returns {Array}
 */
export function arrayBasicExtend<A extends unknown, B extends unknown, C extends A | B>(
  alpha: A[] = [],
  beta: B[] = [],
  shouldBeUnique: boolean = false,
): C[] {
  const extendedArray: unknown[] = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  if (shouldBeUnique) {
    return arrayGetUnique(extendedArray);
  }
  return extendedArray as C[];
}
