/**
 * @name langSpaceship
 * @description Combined comparison for JavaScript <=>
 * A <=> B :=
 * if A < B then return -1
 * if A = B then return  0
 * if A > B then return  1
 * @param {*} valueOne
 * @param {*} valueTwo
 * @returns {Number}
 */
export function langSpaceship(valueOne: any, valueTwo: any): number {
  if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) {
    return 0;
  } else if (valueOne === null || valueTwo === null || typeof valueOne !== typeof valueTwo) {
    if (valueOne > valueTwo) {
      return 1;
    } else if (valueOne < valueTwo) {
      return -1;
    }
    return 0;
  } else if (typeof valueOne === "string") {
    return valueOne.localeCompare(valueTwo);
  }
  if (valueOne > valueTwo) {
    return 1;
  } else if (valueOne < valueTwo) {
    return -1;
  }
  return 0;
}
