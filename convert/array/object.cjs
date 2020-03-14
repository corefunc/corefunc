/**
 * Converts Array to Object
 * @param {Array} array
 * @returns {Object}
 */
module.exports = function convertArrayToObject(array) {
  return array.reduce((accumulator, currentValue, currentIndex) => ({
    ...accumulator,
    ...{ [currentIndex]: currentValue },
  }));
};
