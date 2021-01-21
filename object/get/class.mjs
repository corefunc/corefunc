/**
 * @name objectGetClass
 * @description Retrieve instance class name
 * @param {*} value
 * @returns {string}
 * @since 1.0.2
 */
export function objectGetClass(value) {
  if (value && typeof value === "object" && "constructor" in value && "name" in value.constructor) {
    return value.constructor.name;
  }
  return "";
}
