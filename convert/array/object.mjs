/**
 * Converts Array to Object
 * @param {Array} array
 * @returns {Object}
 */
export default function convertArrayToObject(array) {
  return array.reduce((accumulator, currentValue, currentIndex) => ({
    ...accumulator,
    ...{ [currentIndex]: currentValue },
  }));
}
