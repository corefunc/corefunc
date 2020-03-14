/**
 * Converts Array to Object
 * @param {Array} array
 * @returns {Object}
 */
export default function convertArrayToObject(array: any[]): object {
  return array.reduce((accumulator, currentValue, currentIndex) => ({
    ...accumulator,
    ...{ [currentIndex]: currentValue },
  }));
}
