export function arraySortInsertion(array: number[]): number[] {
  array.forEach((item, index) => {
    const num = array[index];
    let subIndex;
    for (subIndex = index - 1; subIndex >= 0 && array[subIndex] > num; subIndex -= 1) {
      array[subIndex + 1] = array[subIndex];
    }
    array[subIndex + 1] = num;
  });
  return array;
}
