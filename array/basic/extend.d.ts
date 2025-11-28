/**
 * @category Array Basic
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} [alpha] First array.
 * @param {Array=} [beta] Second array.
 * @param {Boolean=} [shouldBeUnique=false] Is resulting array should have unique values.
 * @returns {Array} Resulting array.
 */
export declare function arrayBasicExtend<AlphaTypes, BetaTypes, ResultingTypes extends AlphaTypes | BetaTypes>(alpha?: AlphaTypes[] | ReadonlyArray<AlphaTypes>, beta?: BetaTypes[] | ReadonlyArray<BetaTypes>, shouldBeUnique?: boolean): ResultingTypes[];
