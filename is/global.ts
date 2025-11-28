/**
 * @name isGlobal
 * @description Determine whether a value is the global object (globalThis/Window) in the current environment.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is the global object, otherwise false.
 */
export function isGlobal(value: any): boolean {
  return ["[object global]", "[object Window]"].includes(Object.prototype.toString.call(value));
}
