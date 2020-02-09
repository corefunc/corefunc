export default function arraySum(array: number[]): number {
  return array.reduce((accumulator, value) => accumulator + value);
}
