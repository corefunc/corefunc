export function arrayMakeSum(array) {
  return array.filter((value) => Number.isFinite(value)).reduce((accumulator, value) => accumulator + value);
}
