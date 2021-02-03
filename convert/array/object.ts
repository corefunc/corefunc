/**
 * Converts Array to Object
 * @param {Array} array
 * @returns {Object}
 */
export function convertArrayToObject(array: any[]): object {
  return array.reduce((accumulator, currentValue, currentIndex) => ({
    ...accumulator,
    ...{ [currentIndex]: currentValue },
  }));
}
