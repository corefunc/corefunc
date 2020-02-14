function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

module.exports = function arraySortQuick(items, left, right) {
  let index;
  if (items.length > 1) {
    left = typeof left !== "number" ? 0 : left;
    right = typeof right !== "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      arraySortQuick(items, left, index - 1);
    }
    if (index < right) {
      arraySortQuick(items, index, right);
    }
  }
  return items;
};
