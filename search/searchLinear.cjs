module.exports = function searchLinear(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
};
