export function varGetType(value) {
  return Object.prototype.toString.call(value).slice(1, -1).split(/[\s]+/u).pop();
}
