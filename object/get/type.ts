/**
 * @category Object Get
 * @name objectGetType
 * @description Get type of object
 * @param {*=} [objectLike]
 * @returns {string}
 */
export function objectGetType(objectLike: Record<string, unknown>): string {
  const type = String(
    (Object.prototype.toString.call(objectLike).toLowerCase().split("[object ").pop() || "").split("]").shift(),
  );
  if (["global", "window"].includes(type)) {
    return "object";
  }
  if (type.includes("error")) {
    return "error";
  }
  return type;
}
