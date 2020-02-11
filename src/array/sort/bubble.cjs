module.exports = function arraySortBubble(array) {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);
  for (let i = array.length; i > 0; i -= 1) {
    for (let j = 0; j < i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};
