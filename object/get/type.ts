/**
 * @category Object Get
 * @name objectGetType
 * @description Get type of object
 * @param {*=} value
 * @returns {String}
 */
export function objectGetType(value: Record<string, unknown>): string {
  const type = Object.prototype.toString.call(value).toLowerCase().split("[object ").pop().split("]").shift();
  if (["global", "window"].includes(type)) {
    return "object";
  }
  if (type.includes("error")) {
    return "error";
  }
  return type;
}
