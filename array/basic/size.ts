/**
 * @name arrayBasicSize
 * @description Compute the number of elements in an array-like structure.
 * @param {Array} array The array to measure.
 * @returns {Number} The count of elements.
 */
export function arrayBasicSize(array: ReadonlyArray<unknown>): number {
  return array.reduce((size: number) => size + 1, 0);
}
