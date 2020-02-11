export default function arraySortInsertion(array) {
  array.forEach((item, index) => {
    const num = array[index];
    let j;
    for (j = index - 1; j >= 0 && array[j] > num; j -= 1) {
      array[j + 1] = array[j];
    }
    array[j + 1] = num;
  });
  return array;
}
