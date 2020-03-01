module.exports = function arraySortStrings(array) {
  return array.sort((alpha, beta) => alpha.localeCompare(beta));
};
