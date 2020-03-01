function merge(array1, array2) {
  const sorted = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      sorted.push(array1.shift());
    } else {
      sorted.push(array2.shift());
    }
  }
  return sorted.concat(array1.slice().concat(array2.slice()));
}

function arraySortMerge(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = arraySortMerge(array.slice(0, mid));
  const right = arraySortMerge(array.slice(mid));
  return merge(left, right);
}

export default arraySortMerge;
