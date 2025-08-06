export function isArguments(value) {
  return Object.prototype.toString.call(value) === "[object Arguments]";
}
