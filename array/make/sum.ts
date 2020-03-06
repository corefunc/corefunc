export default function arrayMakeSum(array: any[]): number {
  return array.filter((value) => Number.isFinite(value)).reduce((accumulator, value) => accumulator + value);
}
