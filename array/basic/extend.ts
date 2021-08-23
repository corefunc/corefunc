import { arrayGetUnique } from "../get/unique";

/**
 * @category Array Basic
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} [alpha] First array.
 * @param {Array=} [beta] Second array.
 * @param {Boolean=} [shouldBeUnique=false] Is resulting array should have unique values.
 * @returns {Array} Resulting array.
 */
export function arrayBasicExtend<
  AlphaTypes extends unknown,
  BetaTypes extends unknown,
  ResultingTypes extends AlphaTypes | BetaTypes,
>(
  alpha: AlphaTypes[] | ReadonlyArray<AlphaTypes> = [],
  beta: BetaTypes[] | ReadonlyArray<BetaTypes> = [],
  shouldBeUnique: boolean = false,
): ResultingTypes[] {
  const extendedArray: unknown[] = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  if (shouldBeUnique) {
    return arrayGetUnique(extendedArray);
  }
  return extendedArray as ResultingTypes[];
}
