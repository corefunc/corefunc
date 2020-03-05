export default function prototypeName(value: any): string {
  return Object.prototype.toString.call(value);
}
