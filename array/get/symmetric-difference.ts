/**
 * @name arrayGetSymmetricDifference
 * @description Get array symmetric difference
 * @param {Array} alpha First array
 * @param {Array} beta Second array
 * @returns {Array} Array with difference
 * @since 0.1.35
 */
export function arrayGetSymmetricDifference(alpha: any[], beta: any[]): any[] {
  return alpha.filter((value) => !beta.includes(value)).concat(beta.filter((value) => !alpha.includes(value)));
}
