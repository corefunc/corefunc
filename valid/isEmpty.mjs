import checkIsPrimitive from "../check/isPrimitive.mjs";

export default function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (checkIsPrimitive(value)) {
    return true;
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
