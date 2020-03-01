function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let indexLeft = left;
  let indexRight = right;
  while (indexLeft <= indexRight) {
    while (items[indexLeft] < pivot) {
      indexLeft++;
    }
    while (items[indexRight] > pivot) {
      indexRight--;
    }
    if (indexLeft <= indexRight) {
      swap(items, indexLeft, indexRight);
      indexLeft++;
      indexRight--;
    }
  }
  return indexLeft;
}

export default function arraySortQuick(items, left, right) {
  let index;
  if (items.length > 1) {
    // eslint-disable-next-line no-ternary
    const lefty = typeof left !== "number" ? 0 : left;
    // eslint-disable-next-line no-ternary
    const rightly = typeof right !== "number" ? items.length - 1 : right;
    index = partition(items, lefty, rightly);
    if (lefty < index - 1) {
      arraySortQuick(items, lefty, index - 1);
    }
    if (index < rightly) {
      arraySortQuick(items, index, rightly);
    }
  }
  return items;
}
