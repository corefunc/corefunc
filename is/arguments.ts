export function isArguments(value): boolean {
  return Object.prototype.toString.call(value) === "[object Arguments]";
}
