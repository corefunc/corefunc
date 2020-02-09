export default function isNumericKey(value: any): boolean {
  return Number.isInteger(Number.parseInt(value));
}
