/**
 * Checks if the value is created by the `Object` constructor.
 */
export default function isPlainObject(value): boolean {
  return Boolean(value) && typeof value === "object" && value.constructor === Object && !Array.isArray(value);
}
