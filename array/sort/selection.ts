export function arraySortSelection(array: number[]): number[] {
  const swap = (list, alpha, beta) => ([list[alpha], list[beta]] = [list[beta], list[alpha]]);
  array.forEach((item, index) => {
    let min = index;
    for (let subIndex = index + 1; subIndex < array.length; subIndex++) {
      if (array[subIndex] < array[min]) {
        min = subIndex;
      }
    }
    swap(array, index, min);
  });
  return array;
}
