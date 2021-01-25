export function isGlobal(value: any): boolean {
  return ["[object global]", "[object Window]"].includes(Object.prototype.toString.call(value));
}
