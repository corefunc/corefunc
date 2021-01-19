import { checkIsPrimitive } from "../check/isPrimitive.mjs";

export function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (checkIsPrimitive(value)) {
    if (typeof value === "string") {
      return !value.length;
    }
    return Boolean(value);
  }
  if (Array.isArray(value)) {
    return Boolean(value.length);
  }
  if (value instanceof Set) {
    return Boolean(value.size);
  }
  if (value instanceof Map) {
    return Boolean(value.size);
  }
  return Boolean(Object.keys(value).length);
}
