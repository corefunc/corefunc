/**
 * @name arrayGetDifference
 * @description Create an array of values from the first array not present in the second array.
 * @param {Array} alpha The array to inspect.
 * @param {Array} beta The values to exclude.
 * @returns {Array} The new array of filtered values.
 */
export function arrayGetDifference(alpha: any[], beta: any[]): any[] {
  const set = new Set(beta);
  return alpha.filter((value) => !set.has(value));
}
