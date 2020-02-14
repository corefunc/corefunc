export default function arraySortSelection(array) {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);
  array.forEach((item, index) => {
    let min = index;
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(array, index, min);
  });
  return array;
}
