/**
 * @name arrayGetAverage
 * @param {Array.<Number>} array
 * @returns  {Number}
 */
export function arrayGetAverage(array: number[]): number {
  return array.reduce((alpha, beta) => alpha + beta) / array.length;
}
